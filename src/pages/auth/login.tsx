import { TypographyH2 } from "../../components/ui/Typography";
import { useNavigate, Navigate } from "react-router-dom";
import { RoutesName } from "../../utils/constant";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import {
    yupResolver,
    yup,
    useForm,
    SubmitHandler,
    FieldValues,
} from "../../utils/react-hook-form";
import { useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../stateStore";
import { adminLogin } from "../../services";

const loginFormValidation = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

interface loginFormInput {
    email: string;
    password: string;
}

const loginFormDefaultValues = {
    email: "",
    password: "",
};
const LoginPage = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { adminDetailsLoading, adminDetails, error} = useTypedSelector(
        (state) => state.Admin
    );


    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<loginFormInput>({
        defaultValues: loginFormDefaultValues,
        resolver: yupResolver(loginFormValidation),
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        dispatch(adminLogin({...data}))
        console.log('working')
    };

    return (
            <div
            className="
            relative 
            w-full 
            h-full"
            >
                {/* Login main section */}
                <div
                className="
                gradient1
                h-screen
                flex
                flex-col
                justify-center
                items-center
                w-full
                p-5"
                >
                    {/* Login Form section */}
                    <div
                    className="
                    lg:py-20
                    lg:px-10
                    px-5
                    py-10
                    bg-accent
                    md:w-[400px]
                    w-full
                    rounded-lg
                    shadow-lg
                    flex
                    flex-col
                    items-center
                    gap-5"
                    >
                        {/* Login Header section */}
                        <TypographyH2 
                        title="Admin Login"
                        className="text-primary"/>

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
                                    Email adress (required)
                                </label>
                                <Input
                                    disabled={adminDetailsLoading}
                                    type="email"
                                    id="email"
                                    placeholder="Mail*"
                                    {...register("email")}
                                    error={errors?.email?.message}
                                />
                            </div>

                            <div className="grid w-full items-center gap-1.5">
                                <label htmlFor="phone" className="text-sm">
                                    Password (required)
                                </label>
                                <Input
                                    disabled={adminDetailsLoading}
                                    type="text"
                                    id="password"
                                    placeholder="Your password"
                                    {...register("password")}
                                    error={errors?.password?.message}
                                />
                            </div>

                            <Button
                            type="submit"
                            className="
                            w-full 
                            h-[auto] 
                            rounded-none 
                            gradient8
                            text-sm 
                            text-white py-3"
                            >
                                {adminDetailsLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default LoginPage;
