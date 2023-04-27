
import { useMemo } from "react";
import { getUrl } from "./BaseUrl";
import { useApiResult } from "./useApiResult";


export const useItems = () => {
  
  const request = useMemo(() => getUrl(), []);

  console.log(request)
  return useApiResult(request);
}

