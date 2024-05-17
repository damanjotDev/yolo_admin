
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
  SelectContent,
  SelectItem
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
import { addAbout } from "../../../services"
import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { aboutFormValidationSchema } from "./validation";

const aboutFormValidation = aboutFormValidationSchema()

const aboutFormDefaultValues = {
  email: "",
  title: "",
  description: "",
  images: [],
  awards: [],
  coordinates: {
    lat: 0,
    lng: 0,
    address: ""
  },
  contactNo: 0,
  socialLinks: [],
  isCover: false
}

export const  AboutAddPage = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
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

const { aboutDetailsLoading} = useTypedSelector((state) => state.About);


const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  dispatch(addAbout({data, navigate}))
};

  return (
    <div className="flex flex-col p-5 pt-6 space-y-4 ">

      <div className="flex items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Add About</h2>
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
                        Add
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