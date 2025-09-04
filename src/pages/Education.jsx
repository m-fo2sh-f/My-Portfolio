import {
    alpha,
    Box,
    Divider,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function Education() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "relative",
                width: "95%",
                ml: "30px",
                pl: "30px",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    mt: "40px",
                    backgroundColor: alpha(theme.palette.primary.main, 0.3),
                    width: "2px",
                    height: { lg: "58.5%", md: "195px", sm: "200.5px", xs: "65%" },
                    left: "0",
                    top: "0",
                },
            }}
        >
            <Box
                sx={{
                    fontSize: "30px",
                    color: theme.palette.primary.main,
                    position: "relative",
                    mb: "20px",
                }}
            >
                Education and Courses
                <Box
                    sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid ",
                        pb: "2px",
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                        position: "absolute",
                        left: "-49px",
                        top: "0px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <MenuBookIcon sx={{}} />
                </Box>
            </Box>
            <Stack spacing={1} sx={{ position: "relative" }}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "15px",
                        left: "-39px",
                        width: "20px",
                        height: "20px",
                        border: "2px solid",
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: "50%",
                        }}
                    ></Box>
                </Box>
                <Typography
                    sx={{
                        fontSize: { xl: "30px", lg: "25px", md: "18px" },
                        color: theme.palette.primary.main,
                    }}
                >
                    Bachelor of computer science at Mansoura University{" "}
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xl: "18px", lg: "13px", md: "15px" },
                        color: theme.palette.text.secondary,
                    }}
                >
                    Passionate Computer Science student with strong background in software
                    development and problem solving.
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xl: "13px", lg: "10px", md: "12px" },
                        color: theme.palette.text.disabled,
                    }}
                >
                    {" "}
                    Grade: 86% | Expected Graduation: 2028{" "}
                </Typography>
            </Stack>
            <Divider sx={{ my: "20px", width: "92%" }}></Divider>

            <Stack spacing={1} sx={{ position: "relative" }}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "15px",
                        left: "-39px",
                        width: "20px",
                        height: "20px",
                        border: "2px solid",
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: "50%",
                        }}
                    ></Box>
                </Box>
                <Typography
                    sx={{
                        fontSize: { xl: "30px", lg: "25px", md: "18px" },
                        color: theme.palette.primary.main,
                    }}
                >
                    Back-End Development Course from the American council{" "}
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xl: "18px", lg: "13px", md: "15px" },
                        color: theme.palette.text.secondary,
                    }}
                >
                    Specialized in Back-End with Laravel
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xl: "13px", lg: "12px", md: "12px" },
                        color: theme.palette.text.disabled,
                    }}
                >
                    Duration: June 2025 – October 2025{" "}
                </Typography>
            </Stack>
        </Box>
    );
}
