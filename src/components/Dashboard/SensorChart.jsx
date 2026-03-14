import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { Card, CardContent, Typography, Box } from "@mui/material";

const data = [
  { time: "12:00", gas: 10, temp: 18 },
  { time: "12:10", gas: 15, temp: 19 },
  { time: "12:20", gas: 20, temp: 20 },
  { time: "12:30", gas: 25, temp: 21 },
  { time: "12:40", gas: 30, temp: 22 }
];

export default function SensorChart() {
  return (
    <Card>
      <CardContent>

        <Typography variant="h6" gutterBottom>
          Sensor Monitoring
        </Typography>

        <Box sx={{ width: "100%", height: 350 }}>
          <ResponsiveContainer>
            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="gas"
                stroke="#ff0000"
                name="Gas Level"
              />

              <Line
                type="monotone"
                dataKey="temp"
                stroke="#1976d2"
                name="Temperature (°C)"
              />

            </LineChart>
          </ResponsiveContainer>
        </Box>

      </CardContent>
    </Card>
  );
}