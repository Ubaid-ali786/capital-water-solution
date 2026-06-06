"use client";

import { CheckCircle } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { whyChooseUs } from "../data/homeData";

export default function WhyChooseUs() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Container sx={{ mb: 8 }}>
      <Grid container spacing={6} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: theme.palette.primary.main,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Why Choose Capital Water Solution?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            We combine technical expertise with customer-centric approach to
            deliver the best water treatment solutions in India.
          </Typography>

          <Grid container spacing={2}>
            {whyChooseUs.map((item, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={i}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <CheckCircle
                    sx={{ color: theme.palette.primary.main, fontSize: 20 }}
                  />
                  <Typography variant="body2">{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            onClick={() => router.push("/about")}
          >
            Learn More About Us
          </Button>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/images/quality-assurance.jpg"
            alt="Quality Assurance"
            sx={{
              width: "100%",
              borderRadius: 4,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
