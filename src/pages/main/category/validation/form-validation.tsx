import { yup } from "../../../../utils/react-hook-form";

//--------------------------------------------------property form validation

export const categoryFormValidationSchema = () => {
    return yup.object().shape({
        title: yup.string().required(),
      })
}