import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSideBar";
import { Grid2, Typography } from "@mui/material";
import { useParams } from "react-router";


export default function ActivityDetailPage() {
  const {id} = useParams();
  const {activity, isLoadingActivity} = useActivities(id);

  if (isLoadingActivity) return <Typography>Loading ...</Typography>

  if (!activity) return <Typography>Activity not found</Typography>

  return (
   <Grid2 container spacing={2}>
      <Grid2 size={8}>
          <ActivityDetailsHeader/>
          <ActivityDetailsInfo/>
          <ActivityDetailsChat/>

      </Grid2>
      <Grid2 size={4}>
          <ActivityDetailsSidebar/>
      </Grid2>
   </Grid2>
  )
}
