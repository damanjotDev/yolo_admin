
import { useState } from "react";
import { 
  Textarea,
  Button,
  Input,
  Card,
  FileInput,
  RichTextEditor,
  GooglePlacesInput,
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent
 } from "../../../components/ui";
import {
  yupResolver,
  yup,
  useForm,
  SubmitHandler,
  FieldValues,
  RoutesName, 
  cn
} from "../../../utils";
import { editAbout } from "../../../services"
import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { useNavigate } from "react-router-dom";
import { Loader, X } from "lucide-react";
import { aboutFormValidationSchema } from "./validation";
import { AvailableSocialTypes } from "../../../utils/modals";

const aboutFormValidation = aboutFormValidationSchema();

export const  AboutEditPage = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  const { aboutDetailsLoading, aboutDetails} = useTypedSelector((state) => state.About);
  
  const aboutFormDefaultValues = {
    email: aboutDetails?.email || "",
    title: aboutDetails?.title || "",
    description: aboutDetails?.description || "",
    images: aboutDetails?.images || [],
    awards: aboutDetails?.awards || [],
    coordinates: aboutDetails?.coordinates || { lat: 0, lng: 0, address: ""},
    contactNo: aboutDetails?.contactNo || 0,
    socialLinks: aboutDetails?.socialLinks || [],
    isCover: aboutDetails?.isCover || false
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
} = useForm({
    defaultValues: aboutFormDefaultValues,
    resolver: yupResolver(aboutFormValidation),
});

const [socialLinkState, setSocialLinkState] = useState({type: "", link: ""})
const [socialLinkError, setSocialLinkError] = useState({type: "", link: ""})

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  data['id'] = aboutDetails?.id
  dispatch(editAbout({data, navigate}))
};

const handleSocialLink = () => {
  if(!socialLinkState?.type){
    setSocialLinkError({...socialLinkError, type: 'social type required'})
  }
  else if (!socialLinkState?.link)(
    setSocialLinkError({...socialLinkError, link: 'social link required'})
  )
  else{
    setSocialLinkError({type: "", link: ""});
    setValue('socialLinks', [...watch('socialLinks'),socialLinkState])
    setSocialLinkState({type: "", link: ""})
  }
}

