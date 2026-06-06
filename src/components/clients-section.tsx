"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { clients } from "../data/homeData";

export default function ClientsSection() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "white", py: 6, mb: 6 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2 }}>
          Our Trusted Clients
        </Typography>
        <Divider
          sx={{
            width: 80,
            mx: "auto",
            mb: 5,
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          }}
        />

        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          {clients.map((client, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <Box
                component="img"
                src={client.logo}
                alt={client.name}
                sx={{
                  width: "100%",
                  maxWidth: 150,
                  height: "auto",
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  transition: "all 0.3s",
                  margin: "0 auto",
                  display: "block",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
