import { Grid } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";
import SensorChart from "../../components/Dashboard/SensorChart";
import StatCard from "../../components/StatCard/StatCard";

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard">
      <Grid container spacing={3}>

        <Grid item xs={12} md={3}>
          <StatCard title="Devices" value="20" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Active" value="15" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Alerts" value="5" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Users" value="4" />
        </Grid>

        <Grid item xs={12}>
          <SensorChart />
        </Grid>

      </Grid>
    </PageContainer>
  );
}