const handleDeleteSocialLink = (value: number) => {
  const newData =  watch('socialLinks')?.filter((item, index)=> index!==value)
  setValue('socialLinks', newData);
}

  return (
    <div className="flex flex-col p-5 pt-6 space-y-4 ">

      <div className="flex items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Edit About</h2>
      </div>

      <div className="flex items-center justify-center">
      <Card className="space-y-4 px-5 py-10 md:w-[60%]">
          <form
            className="
            w-full
            grid
            grid-cols-1
            gap-5"
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="email" className="text-sm">
                        Email (required)
                    </label>
                    <Input
                        disabled={aboutDetailsLoading}
                        type="text"
                        id="email"
                        placeholder="Your email"
                        {...register("email")}
                        error={errors?.email?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="title" className="text-sm">
                        Title (required)
                    </label>
                    <Input
                        disabled={aboutDetailsLoading}
                        type="text"
                        id="title"
                        placeholder="Your title"
                        {...register("title")}
                        error={errors?.title?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="phone" className="text-sm">
                        Contact No (required)
                    </label>
                    <Input
                        disabled={aboutDetailsLoading}
                        type="number"
                        id="contactNo"
                        placeholder="Your contact no"
                        {...register("contactNo")}
                        error={errors?.contactNo?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="phone" className="text-sm">
                        Location (required)
                    </label>
                    <GooglePlacesInput 
                    value={watch('coordinates')?.address}
                    setValue={(value: any) => setValue('coordinates', value)}
                    error={errors?.coordinates?.message || errors?.coordinates?.lat?.message || errors?.coordinates?.lng?.message}/>
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="password" className="text-sm">
                       Is Cover (optional)
                    </label>
                    <Select onValueChange={(value: string)=> setValue('isCover', value==="0"?false:true)} value={watch('isCover')===false?'0':'1'}>
                      <SelectTrigger className="w-full" error={errors?.isCover?.message}>
                        <SelectValue placeholder="Select Is Cover Type"/>
                      </SelectTrigger>
                      <SelectContent >
                          <SelectItem value={'0'}>{'False'}</SelectItem>
                          <SelectItem value={'1'}>{'True'}</SelectItem>
                      </SelectContent>
                    </Select>
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="images" className="text-sm">
                        Images (required)
                    </label>
                    <FileInput
                      value = {watch('images')}
                      callBack = {(value: any)=> setValue('images', value)}
                      count={1}
                      formats={["jpg", "jpeg", "png"]}
                      error={errors?.images?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="awards" className="text-sm">
                        Awards (required)
                    </label>
                    <FileInput
                      value = {watch('awards')}
                      callBack = {(value: any)=> setValue('awards', value)}
                      count={1}
                      formats={["jpg", "jpeg", "png"]}
                      error={errors?.awards?.message}
                    />
                </div>
                
                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="description" className="text-sm">
                        Description (required)
                    </label>
                    <RichTextEditor 
                        value={watch('description')}
                        setValue={(value: string)=> setValue('description', value)}
                        error={errors?.description?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-2 mt-10">
                    <label htmlFor="description" className="text-sm">
                        Social Links (optional)
                    </label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="bg-accent w-[120px]"
                      onClick={() => handleSocialLink()}
                    >Add
                    </Button>

                    <div className="w-full flex items-center gap-5">

                      <div className="w-[150px] flex flex-col items-center gap-1.5">
                        <label htmlFor="password" className="text-sm">
                          Social Type (required)
                        </label>
                        <Select 
                        onValueChange={(value: string)=> setSocialLinkState({...socialLinkState, type: value})} 
                        value={socialLinkState?.type}>
                          <SelectTrigger className="w-full" error={socialLinkError?.type}>
                            <SelectValue placeholder="Select  Type"/>
                          </SelectTrigger>
                          <SelectContent >
                              {AvailableSocialTypes?.map((item)=>(
                                 <SelectItem value={item.value}>{item.title}</SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex flex-1 flex-col gap-1.5">
                        <label htmlFor="phone" className="text-sm">
                            Social Link (required)
                        </label>
                        <Input
                            disabled={aboutDetailsLoading}
                            type="text"
                            id="link"
                            placeholder="Your social link"
                            onChange={(e)=>{
                              setSocialLinkState({...socialLinkState,link: e.target.value})
                            }}
                            error={socialLinkError?.link}
                        />
                      </div>

                    </div>

                    {watch("socialLinks")?.map((item, index)=>(
                       <div className="w-full flex items-center gap-5 mt-4">

                        <div className="w-[150px] flex flex-col gap-1.5 bg-accent">
                          <Input
                              disabled={aboutDetailsLoading}
                              type="text"
                              id="link"
                              value={item.type}
                          />
                        </div>
  
                        <div className="flex flex-1 flex-col gap-1.5 bg-accent">
                          <Input
                              disabled={aboutDetailsLoading}
                              type="text"
                              id="link"
                              value={item.link}
                          />
                        </div>

                         <X className="h-4 w-4" onClick={()=> handleDeleteSocialLink(index)} />
                     </div>
                    ))}

                </div>

                <div className="flex items-center justify-end gap-5 mt-12">
                    <Button
                    type="submit"
                    className="
                    h-[auto] 
                    gradient8
                    text-sm 
                    text-white 
                    py-3
                    px-6
                    rounded-lg"
                    >
                        {aboutDetailsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                        Edit
                    </Button>

                    <Button
                    type="button"
                    className="
                    h-[auto] 
                    rounded-lg
                    gradient8
                    text-sm 
                    text-white 
                    py-3
                    px-6"
                    onClick={()=> navigate(RoutesName.Abouts)}>
                        Go Back
                    </Button>
                </div>
          </form>
        </Card>
      </div>
    </div>
  )
}