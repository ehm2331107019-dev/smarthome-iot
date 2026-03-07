import {
    Card,
    CardContent,
    Typography,
    Box,
    Stack,
} from "@mui/material";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from "recharts";


export default function SensorChart({ data }) {
    return (
        <Card
            elevation={3}
            sx={{
                height: "100%",
                borderRadius: 3,
            }}
        >
        <CardContent sx={{ height: "100%" }}>

            <Stack spacing={3} sx={{ height: "80%" }}>

            <Typography variant="h6">
                Sensor Monitoring
            </Typography>

            <Box sx={{ flexGrow: 1 }}>

                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line
                    type="monotone"
                    dataKey="temp"
                    name="Temperature (°C)"
                    stroke="#1976d2"
                    strokeWidth={2}
                    dot={false}
                    />

                    <Line
                    type="monotone"
                    dataKey="gas"
                    name="Gas Level"
                    stroke="#ef5350"
                    strokeWidth={2}
                    dot={false}
                    />
                </LineChart>
                </ResponsiveContainer>

            </Box>

            </Stack>

        </CardContent>
        </Card>
    );
}