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
import { editService } from "../../../services"
import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { Card } from "../../../components/ui/card";
import { RoutesName } from "../../../utils/constant";
import { FileInput } from "../../../components/ui/drag-drop";
import { useState } from "react";
import { RichTextEditor } from "../../../components/ui/rich-text-editor";

const serviceFormSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  images:  yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      imageUrl: yup.string().required(),
      type: yup.string().required(),
      size: yup.number().positive().required()
    })).min(1),
  icons: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      imageUrl: yup.string().required(),
      type: yup.string().required(),
      size: yup.number().positive().required()
    })).min(1)
})

export const  ServiceEditPage = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { serviceDetailsLoading, serviceDetails, error }  = useTypedSelector((state) => state.Service);

  const serviceFormDefaultValues = {
    title: serviceDetails?.title || "",
    description: serviceDetails?.description || "",
    images: serviceDetails?.images || [],
    icons: serviceDetails?.icons || []
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
} = useForm({
    defaultValues: serviceFormDefaultValues,
    resolver: yupResolver(serviceFormSchema),
});

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  data["id"] = serviceDetails?.id
  dispatch(editService({data, navigate}))
};

 

  return (
    <div className="flex flex-col p-5 pt-6 space-y-4 ">

    <div className="flex items-center justify-center space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">Edit Service</h2>
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
                      Title (required)
                  </label>
                  <Input
                      disabled={serviceDetailsLoading}
                      type="text"
                      id="title"
                      placeholder="Your title"
                      {...register("title")}
                      error={errors?.title?.message}
                  />
              </div>

              <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="phone" className="text-sm">
                      Image (required)
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
                  <label htmlFor="phone" className="text-sm">
                      Icon (required)
                  </label>
                  <FileInput
                    value = {watch('icons')}
                    callBack = {(value: any)=> setValue('icons', value)}
                    count={1}
                    formats={["jpg", "jpeg", "png"]}
                    error={errors?.icons?.message}
                  />
              </div>

              <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="phone" className="text-sm">
                      Description (required)
                  </label>
                  <RichTextEditor 
                      value={watch('description')}
                      setValue={(value: string)=> setValue('description', value)}
                      error={errors?.description?.message}/>
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
                      {serviceDetailsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
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
                  onClick={()=> navigate(RoutesName.Services)}>
                      Go Back
                  </Button>
              </div>
        </form>
      </Card>
    </div>
  </div>
  )
}