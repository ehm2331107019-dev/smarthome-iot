import { Grid } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";
import SensorChart from "../../components/Dashboard/SensorChart";
import StatCard from "../../components/StatCard/StatCard";

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard">
      <Grid container spacing={3}>

        <Grid item xs={12} md={4}>
          <StatCard title="Temperatura" value="25°C" />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard title="Humedad" value="60%" />
        </Grid>

        <Grid item xs={12} md={4}>
          <StatCard title="Gas" value="Normal" />
        </Grid>

        <Grid item xs={12}>
          <SensorChart />
        </Grid>

      </Grid>
    </PageContainer>
  );
}