import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useQuests = () => {
  return useQuery({
    queryKey: ["quests"],
    queryFn: () => axios.get("/api/quest").then((res) => res.data),
  });
};
