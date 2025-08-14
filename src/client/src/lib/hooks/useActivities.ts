import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";
import { useLocation } from "react-router";

export const useActivities = (id?: string) => {
    const queryClient = useQueryClient();
    const location = useLocation();

    const { data: activities, isPending} = useQuery({
        queryKey: ['activities'],
        queryFn: async () =>{
          const response = await agent.get<Activity[]>('/activities');
          return response.data;
        },
        enabled: !id && location.pathname === '/activities' // Only fetch if no id is provided and on the activities page
      });

    const {data: activity, isLoading: isLoadingActivity} = useQuery({
      queryKey:['activity', id],
      queryFn: async () => {
        const response = await agent.get<Activity>(`/activities/${id}`);
        return response.data;
      },
      enabled: !!id
    });

      const updateActivity = useMutation({
          mutationFn: async (activity: Activity) => {
              const response = await agent.put('/activities', activity);
              return response.data;
          },
          onSuccess: async () => {
              await queryClient.invalidateQueries({
                queryKey: ['activities']
              })
          }
      });

      const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            const response = await agent.post('/activities', activity);
            return response.data;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
              queryKey: ['activities']
            })
        }
    });

    const deleteActivity = useMutation({
      mutationFn: async (id: string) => {
          const response = await agent.delete(`/activities/${id}`);
          return response.data;
      },
      onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: ['activities']
          })
      }
  });

    return {
        activities, 
        isPending,
        updateActivity,
        createActivity,
        deleteActivity,
        activity,
        isLoadingActivity
    };
}   