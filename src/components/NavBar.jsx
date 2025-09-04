import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
    Box,
    Button,
    IconButton,
    Stack,
    Tooltip,
    useTheme,
    Typography,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import HailIcon from "@mui/icons-material/Hail";
import WorkIcon from "@mui/icons-material/Work";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import { Link, useLocation } from "react-router-dom";

const buttons = [
    { id: 1, title: "About", path: "/", icon: HailIcon },
    { id: 2, title: "Skills", path: "/skills", icon: PsychologyIcon },
    { id: 3, title: "Projects", path: "/projects", icon: WorkIcon },
    { id: 4, title: "Education", path: "/education", icon: SchoolIcon },
    { id: 5, title: "Contact", path: "/contact", icon: EmailIcon },
];

export default function NavBar({ mode, setMode }) {
    let location = useLocation();
    const theme = useTheme();

    const buttonList = buttons.map((b) => {
        const Icon = b.icon;
        const isActive = location.pathname === b.path;

        return (
            <Link key={b.id} to={b.path}>
                <Tooltip
                    title={b.title}
                    placement="top"
                    arrow
                    slots={{ transition: Fade }}
                    slotProps={{ transition: { timeout: 300 } }}
                >
                    <IconButton
                        sx={{
                            fontSize: 0,
                            width: "45px",
                            height: "45px",
                            color: isActive
                                ? theme.palette.primary.main
                                : theme.palette.primary.light,
                            transition: "all 0.3s ease",
                        }}
                    >
                        <Icon
                            sx={{
                                fontSize: isActive
                                    ? { xl: "55px", md: "50px", xs: "45px" }
                                    : { xl: "40px", md: "35px", xs: "30px" },
                                transition: "all 0.3s ease",
                            }}
                        />
                    </IconButton>
                </Tooltip>
            </Link>
        );
    });
    return (
        <Stack
            direction="column"
            spacing={0}
            sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    position: "absolute",
                    textAlign: "center",
                    top: "30px",
                    zIndex: "50",
                    color: theme.palette.primary.main,
                    fontSize: { xl: "40px", md: "40px", xs: "35px" },
                }}
            >
                <Tooltip
                    sx={{ width: 0, height: 0 }}

                    title={theme.palette.mode === "light" ? "Dark" : "Light"}
                    placement="top"
                    arrow
                    slots={{
                        transition: Fade,
                    }}
                    slotProps={{
                        transition: { timeout: 300 },
                    }}
                >
                    <IconButton
                        onClick={() => {
                            setMode(theme.palette.mode === "light" ? "dark" : "light");
                        }}
                        color="inherit"
                    >
                        {mode === "light" ? (
                            <Brightness4
                                sx={{ fontSize: { xl: "40px", md: "40px", xs: "30px" } }}
                            />
                        ) : (
                            <Brightness7
                                sx={{ fontSize: { xl: "40px", md: "40px", xs: "30px" } }}
                            />
                        )}
                    </IconButton>
                </Tooltip>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexGrow: 1,
                }}
            >
                <Stack spacing={4}>{buttonList}</Stack>
            </Box>
        </Stack>
    );
}
