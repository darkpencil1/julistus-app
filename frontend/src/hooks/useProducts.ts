import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => axios.get("/api/product").then((res) => res.data),
  });
};
