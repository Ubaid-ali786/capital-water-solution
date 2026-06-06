"use client";

import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { contactInfo } from "../data/homeData";

export default function ContactInfoBar() {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Phone sx={{ fontSize: 40, color: theme.palette.primary.main }} />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Call Us Anytime
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {contactInfo.phone}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Email sx={{ fontSize: 40, color: theme.palette.primary.main }} />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Email Us
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {contactInfo.email}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <LocationOn
              sx={{ fontSize: 40, color: theme.palette.primary.main }}
            />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Visit Our Office
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {contactInfo.address}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
