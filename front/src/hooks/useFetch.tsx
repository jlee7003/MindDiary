import { useQuery } from "react-query";
import API from "@/api/API";

export default function useFetch(key: string, endpoint: any) {
    const { isLoading, isError, data, error } = useQuery(key, () => API(endpoint), {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (e: { message: string }) => {
            console.log(e.message);
        },
    });

    return { isLoading, isError, data, error };
}
