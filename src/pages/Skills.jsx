import React from 'react'
import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiReact,
    SiMui,
    SiPhp,
    SiMysql,
    SiGit,
    SiGithub
} from "react-icons/si";
import { DiDatabase } from "react-icons/di"; // للـ SQL (generic db)
import { Box, Divider, useTheme, Typography } from '@mui/material';
import { ThemeContext } from '@emotion/react';


const FrontIcons = [
    { id: '1', iconName: 'HTML', icons: <SiHtml5 />, color: '#E34F26' },
    { id: '2', iconName: 'CSS', icons: <SiCss3 />, color: '#1d97eeff ' },
    { id: '3', iconName: 'SCSS', icons: <SiSass />, color: '#CC6699 ' },
    { id: '4', iconName: 'JAVASCRIPT', icons: <SiJavascript />, color: "#F7DF1E" },
    { id: '5', iconName: 'REACT.JS', icons: <SiReact />, color: "#61DAFB" },
    { id: '6', iconName: 'MATERIAL UI', icons: <SiMui />, color: "#007FFF" },
]
const BackIcons = [
    { id: '7', iconName: 'PHP', icons: <SiPhp />, color: "#3b3f6eff" },
    { id: '8', iconName: 'MYSQL', icons: <SiMysql />, color: "#0992faff" },
    { id: '9', iconName: 'SQL', icons: <DiDatabase />, color: '#b6bbffff' },
]
const toolIcons = [
    { id: '10', iconName: 'GIT', icons: <SiGit />, color: "#F05032" },
    { id: '11', iconName: 'GITHUB', icons: <SiGithub />, color: "#181717" },
]
export default function Skills() {
    const theme = useTheme()
    const FrontIconsList = FrontIcons.map((i) => {
        return (
            <Box
                sx={{
                    bgcolor: theme.palette.secondary.dark,
                    borderRadius: '10px',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '50px',
                    color: i.color
                }}
                key={i.id}>
                {i.icons}
            </Box>
        )
    })
    const BackIconsList = BackIcons.map((i) => {
        return (
            <Box
                sx={{
                    bgcolor: theme.palette.secondary.dark,
                    borderRadius: '10px',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '50px',
                    color: i.color
                }}
                key={i.id}>
                {i.icons}
            </Box>
        )
    })
    const toolIconsList = toolIcons.map((i) => {
        return (
            <Box
                sx={{
                    bgcolor: theme.palette.secondary.dark,
                    borderRadius: '10px',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '50px',
                    color: i.color
                }}
                key={i.id}>
                {i.icons}
            </Box>
        )
    })
    return (
        <Box sx={{
            width: '100%',
            minHeight: '620px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column',
            gap: '20px',
        }}>
            <Box sx={{ width: '100%', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
                <Typography sx={{ fontSize: { xl: '50px', lg: '35px', xs: '26px' }, color: theme.palette.primary.main }}>Front-End</Typography>
                <Box sx={{ flexWrap: 'wrap', display: 'flex', columnGap: { lg: '25px', md: '20px', xs: '15px' }, rowGap: { lg: "25px", md: '25px', xs: '15px' }, justifyContent: 'center' }}>{FrontIconsList}</Box>
            </Box>
            <Divider sx={{ width: '100%' }}></Divider>
            <Box sx={{ width: '100%', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>

                <Typography sx={{ fontSize: { xl: '50px', lg: '35px', xs: '26px' }, color: theme.palette.primary.main }}>Back-End</Typography>
                <Box sx={{ flexWrap: 'wrap', display: 'flex', columnGap: { lg: '25px', md: '20px', xs: '15px' }, rowGap: { lg: "25px", md: '25px', xs: '15px' }, justifyContent: 'center' }}>{BackIconsList}</Box>
            </Box>
            <Divider sx={{ width: '100%' }}></Divider>
            <Box sx={{ width: '100%', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>

                <Typography sx={{ fontSize: { xl: '50px', lg: '35px', xs: '26px' }, color: theme.palette.primary.main }}>Tools</Typography>
                <Box sx={{ flexWrap: 'wrap', display: 'flex', columnGap: { lg: '25px', md: '20px', xs: '15px' }, rowGap: { lg: "25px", md: '25px', xs: '15px' }, justifyContent: 'center' }}>{toolIconsList}</Box>
            </Box>
        </Box >
    )
}
