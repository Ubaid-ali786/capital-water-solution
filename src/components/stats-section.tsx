"use client";

import {
  CheckCircle,
  Engineering,
  SupportAgent,
  Verified,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { stats } from "../data/homeData";

const iconMap = {
  Verified: Verified,
  CheckCircle: CheckCircle,
  SupportAgent: SupportAgent,
  Engineering: Engineering,
};

export default function StatsSection() {
  const theme = useTheme();

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return <IconComponent />;
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        py: 6,
        my: 6,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <Box sx={{ textAlign: "center", color: "white" }}>
                <Avatar
                  sx={{
                    bgcolor: "rgba(255,255,255,0.2)",
                    width: 70,
                    height: 70,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {getIcon(stat.icon)}
                </Avatar>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography variant="body1">{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
