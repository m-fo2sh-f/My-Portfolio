import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Box, Grid, Stack, useTheme } from "@mui/material";
import { ColorButton } from "../components/AboutMe";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import believeImg from '../assets/believe.webp'
import toDoListImg from '../assets/todolist.webp'
import dashboardImg from '../assets/dashboard.webp'

const projects = [
    {
        id: 1,
        title: "Dashboard",
        description:
            "Interactive dashboard built with React.js and Material UI, connected to a PHP & MySQL backend for dynamic data management",
        link: "https://fo2sh-dashboard.42web.io/index.html",
        imgSrc: dashboardImg,
    },
    {
        id: 2,
        title: "Believe e-commerse",
        description:
            "A responsive online store built with HTML, CSS, SASS, JavaScript, Includes shopping cart and item page.  ",
        link: "https://m-fo2sh-f.github.io/Believe/",
        imgSrc: believeImg,
    },

    {
        id: 3,
        title: "ToDoList",
        description:
            "A to-do list application built with React.js and Material UI, featuring add, update, complete, delete, and local storage persistence.  ",
        link: "https://m-fo2sh-f.github.io/react-ToDoList/",
        imgSrc: toDoListImg,
    },
];
export default function Projects() {
    const theme = useTheme();
    const projectList = projects.map((p) => {
        return (
            <Grid
                key={p.id}
                sx={{
                    maxWidth: { md: "100%", xs: "100%" },
                    minHeight: { md: "180px" },
                    borderRadius: "20px",
                    bgcolor: "#f5f5f511",
                    flexGrow: "1",
                    transition: "all .3s",
                }}
                container
                spacing={0}
            >
                <Grid
                    sx={{
                        overflow: "hidden",
                        objectFit: "fill",
                        borderTopLeftRadius: { md: "15px", xs: "15px" },
                        borderTopRightRadius: { md: 0, xs: "15px" },
                        borderBottomRightRadius: { md: 0, xs: 0 },
                        borderBottomLeftRadius: { md: "15px", xs: 0 },
                    }}
                    size={{ xl: 3, lg: 4, md: 5, xs: 12 }}
                >
                    <img
                        src={p.imgSrc}
                        alt="green iguana"
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                    />
                </Grid>
                <Grid size={{ xl: 9, lg: 8, md: 7, xs: 12 }} sx={{ height: "100%" }}>
                    <Stack spacing={2} justifyContent={"space-between"}>
                        <CardContent>
                            <Typography
                                sx={{ color: theme.palette.primary.main, fontSize: "30px" }}
                                gutterBottom
                                component="div"
                            >
                                {p.title}
                            </Typography>
                            <Typography sx={{ color: theme.palette.text.secondary }}>
                                {p.description}
                            </Typography>
                        </CardContent>
                        <a
                            href={p.link}
                            style={{
                                backgroundColor: "red",
                                width: "100%",
                                background: "red",
                                all: "unset",
                                cursor: "pointer",
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: { md: "left", xs: "center " },
                                    m: { md: "0 16px", xs: "20px " },
                                    width: "20%",
                                }}
                            >
                                <ColorButton
                                    className="button-cv"
                                    sx={{
                                        fontSize: { lg: 14, md: 10.2 },
                                        color: theme.palette.secondary.contrastText,
                                        bgcolor: theme.palette.primary.main,
                                        width: "100%",
                                        height: "40px",
                                        boxShadow: ` 0px 1px 30px -5px ${theme.palette.primary.main}  `,
                                        "&:hover": {
                                            backgroundColor: theme.palette.primary.light,
                                            color: theme.palette.secondary.dark,
                                        },
                                    }}
                                    variant="contained"
                                >
                                    Live
                                    <RemoveRedEyeIcon
                                        sx={{ ml: { lg: "10px", md: "5px" } }}
                                    ></RemoveRedEyeIcon>
                                </ColorButton>
                            </Box>
                        </a>
                    </Stack>
                </Grid>
            </Grid>
        );
    });
    return (
        <Box
            sx={{
                minHeight: "630px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
            }}
        >
            {projectList}
        </Box>
    );
}
