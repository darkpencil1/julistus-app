import { useQuery } from "@tanstack/react-query";

export const useQuests = () => {
  return useQuery({
    queryKey: ["quests"],
    queryFn: () =>
      fetch("http://localhost:8080/api/quest").then((res) => res.json()),
  });
};
