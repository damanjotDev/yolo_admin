
import { useState } from "react";
import { 
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
import { addUser } from "../../../services"
import { useAppDispatch, useTypedSelector } from "../../../stateStore";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { userFormValidationSchema } from "./validation";
import { AvailableUserTypes } from "../../../utils/modals";

const userFormValidation = userFormValidationSchema()

const userFormDefaultValues = {
  email: "",
  name: "",
  password: "",
  role: 2,
  image: {
    name: '',
    imageUrl: '',
    type: '',
    size: 0
  },
}

export const  UserAddPage = () => {

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
    defaultValues: userFormDefaultValues,
    resolver: yupResolver(userFormValidation),
});

const { userDetailsLoading} = useTypedSelector((state) => state.User);


const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  dispatch(addUser({data, navigate}))
};

  return (
    <div className="flex flex-col p-5 pt-6 space-y-4 ">

      <div className="flex items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Add User</h2>
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
                        disabled={userDetailsLoading}
                        type="text"
                        id="email"
                        placeholder="User email"
                        {...register("email")}
                        error={errors?.email?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="name" className="text-sm">
                        Name (required)
                    </label>
                    <Input
                        disabled={userDetailsLoading}
                        type="text"
                        id="name"
                        placeholder="User Name"
                        {...register("name")}
                        error={errors?.name?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="password" className="text-sm">
                        Password (required)
                    </label>
                    <Input
                        disabled={userDetailsLoading}
                        type="text"
                        id="password"
                        placeholder="User password no"
                        {...register("password")}
                        error={errors?.password?.message}
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="phone" className="text-sm">
                        Images (required)
                    </label>
                    <FileInput
                      value = {watch('image')?.imageUrl? [watch('image')]:[]}
                      callBack = {(value: any)=> setValue('image', value?.length?value[0]:null)}
                      count={1}
                      formats={["jpg", "jpeg", "png"]}
                      error={
                        errors?.image?.message || 
                        errors?.image?.imageUrl?.message || 
                        errors?.image?.name?.message || 
                        errors?.image?.size?.message }
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="password" className="text-sm">
                       User Type (optinal)
                    </label>
                    <Select onValueChange={(value: string)=> setValue('role', +value)} value={watch('role')+""}>
                      <SelectTrigger className="w-full" error={errors?.role?.message}>
                        <SelectValue placeholder="Select Service"/>
                      </SelectTrigger>
                      <SelectContent >
                        {AvailableUserTypes?.map((item,index)=>(
                          <SelectItem value={item.value+""}>{item.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                        {userDetailsLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
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
                    onClick={()=> navigate(RoutesName.Users)}>
                        Go Back
                    </Button>
                </div>
          </form>
        </Card>
      </div>
    </div>
  )
}