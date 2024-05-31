import { SocialTypes } from "../../../../utils/modals";
import { yup } from "../../../../utils/react-hook-form";

//--------------------------------------------------about form validation

export const pageFormValidationSchema = () => {
    return yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
        images:  yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            imageUrl: yup.string().required(),
            type: yup.string().required(),
            size: yup.number().positive().required()
          })).optional()
      })
}