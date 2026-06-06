"use client";

import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import AddressCard from "../components/common/address-card";

const WebsiteFooter: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        backgroundColor: theme.palette.primary.dark,
        color: "#fff",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Column 1: Logo & Company Info */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            {/* <Box display="flex" alignItems="center" mb={2}>
              <MiniLogo light />
            </Box> */}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Capital Water Solution
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }} color="">
              Capital Water Solution is a company that started in 2022 with the aim of
              providing comprehensive IT services to businesses and individuals.
            </Typography>
          </Grid>

          {/* Column 2: Company Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Box>
              {["About", "Services", "Our Works", "Contact"].map((text) => (
                <Link
                  key={text}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{
                    mb: 0.5,
                    opacity: 0.9,
                    transition: "0.3s",
                    "&:hover": { opacity: 1 },
                    display: "block",
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Support Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Box>
              {["Terms & Conditions", "Privacy Policy", "Support", "FAQ"].map(
                (text) => (
                  <Link
                    key={text}
                    href="#"
                    color="inherit"
                    underline="hover"
                    sx={{
                      mb: 0.5,
                      opacity: 0.9,
                      transition: "0.3s",
                      "&:hover": { opacity: 1 },
                      display: "block",
                    }}
                  >
                    {text}
                  </Link>
                ),
              )}
            </Box>
          </Grid>

          {/* Column 4: Address Card */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <AddressCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WebsiteFooter;
