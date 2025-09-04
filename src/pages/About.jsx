import React, { useEffect, useState } from "react";
import LeftSide, { ColorButton } from "../components/AboutMe";
import {
    Avatar,
    Box,
    Button,
    Divider,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import myBigImg from '../assets/5893226435202631971_121.webp';
export default function About() {
    const theme = useTheme();
    const textArray = [
        "F",
        "R",
        "O",
        "N",
        "T",
        "-",
        "E",
        "N",
        "D",
        " ",
        "D",
        "E",
        "V",
        "E",
        "L",
        "O",
        "P",
        "E",
        "R",
        " ",
        " ",
    ];
    const knew = [
        "B",
        "A",
        "C",
        "K",
        "-",
        "E",
        "N",
        "D",
        " ",
        "D",
        "E",
        "V",
        "E",
        "L",
        "O",
        "P",
        "E",
        "R",
        " ",
        " ",
    ];

    const [title, setTitle] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [currText, setCurrText] = useState("FrontEnd");
    const [i, setI] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitle((prev) => {
                if (currText === "FrontEnd") {
                    if (!isDeleting) {
                        if (i < textArray.length) {
                            setI(i + 1);
                            return prev + textArray[i];
                        } else {
                            setIsDeleting(true);
                            return prev;
                        }
                    } else {
                        if (prev.length > 0) {
                            setI(i - 1);
                            return prev.slice(0, -1);
                        } else {
                            setIsDeleting(false);
                            setCurrText("BackEnd");
                            setI(0);
                            return "";
                        }
                    }
                } else if (currText === "BackEnd") {
                    if (!isDeleting) {
                        if (i < knew.length) {
                            setI(i + 1);
                            return prev + knew[i];
                        } else {
                            setIsDeleting(true);
                            return prev;
                        }
                    } else {
                        if (prev.length > 0) {
                            setI(i - 1);
                            return prev.slice(0, -1);
                        } else {
                            setIsDeleting(false);
                            setCurrText("FrontEnd");
                            setI(0);
                            return "";
                        }
                    }
                }
            });
        }, 100);

        return () => clearInterval(interval);
    }, [currText, i, isDeleting, knew, textArray]);
    return (
        <Box
            sx={{
                m: "auto",
                width: "95%",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    display: { md: "none", xs: "flex" },
                }}
            >
                <LeftSide></LeftSide>
            </Box>
            <Stack
                direction={"row"}
                sx={{ display: { md: "flex", xs: "none" } }}
                justifyContent={"space-between"}
            >
                <Stack sx={{ width: "60%" }} spacing={2}>
                    <Box>
                        <Typography
                            sx={{ fontSize: { xl: "50px", lg: "35px", md: "26px" } }}
                            color={theme.palette.primary.main}
                        >
                            I'M MOHAMED FOUAD
                        </Typography>
                        <Box sx={{ height: { xl: "50px", lg: "35px", md: "26px" } }}>
                            <Typography
                                sx={{
                                    fontSize: { xl: "30px", lg: "25px", md: "18px" },
                                    color: theme.palette.text.secondary,
                                }}
                            >
                                {title}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ color: theme.palette.text.secondary }}>
                            A passionate Full Stack Developer specializing in building modern,
                            responsive, and user-friendly web applications.
                        </Typography>
                    </Box>
                    <Link to={"/contact"}>
                        <ColorButton
                            className="button-cv"
                            sx={{
                                fontSize: { xl: 14, lg: 14, md: 13 },
                                color: theme.palette.secondary.contrastText,
                                bgcolor: theme.palette.primary.main,
                                width: "30%",
                                height: "40px",
                                boxShadow: ` 0px 1px 30px -5px ${theme.palette.primary.main}  `,
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.light,
                                    color: theme.palette.secondary.dark,
                                },
                            }}
                            variant="contained"
                        >
                            Hire Me
                        </ColorButton>
                    </Link>
                </Stack>
                <Box>
                    <Avatar
                        alt="Remy Sharp"
                        src={myBigImg}
                        sx={{
                            // mt: 5,
                            width: { lg: 260, md: 150, xs: 140 },
                            height: { lg: 260, md: 150, xs: 140 },
                        }}
                    />
                </Box>
            </Stack>
            <Divider
                sx={{
                    width: "92%",
                    m: "30px 0",
                }}
            ></Divider>
            <Stack justifyContent={"center"} alignContent={"center"}>
                <Typography
                    textAlign={"center"}
                    sx={{
                        color: theme.palette.primary.main,
                        mb: 2,
                        fontSize: { xl: "50px", lg: "35px", xs: "26px" },
                    }}
                >
                    Who Am I
                </Typography>
                <Typography
                    textAlign={"center"}
                    sx={{ m: '0 0 20px 0', color: theme.palette.text.secondary }}
                >
                    I am Mohamed Fouad, a dedicated <b>Computer Science student</b> and
                    aspiring <b>Full Stack Developer</b> with hands-on experience in{" "}
                    <b>React.js, PHP, and MySQL</b>
                    .I enjoy transforming ideas into real digital products, focusing on
                    clean code, scalability, and performance. With a strong foundation in
                    both front-end and back-end development, I aim to create seamless
                    solutions that merge creativity with functionality. Beyond coding, I
                    am always eager to learn, collaborate, and take on challenges that
                    push my technical and problem-solving skills further.
                </Typography>
            </Stack>
        </Box >
    );
}
