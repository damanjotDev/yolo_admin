import { useEffect } from "react";
import Autocomplete from "react-google-autocomplete";
import { cn } from "../../lib/utils";

export const GooglePlacesInput = ({ value, setValue, error }: { value: string, setValue: Function, error: string | null | undefined }) => {
    return (
        <>
            <Autocomplete
                apiKey={'AIzaSyAKQHnip2EA2qYh6hSW3cW4q_ruWawMAhY'}
                style={{ width: "90%" }}
                className={cn(
                    "flex h-11 w-full border border-input bg-background rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50",
                    error && "focus-visible:ring-red-500"
                )}
                onPlaceSelected={(place) => {
                    setValue({
                        lat: place?.geometry?.location?.lat(),
                        lng: place?.geometry?.location?.lng(),
                        address: place?.formatted_address
                    })
                }}
                defaultValue={value} />
                {error &&<span className="text-red-500">{error}</span>}
        </>);
};