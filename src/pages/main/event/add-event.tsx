
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
import { addEvent } from "../../../services"
import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { eventFormValidationSchema } from "./validation";
import { AvailableEventTypes } from "../../../utils/modals";

const eventFormValidation = eventFormValidationSchema()

const eventFormDefaultValues = {
  title: "",
  images: [],
  eventType: 'EVENT'
}

// This can come from your database or API.


export const  EventAddPage = () => {

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
    defaultValues: eventFormDefaultValues,
    resolver: yupResolver(eventFormValidation),
});

const { eventDetailsLoading} = useTypedSelector((state) => state.Event);


const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  dispatch(addEvent({data, navigate}))
};


  return (
    <div className="flex flex-col p-5 pt-6 space-y-4 ">

      <div className="flex items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Add Event</h2>
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
                        disabled={eventDetailsLoading}
                        type="text"
                        id="title"
                        placeholder="Your title"
                        {...register("title")}
                        error={errors?.title?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="password" className="text-sm">
                       User Type (optinal)
                    </label>
                    <Select onValueChange={(value: string)=> setValue('eventType', value)} value={watch('eventType')}>
                      <SelectTrigger className="w-full" error={errors?.eventType?.message}>
                        <SelectValue placeholder="Select Event"/>
                      </SelectTrigger>
                      <SelectContent >
                        {AvailableEventTypes?.map((item,index)=>(
                          <SelectItem value={item.value}>{item.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="phone" className="text-sm">
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
                        {eventDetailsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
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
                    onClick={()=> navigate(RoutesName.Events)}>
                        Go Back
                    </Button>
                </div>
          </form>
        </Card>
      </div>
    </div>
  )
}