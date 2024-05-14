
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
import { error } from "console";
import { RichTextEditor } from "../../../components/ui/rich-text-editor";

const propertyFormSchema = yup.object().shape({
  email: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  coordinates: yup.object().shape({
    lat: yup.number().required(),
    long: yup.number().required()
  }),
  contactNo: yup.number().required(),
  images:  yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      imageUrl: yup.string().required(),
      type: yup.string().required(),
      size: yup.number().positive().required()
    })).min(1),
  
})

export const  PropertyEditPage = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  const { propertyDetailsLoading, propertyDetails} = useTypedSelector((state) => state.Property);
  
  const propertyFormDefaultValues = {
    email: propertyDetails?.email || "",
    title: propertyDetails?.title || "",
    description: propertyDetails?.description ||"",
    coordinates: propertyDetails?.coordinates || {lat: 0, long: 0},
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
    resolver: yupResolver(propertyFormSchema),
});

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  data['id'] = propertyDetails?.id
  dispatch(editProperty({data, navigate}))
};


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

                <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-1.5">
                  <div className="grid w-full items-center gap-1.5">
                      <label htmlFor="phone" className="text-sm">
                          Lat (required)
                      </label>
                      <Input
                          disabled={propertyDetailsLoading}
                          type="number"
                          id="coordinates"
                          placeholder="Your lat no"
                          onChange={(e)=> setValue('coordinates', {...watch('coordinates'), lat: +e.target.value})}
                          error={errors?.coordinates?.message}
                          value={watch('coordinates')?.lat}
                      />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                      <label htmlFor="phone" className="text-sm">
                      Long(required)
                      </label>
                      <Input
                          disabled={propertyDetailsLoading}
                          type="number"
                          id="coordinates"
                          placeholder="Your long no"
                          onChange={(e)=> setValue('coordinates', {...watch('coordinates'), long: +e.target.value})}
                          error={errors?.coordinates?.message}
                          value={watch('coordinates')?.lat}
                      />
                  </div>
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