import { yup } from "../../../../utils/react-hook-form";

//--------------------------------------------------property form validation

export const tagFormValidationSchema = () => {
    return yup.object().shape({
        title: yup.string().required(),
      })
}