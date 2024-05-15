import { useRef, useEffect, useState } from "react";
import { FaUpload, FaRegFileImage, FaRegFile } from "react-icons/fa";
import { BsX } from "../../utils/icons"
import { toast} from "./use-toast";
import { cn } from "../../lib/utils";
import { filesUpload } from "../../services/common";
import { CustomDialog } from "../common/custom-dialog";


export const FileInput = ({
  count,
  formats,
  value,
  callBack,
  error
}) => {
  const dropContainer = useRef(null);
  const fileRef = useRef(null);
  
  const [dragging, setDragging] = useState(false);
  const [ownerLicense, setOwnerLicense] = useState(value);


  const [isUpload, setIsUpload] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const uploadFiles = async(files)=> {
    try {
      setIsUpload(true);

      let newFiles = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const base64String = await convertFileBase64(file);
        const fileInfo = {
          name: file.name,
          imageUrl: base64String,
          type: file.type,
          size: file.size
        };
  
        // Upload the file
        const result = await filesUpload(file);
        console.log('result', result)
        console.log('File uploaded:', result);
  
        // Assuming each result has a 'fileUrl' property
        const uploadedFile = { ...fileInfo, imageUrl: result?.fileUrl };
        newFiles.push(uploadedFile);
      }

      // Update state with new files
      callBack([...ownerLicense, ...newFiles]);
      setOwnerLicense((prevOwnerLicense) => [...prevOwnerLicense, ...newFiles]);
     

      setIsUpload(false)
      
    } catch (error) {
      console.log('error', error)
      setIsUpload(false)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with uploading your files.",
      })
    }
  }

  const onDelete = (indexImg) =>  {
    const updatedList = ownerLicense.filter((ele, index) => index !== indexImg);
    setOwnerLicense(updatedList);
    callBack(updatedList);
  }

  function handleDrop(e, type) {
      fileValidation(e, type)
  }

  const fileValidation = (e, type)=>{
    let files;
    if (type === "inputFile") {
      files = [...e.target.files];
    } else {
      e.preventDefault();
      e.stopPropagation();
      setDragging(false);
      files = [...e.dataTransfer.files];
    }

    const allFilesValid = files.every((file) => {
      return formats.some((format) => file.type.endsWith(`/${format}`));
    });

    if (ownerLicense.length >= count) {
      toast({
        variant: "destructive",
        title: `Only ${count} files can be uploaded.`,
        // action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      return;
    }
    else if (!allFilesValid) {
      toast({
        variant: "destructive",
        title: `Invalid file format. Please only upload ${formats
          .join(", ")
          .toUpperCase()}`,
        // action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      return;
    }
    else if (count && count < files.length) {
      toast({
        variant: "destructive",
        title: `Only ${count} file${count !== 1 ? "s" : ""} can be uploaded at a time`,
        // action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      return;
    }
    else if (files.length===0) {
      toast({
        variant: "destructive",
        title: `Please select atleast one file`,
        // action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      return;
    }
    else{
      uploadFiles(files)
    }
  }

  async function convertFileBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  

  useEffect(() => {
    function handleDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragging(true);
    }
    function handleDragLeave(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragging(false);
    }
    dropContainer.current.addEventListener("dragover", handleDragOver);
    dropContainer.current.addEventListener("drop", handleDrop);
    dropContainer.current.addEventListener("dragleave", handleDragLeave);

    return () => {
      if (dropContainer.current) {
        dropContainer.current.removeEventListener("dragover", handleDragOver);
        dropContainer.current.removeEventListener("drop", handleDrop);
        dropContainer.current.removeEventListener("dragleave", handleDragLeave);
      }
    };
  }, [ownerLicense]);


  return (
    <>
      {/* Container Drop */}
      <div
        className={
        cn("w-full flex items-center justify-center rounded-md border border-dashed",
          dragging && "border border-primary bg-accent")
      }
        ref={dropContainer}
      >
        <div className="w-full flex flex-col p-5 "
        onClick={() => {
          fileRef.current.click();
        }}>
          <div className="w-full mb-2 flex items-center justify-center">
            <FaUpload size={18} />
          </div>
          <div className="w-full flex items-center justify-center font-normal">
            <input
              className="hidden"
              type="file"
              multiple
              accept="image/*"
              ref={fileRef}
              onChange={(e) => handleDrop(e, "inputFile")}
            />
            <span
              className="text-primary cursor-pointer"
            >
              Click to upload <span>{"or drag and drop"}</span>
            </span>
          </div>
          <div className="w-full flex items-center justify-center font-normal">
            Only two files PNG, JPG or JPEG
          </div>
          {isUpload?
          <div className="w-full flex items-center justify-center font-normal">
            Uploading....
          </div>:null}
        </div>
      </div>

      {ownerLicense.length > 0 && !isUpload? (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          {ownerLicense.map((img, index) => (
            <div className="w-full p-3 rounded-md bg-accent space-y-3">
              <div className="flex justify-between">
                <div className="w-[70%] flex justify-start items-center space-x-4">
                  <div
                    className="text-primary text-[37px] cursor-pointer"
                    onClick={() => setShowImage(true)}
                  >
                    {img.type.match(/image.*/i) ? (
                      <FaRegFileImage />
                    ) : (
                      <FaRegFile />
                    )}
                  </div>
                  <div className="w-full space-y-0">
                    <span className="w-full text-xs font-medium truncate break-all">
                      {img.name}
                    </span>
                    <div className="text-[10px] font-medium">{`${Math.floor(
                      img.size / 1024
                    )} KB`}</div>
                  </div>
                </div>
                <div className="flex-1 flex justify-end">
                  <div className="space-y-0">
                    <div
                      className="text-[17px] cursor-pointer"
                      onClick={() => onDelete(index)}
                    >
                      <BsX className="ml-auto" />
                    </div>
                    <div className="text-[10px] font-medium">
                      Done
                    </div>
                  </div>
                </div>
              </div>

              <CustomDialog 
              open={showImage} 
              setOpen={setShowImage} 
              title={img?.name} 
              description={`${Math.floor(img.size / 1024)} KB`}>
                    <div className="w-full h-full">
                      <img src={img.imageUrl} className="w-full h-full"/>
                    </div>
              </CustomDialog>
            </div>
          ))}
        </div>
      ): null}

      {error &&<span className="text-red-500">{error}</span>}
    </>
  );
}
