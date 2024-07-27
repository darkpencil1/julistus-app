import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAchievements = () => {
  return useQuery({
    queryKey: ["achievements"],
    queryFn: () => axios.get("/api/achievement").then((res) => res.data),
  });
};
