import { SocialTypes } from "../../../../utils/modals";
import { yup } from "../../../../utils/react-hook-form";

//--------------------------------------------------about form validation

export const aboutFormValidationSchema = () => {
    return yup.object().shape({
        email: yup.string().required()
        .email('Invalid email address'),
        title: yup.string().required(),
        description: yup.string().required(),
        images:  yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            imageUrl: yup.string().required(),
            type: yup.string().required(),
            size: yup.number().positive().required()
          })).min(1),
        awards:  yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            imageUrl: yup.string().required(),
            type: yup.string().required(),
            size: yup.number().positive().required()
          })).min(1),
        coordinates: yup.object().shape({
          lat: yup.number().required(),
          lng: yup.number().required(),
          address: yup.string().required(),
        }),
        contactNo: yup.number().required(),
        socialLinks: yup.array().of(
          yup.object().shape({
            type: yup.string().oneOf(Object.values(SocialTypes)).required(),
            link: yup.string().required()
          })).default([]),
        isCover: yup.boolean().default(false)
      })
}