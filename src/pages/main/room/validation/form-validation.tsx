import { RoomBedType } from "../../../../utils/modals";
import { yup } from "../../../../utils/react-hook-form";

//--------------------------------------------------property form validation

export const roomFormValidationSchema = () => {
    return yup.object().shape({
        title: yup.string().required(),
        images:  yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            imageUrl: yup.string().required(),
            type: yup.string().required(),
            size: yup.number().positive().required()
          })).min(1),
        price: yup.number().required().min(1),
        adult: yup.object().shape({
          min: yup.number().required().min(1),
          max: yup.number().required().min(1)
        }),
        children: yup.object().shape({
          min: yup.number().required().min(1),
          max: yup.number().required().min(1)
        }),
        bookingNight: yup.object().shape({
          min: yup.number().required().min(1),
          max: yup.number().required().min(1)
        }),
        bedType: yup.string().oneOf(Object.values(RoomBedType)),
        roomArea: yup.number().required(),
        description: yup.string().required(),
        coordinates: yup.object().shape({
          lat: yup.number().required(),
          lng: yup.number().required(),
          address: yup.string().required(),
        }),
        service_ids: yup.array().of(yup.number()).default([]),
        property_id: yup.number().required().min(1, 'Please select property'),
      })
}