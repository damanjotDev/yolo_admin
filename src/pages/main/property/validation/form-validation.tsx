import { yup } from "../../../../utils/react-hook-form";

//--------------------------------------------------property form validation

export const propertyFormValidationSchema = () => {
    return yup.object().shape({
        email: yup.string().required()
        .email('Invalid email address'),
        title: yup.string().required(),
        description: yup.string().required(),
        coordinates: yup.object().shape({
          lat: yup.number().required(),
          lng: yup.number().required(),
          address: yup.string().required(),
        }),
        contactNo: yup.number().required(),
        images:  yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            imageUrl: yup.string().required(),
            type: yup.string().required(),
            size: yup.number().positive().required()
          })).min(1),
        
      })
}