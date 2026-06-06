"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { websiteNavigation } from "./navigation";
import Image from "next/image";

const WebsiteHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogin = () => router.push("/account/sign-in");

  const handleNavigation = (path: string) => {
    setDrawerOpen(false);
    router.push(`/${path}`);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box sx={{ cursor: "pointer" }} onClick={() => router.push("/")}>
          <Image src="/images/img.png" alt="Logo" width={250} height={50} />
        </Box>

        {/* Nav Links */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            {websiteNavigation.map(({ title, segment }) => (
              <Typography
                key={segment}
                onClick={() => handleNavigation(segment)}
                sx={{
                  cursor: "pointer",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  position: "relative",
                  fontSize: "0.95rem",
                  color: theme.palette.text.primary,
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -6,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: theme.palette.primary.main,
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                    transformOrigin: "right",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "left",
                  },
                }}
              >
                {title}
              </Typography>
            ))}
          </Box>
        )}

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {!isMobile && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 3,
                px: 3,
                py: 1,
              }}
            >
              Log in
            </Button>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen((prev) => !prev)}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "75%",
              bgcolor: "background.paper",
              boxShadow: "0 0 40px rgba(0,0,0,0.2)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ px: 2 }}>
            {websiteNavigation.map(({ title, segment }) => (
              <ListItem key={title} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigation(segment)}
                  sx={{
                    borderRadius: 2,
                    py: 1.2,
                    "&:hover": {
                      bgcolor: "action.hover",
                    },
                  }}
                >
                  <ListItemText
                    primary={title}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: "1rem",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Mobile Login Button */}
          <Box sx={{ mt: "auto", p: 2 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                setDrawerOpen(false);
                handleLogin();
              }}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 3,
                py: 1,
              }}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default WebsiteHeader;
