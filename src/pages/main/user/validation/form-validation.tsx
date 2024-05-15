import { UserStatus, UserType } from "../../../../utils/modals";
import { yup } from "../../../../utils/react-hook-form";

//--------------------------------------------------user form validation

export const userFormValidationSchema = () => {
    return yup.object().shape({
        email: yup.string().required()
        .email('Invalid email address'),
        image: yup.object().shape({
          name: yup.string().required(),
          imageUrl: yup.string().required(),
          type: yup.string().required(),
          size: yup.number().positive().required(),
        }),
        name: yup.string().required(),
        password: yup.string().required(),
        role: yup.number().oneOf(Object.values(UserType)),
      })
}