
import { cn } from "../../../lib/utils"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea";
import {
  yupResolver,
  yup,
  useForm,
  SubmitHandler,
  FieldValues,
} from "../../../utils/react-hook-form";
import { editProperty } from "../../../services"
import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { Card } from "../../../components/ui/card";
import { RoutesName } from "../../../utils/constant";
import { FileInput } from "../../../components/ui/drag-drop";
import { useState } from "react";
import { RichTextEditor } from "../../../components/ui/rich-text-editor";
import { GooglePlacesInput } from "../../../components/google-places/google-places-input";
import { propertyFormValidationSchema } from "./validation";

const propertyFormValidation = propertyFormValidationSchema();

export const  PropertyEditPage = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  const { propertyDetailsLoading, propertyDetails} = useTypedSelector((state) => state.Property);
  
  const propertyFormDefaultValues = {
    email: propertyDetails?.email || "",
    title: propertyDetails?.title || "",
    description: propertyDetails?.description ||"",
    coordinates: propertyDetails?.coordinates || {lat: 0, lng: 0, address: ""},
    contactNo: propertyDetails?.contactNo || 0,
    images: propertyDetails?.images || [],
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
} = useForm({
    defaultValues: propertyFormDefaultValues,
    resolver: yupResolver(propertyFormValidation),
});

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  data['id'] = propertyDetails?.id
  dispatch(editProperty({data, navigate}))
};

console.log('60', errors, watch('coordinates'))

  return (
    <div className="flex flex-col p-5 pt-6 space-y-4 ">

      <div className="flex items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Edit Property</h2>
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
                        disabled={true}
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
                        disabled={propertyDetailsLoading}
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
                        disabled={propertyDetailsLoading}
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
                    <label htmlFor="phone" className="text-sm">
                        Images (required)
                    </label>
                    <FileInput
                      value = {watch('images')}
                      callBack = {(value: any)=> setValue('images', value)}
                      count={5}
                      formats={["jpg", "jpeg", "png"]}
                      error={errors?.images?.message}
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
                        {propertyDetailsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
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
                    onClick={()=> navigate(RoutesName.Properties)}>
                        Go Back
                    </Button>
                </div>
          </form>
        </Card>
      </div>
    </div>
  )
}