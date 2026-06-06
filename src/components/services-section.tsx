"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ArrowForward } from "@mui/icons-material";
import {
  LocalShipping,
  Engineering,
  WaterDrop,
  Factory,
  CleaningServices,
} from "@mui/icons-material";
import { services } from "../data/homeData";

const iconMap = {
  WaterDrop: WaterDrop,
  CleaningServices: CleaningServices,
  Factory: Factory,
  Engineering: Engineering,
  LocalShipping: LocalShipping,
};

export default function ServicesSection() {
  const theme = useTheme();
  const router = useRouter();

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return (
      <IconComponent sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    );
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 800,
            textAlign: "center",
            color: theme.palette.primary.main,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Our Services
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
        >
          Comprehensive water treatment solutions tailored to your industrial
          and domestic needs
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() =>
                  router.push(`/products?category=${service.title}`)
                }
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{getIcon(service.icon)}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {service.description}
                  </Typography>
                  <Chip
                    label={service.capacity}
                    size="small"
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      fontSize: "0.75rem",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => router.push("/products")}
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
