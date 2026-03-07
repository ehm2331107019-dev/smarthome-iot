import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({title, value}){
    return(
        <Card
            sx={{
                height: "100%",
                borderRadius: 3
            }}
        >
            <CardContent>
                <Typography
                    color="text.secondary"
                    variant="body2"
                >
                    {title}
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize:{
                            xs: "1.8rem",
                            md: "2.2rem"
                        }
                    }}
                >
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
}