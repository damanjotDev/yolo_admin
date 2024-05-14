import { toast } from "../components/ui/use-toast";
import { fileUpload} from "../api/axios";


export const filesUpload = async (file: File) => {
    try {

        const formData = new FormData();
        formData.append('file', file);

        const {data} = await fileUpload(formData)
        return data
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
    }
}