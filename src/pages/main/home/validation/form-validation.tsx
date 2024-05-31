import { yup } from "../../../../utils/react-hook-form";

//--------------------------------------------------property form validation

export const homeFormValidationSchema = () => {
    return yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
        image:  
          yup.object().shape({
            name: yup.string().required(),
            imageUrl: yup.string().required(),
            type: yup.string().required(),
            size: yup.number().positive().required()
          })
      })
}