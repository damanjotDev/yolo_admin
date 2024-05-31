
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
import { editHome } from "../../../services"
import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { homeFormValidationSchema } from "./validation";

const homeFormValidation = homeFormValidationSchema();

export const  HomeEditPage = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  const { homeDetailsLoading, homeDetails} = useTypedSelector((state) => state.Home);
  
  const homeFormDefaultValues = {
    title: homeDetails?.title || "",
    description: homeDetails?.description || "",
    image: homeDetails?.image || { name: '', imageUrl: '', type: '', size: 0}
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
} = useForm({
    defaultValues: homeFormDefaultValues,
    resolver: yupResolver(homeFormValidation),
});

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  data['id'] = homeDetails?.id
  dispatch(editHome({data, navigate}))
};

  return (
    <div className="flex flex-col p-5 pt-6 space-y-4 ">

      <div className="flex items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Edit Home</h2>
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
                    <label htmlFor="title" className="text-sm">
                        Title (required)
                    </label>
                    <Input
                        disabled={homeDetailsLoading}
                        type="text"
                        id="title"
                        placeholder="Your title"
                        {...register("title")}
                        error={errors?.title?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="title" className="text-sm">
                        Description (required)
                    </label>
                    <Input
                        disabled={homeDetailsLoading}
                        type="text"
                        id="description"
                        placeholder="Your Description"
                        {...register("description")}
                        error={errors?.description?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="phone" className="text-sm">
                        Images (required)
                    </label>
                    <FileInput
                      value = {watch('image')?.imageUrl?[watch('image')]:[]}
                      callBack = {(value: any)=> setValue('image', value?.lenght===0?{name: '', imageUrl: '', type: '', size: 0}: value[0])}
                      count={1}
                      formats={["jpg", "jpeg", "png"]}
                      error={errors?.image?.name?.message}
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
                        {homeDetailsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
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
                    onClick={()=> navigate(RoutesName.Homes)}>
                        Go Back
                    </Button>
                </div>
          </form>
        </Card>
      </div>
    </div>
  )
}