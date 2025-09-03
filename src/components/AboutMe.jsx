import {
    Avatar,
    Box,
    Button,
    Divider,
    Grid,
    LinearProgress,
    linearProgressClasses,
    Stack,
    styled,
    Typography,
    useTheme,
} from "@mui/material";

import React from "react";
import {
    SiLinkedin,
    SiFacebook,
    SiInstagram,
    SiGithub,
    SiWhatsapp,
} from "react-icons/si";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4, // ارتفاع البار
    borderRadius: 1, // زوايا دائرية
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[300], // اللون الخلفي
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 0,
        backgroundColor: theme.palette.primary.dark, // لون البار نفسه
    },
}));
export const ColorButton = styled(Button)(({ theme }) => ({
    transition: ".4s all",
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.dark,
    },
}));
const links = [
    {
        id: 1,
        linkSrc: "https://www.linkedin.com/in/m-fo2sh-f/",
        linkIcon: <SiLinkedin />,
    },
    { id: 2, linkSrc: "https://github.com/m-fo2sh-f", linkIcon: <SiGithub /> },
    {
        id: 3,
        linkSrc: "https://www.facebook.com/mohamed.fouad.574873?mibextid=ZbWKwL",
        linkIcon: <SiFacebook />,
    },
    {
        id: 4,
        linkSrc: "https://www.instagram.com/m_fo2sh_f?igsh=c3Z1Z2s4ZXljZHpr",
        linkIcon: <SiInstagram />,
    },
    { id: 5, linkSrc: "https://wa.me/201003430773", linkIcon: <SiWhatsapp /> },
];

export default function LeftSide() {
    const theme = useTheme();
    const linkList = links.map((l) => {
        return (
            <a key={l.id} href={l.linkSrc} className="icon">
                <Box
                    sx={{
                        color: theme.palette.secondary.light,
                        fontSize: { lg: 29, md: 20, xs: 29 },
                        transition: "all .3s",
                        "&:hover": {
                            color: theme.palette.primary.light,
                        },
                    }}
                >
                    {l.linkIcon}
                </Box>
            </a>
        );
    });

    return (
        <Box
            sx={{
                width: "92%",
                flexDirection: "column",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-evenly",
            }}
        >
            <Grid
                sx={{ width: "100%", display: "flex", justifyContent: "space-around" }}
                container
                spacing={{ md: 2, sm: 8, xs: 2 }}
            >
                <Grid size={{ md: 12, sm: 6, xs: 12 }}>
                    <Stack
                        spacing={1.2}
                        justifyContent={"center"}
                        alignItems={{ md: "center", sm: "start", xs: "center" }}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="/public/5893226435202631971_121.webp"
                            sx={{
                                width: { lg: 140, md: 90, xs: 140 },
                                height: { lg: 140, md: 90, xs: 140 },
                            }}
                        />
                        <Typography
                            fontSize={{ lg: 24, md: 18, xs: 23 }}
                            sx={{ color: theme.palette.text.secondary }}
                        >
                            Mohamed Fouad
                        </Typography>
                        <Typography
                            fontSize={{ lg: 16, md: 14, xs: 20 }}
                            sx={{ color: theme.palette.text.disabled }}
                        >
                            Full Stack Developer
                        </Typography>
                        <Stack
                            sx={{
                                margin: "200000px",
                                width: "100%",
                            }}
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            {linkList}
                        </Stack>
                    </Stack>
                </Grid>
                <Divider
                    sx={{
                        margin: { md: "15px 0 20px", xs: "0" },
                        display: { md: "block", xs: "none" },
                        width: "100%",
                    }}
                ></Divider>
                <Grid
                    sx={{ display: { md: "block", xs: "flex" } }}
                    size={{ md: 12, sm: 6, xs: 12 }}
                    alignItems={"center"}
                    justifyContent={{ md: "center" }}
                >
                    <Stack spacing={{ md: 2, xs: 4 }} sx={{ width: "100%" }}>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography
                                sx={{
                                    background: theme.palette.secondary.light,
                                    p: "2px 10px",
                                    color: theme.palette.text.primary,
                                }}
                                fontSize={{ lg: 16, md: 14 }}
                                color="initial"
                            >
                                Age
                            </Typography>
                            <Typography
                                fontSize={{ lg: 16, md: 14 }}
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                20
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography
                                sx={{
                                    background: theme.palette.secondary.light,
                                    p: "2px 10px",
                                    color: theme.palette.text.primary,
                                }}
                                fontSize={{ lg: 16, md: 14 }}
                                color="initial"
                            >
                                Resdince
                            </Typography>
                            <Typography
                                fontSize={{ lg: 16, md: 14 }}
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                EG
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography
                                sx={{
                                    background: theme.palette.secondary.light,
                                    p: "2px 10px",
                                    color: theme.palette.text.primary,
                                }}
                                fontSize={{ lg: 16, md: 14 }}
                                color="initial"
                            >
                                Freelance
                            </Typography>
                            <Typography
                                fontSize={{ lg: 16, md: 14 }}
                                sx={{ color: theme.palette.success.main }}
                            >
                                Available
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography
                                sx={{
                                    background: theme.palette.secondary.light,
                                    p: "2px 10px",
                                    color: theme.palette.text.primary,
                                }}
                                fontSize={{ lg: 16, md: 14 }}
                                color="initial"
                            >
                                Address
                            </Typography>
                            <Typography
                                fontSize={{ lg: 16, md: 14 }}
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                Mansoura
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Divider
                sx={{
                    display: { md: "block", xs: "none" },
                    width: "100%",
                    color: theme.palette.text.primary,
                }}
            ></Divider>

            <Box
                sx={{
                    m: { md: "0", xs: "20px 0" },
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <ColorButton
                    component="a"
                    href="/Mohamed_Fouad_Full Stack Developer2.pdf"
                    download="Mohamed-Fouad-CV.pdf"
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
                    Download CV{" "}
                    <FileDownloadIcon
                        sx={{ ml: { lg: "10px", md: "5px" } }}
                    ></FileDownloadIcon>
                </ColorButton>
            </Box>
        </Box>
    );
}
