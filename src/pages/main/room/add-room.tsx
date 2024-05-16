
import { useEffect, useState } from "react";
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
  SelectItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
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
import { addRoom, getProperties } from "../../../services"
import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { roomFormValidationSchema } from "./validation";
import { AvailableRoomBedTypes } from "../../../utils/modals";

const roomFormValidation = roomFormValidationSchema()

const roomFormDefaultValues = {
  title: "",
  images: [],
  price: 0,
  adult: {
    min: 0,
    max: 0,
  },
  children: {
    min: 0,
    max: 0,
  },
  bookingNight: {
    min: 0,
    max: 0,
  },
  bedType: "",
  roomArea: 0,
  description: "",
  coordinates: {
    lat: 0,
    lng: 0,
    address: ""
  },
  service_ids: [1,4],
  property_id: 0
}

// This can come from your database or API.


export const  RoomAddPage = () => {

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
    defaultValues: roomFormDefaultValues,
    resolver: yupResolver(roomFormValidation),
});

const { roomDetailsLoading} = useTypedSelector((state) => state.Room);
const { propertiesLoading, properties, error } = useTypedSelector((state) => state.Property);


const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  dispatch(addRoom({data, navigate}))
};


useEffect(()=>{
  getProperties()
},[])

  return (
    <div className="flex flex-col p-5 pt-6 space-y-4 ">

      <div className="flex items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Add Room</h2>
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
                        disabled={roomDetailsLoading}
                        type="text"
                        id="title"
                        placeholder="Your title"
                        {...register("title")}
                        error={errors?.title?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="price" className="text-sm">
                        Price (required)
                    </label>
                    <Input
                        disabled={roomDetailsLoading}
                        type="number"
                        id="price"
                        placeholder="Your price"
                        {...register("price")}
                        error={errors?.price?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="coordinates" className="text-sm">
                        Location (required)
                    </label>
                    <GooglePlacesInput 
                    value={watch('coordinates')?.address}
                    setValue={(value: any) => setValue('coordinates', value)}
                    error={errors?.coordinates?.message || errors?.coordinates?.lat?.message || errors?.coordinates?.lng?.message || errors?.coordinates?.address?.message}/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-1.5">
                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="adult" className="text-sm">
                            Min Adult (required)
                        </label>
                        <Input
                            disabled={roomDetailsLoading}
                            type="number"
                            placeholder="Min adult member"
                            value={watch('adult')?.min}
                            onChange={(e)=> setValue('adult', {...watch('adult'), min: +e.target.value})}
                            error={errors?.adult?.message || errors?.adult?.min?.message}
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="adult" className="text-sm">
                            Max Adult (required)
                        </label>
                        <Input
                            disabled={roomDetailsLoading}
                            type="number"
                            placeholder="Max adult member"
                            value={watch('adult')?.max}
                            onChange={(e)=> setValue('adult', {...watch('adult'), max: +e.target.value})}
                            error={errors?.adult?.message || errors?.adult?.max?.message}
                        />
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-1.5">
                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="adult" className="text-sm">
                            Min Children (required)
                        </label>
                        <Input
                            disabled={roomDetailsLoading}
                            type="number"
                            placeholder="Min children member"
                            value={watch('children')?.min}
                            onChange={(e)=> setValue('children', {...watch('children'), min: +e.target.value})}
                            error={errors?.children?.message || errors?.children?.min?.message}
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="adult" className="text-sm">
                            Max Children (required)
                        </label>
                        <Input
                            disabled={roomDetailsLoading}
                            type="number"
                            placeholder="Max children member"
                            value={watch('children')?.max}
                            onChange={(e)=> setValue('children', {...watch('children'), max: +e.target.value})}
                            error={errors?.children?.message || errors?.children?.max?.message}
                        />
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-1.5">
                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="adult" className="text-sm">
                            Min Booking Night (required)
                        </label>
                        <Input
                            disabled={roomDetailsLoading}
                            type="number"
                            placeholder="Min booking night member"
                            value={watch('bookingNight')?.min}
                            onChange={(e)=> setValue('bookingNight', {...watch('bookingNight'), min: +e.target.value})}
                            error={errors?.bookingNight?.message || errors?.bookingNight?.min?.message}
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="adult" className="text-sm">
                            Max Booking Night (required)
                        </label>
                        <Input
                            disabled={roomDetailsLoading}
                            type="number"
                            placeholder="Max booking night member"
                            value={watch('bookingNight')?.max}
                            onChange={(e)=> setValue('bookingNight', {...watch('bookingNight'), max: +e.target.value})}
                            error={errors?.bookingNight?.message || errors?.bookingNight?.max?.message}
                        />
                    </div>

                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="password" className="text-sm">
                       Room Bed Type (required)
                    </label>
                    <Select onValueChange={(value: string)=> setValue('bedType', value)} value={watch('bedType')}>
                      <SelectTrigger className="w-full" error={errors?.bedType?.message}>
                        <SelectValue placeholder="Select Bed Type"/>
                      </SelectTrigger>
                      <SelectContent >
                        {AvailableRoomBedTypes?.map((item,index)=>(
                          <SelectItem value={item.value}>{item.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="password" className="text-sm">
                       Room Property (required)
                    </label>
                    <Select onValueChange={(value)=> setValue('property_id', +value)} value={watch('property_id').toString()}>
                      <SelectTrigger className="w-full" error={errors?.property_id?.message}>
                        <SelectValue placeholder="Select Property"/>
                      </SelectTrigger>
                      <SelectContent >
                        {properties?.rows?.map((item,index)=>(
                          <SelectItem value={item.id.toString()}>{item.title}</SelectItem>
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
                        {roomDetailsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
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