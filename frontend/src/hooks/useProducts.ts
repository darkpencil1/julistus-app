import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:8080/api/product").then((res) => res.json()),
  });
};
