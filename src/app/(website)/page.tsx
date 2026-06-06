"use client";

import WhyChooseUs from "@/src/components/chooseUs-section";
import ClientsSection from "@/src/components/clients-section";
import ContactInfoBar from "@/src/components/contact-info";
import EnquiryForm from "@/src/components/cta-form";
import HeroBanner from "@/src/components/hero-banner";
import ServicesSection from "@/src/components/services-section";
import SocialMediaBar from "@/src/components/social-media";
import StatsSection from "@/src/components/stats-section";
import { Box, useTheme } from "@mui/material";

export default function HomePage() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      <HeroBanner />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <ClientsSection />
      <EnquiryForm />
      <ContactInfoBar />
      <SocialMediaBar />
    </Box>
  );
}
