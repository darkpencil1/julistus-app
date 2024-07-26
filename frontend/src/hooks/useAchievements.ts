import { useQuery } from "@tanstack/react-query";

export const useAchievements = () => {
  return useQuery({
    queryKey: ["achievements"],
    queryFn: () =>
      fetch("http://localhost:8080/api/achievement").then((res) => res.json()),
  });
};
