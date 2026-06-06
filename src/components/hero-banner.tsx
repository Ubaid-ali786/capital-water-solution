"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../data/homeData";

export default function HeroBanner() {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={!isMobile}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        style={{ width: "100%", height: isMobile ? "500px" : "600px" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: isMobile ? "500px" : "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Container maxWidth="lg">
                <Typography
                  variant={isMobile ? "h3" : "h1"}
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    maxWidth: 700,
                    mx: "auto",
                    mb: 4,
                    opacity: 0.95,
                    fontWeight: 500,
                  }}
                >
                  {slide.subtitle}
                </Typography>

                <Stack
                  direction={isMobile ? "column" : "row"}
                  spacing={2}
                  sx={{ justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => router.push("/products")}
                  >
                    {slide.cta1}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        bgcolor: "rgba(14,165,164,0.1)",
                      },
                    }}
                    onClick={() => {
                      document
                        .getElementById("enquiry-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {slide.cta2}
                  </Button>
                </Stack>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
