import { useRef, useEffect, useState } from "react";
import { FaUpload, FaRegFileImage, FaRegFile } from "react-icons/fa";
import { BsX } from "../../utils/icons"
import { toast} from "./use-toast";

export const FileInput = ({
  count,
  formats,
  ownerLicense,
  setOwnerLicense
}) => {
  const dropContainer = useRef(null);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef(null);

  const uploadFiles = async(files)=> {
    try {
      const nFiles = files.map(async (file) => {
        const base64String = await convertFileBase64(file);
        return {
          name: file.name,
          photo: base64String,
          type: file.type,
          size: file.size
        };
      });

      const newFiles =  await Promise.all(nFiles)
      setOwnerLicense([...ownerLicense, ...newFiles]);
    } catch (error) {
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

  function showImage(image) {
    alert('ok');
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
        className={`${
          dragging
            ? "border border-primary bg-[#EDF2FF]"
            : "border-dashed"
        } w-full flex items-center justify-center mx-auto text-center border-2 rounded-md py-5`}
        ref={dropContainer}
      >
        <div className="flex-1 flex flex-col">
          <div className="mx-auto text-gray-400 mb-2">
            <FaUpload size={18} />
          </div>
          <div className="text-[12px] font-normal text-gray-500">
            <input
              className="opacity-0 hidden"
              type="file"
              multiple
              accept="image/*"
              ref={fileRef}
              onChange={(e) => handleDrop(e, "inputFile")}
            />
            <span
              className="text-[#4070f4] cursor-pointer"
              onClick={() => {
                fileRef.current.click();
              }}
            >
              Click to upload
            </span>{" "}
            or drag and drop
          </div>
          <div className="text-[10px] font-normal text-gray-500">
            Only two files PNG, JPG or JPEG
          </div>
        </div>
      </div>

      {ownerLicense.length > 0 && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 ">
          {ownerLicense.map((img, index) => (
            <div className="w-full px-3 py-3.5 rounded-md bg-slate-200 space-y-3">
              <div className="flex justify-between">
                <div className="w-[70%] flex justify-start items-center space-x-2">
                  <div
                    className="text-primary text-[37px] cursor-pointer"
                    onClick={() => showImage(img.photo)}
                  >
                    {img.type.match(/image.*/i) ? (
                      <FaRegFileImage />
                    ) : (
                      <FaRegFile />
                    )}
                  </div>
                  <div className=" w-full space-y-1">
                    <span className="w-full text-xs font-medium truncate break-all">
                      {img.name}
                    </span>
                    <div className="text-[10px] font-medium">{`${Math.floor(
                      img.size / 1024
                    )} KB`}</div>
                  </div>
                </div>
                <div className="flex-1 flex justify-end">
                  <div className="space-y-1">
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
            </div>
          ))}
        </div>
      )}
    </>
  );
}
