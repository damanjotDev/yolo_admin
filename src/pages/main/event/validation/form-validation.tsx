import { EventType } from "../../../../utils/modals";
import { yup } from "../../../../utils/react-hook-form";

//--------------------------------------------------property form validation

export const eventFormValidationSchema = () => {
    return yup.object().shape({
        title: yup.string().required(),
        images:  yup.array().of(
          yup.object().shape({
            name: yup.string().required(),
            imageUrl: yup.string().required(),
            type: yup.string().required(),
            size: yup.number().positive().required()
          })).min(1),
        eventType: yup.string().oneOf(Object.values(EventType)),
      })
}