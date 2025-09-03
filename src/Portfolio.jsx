import { Box, Grid, useTheme } from '@mui/material'
import LeftSide from './components/AboutMe'
import { motion } from 'framer-motion'
import React from 'react'
import NavBar from './components/NavBar'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'

export default function Portfolio({ mode, setMode }) {
    const theme = useTheme()
    return (
        <Box
            className={theme.palette.mode === 'dark' ? 'background-dark' : 'background-light'}
            sx={{
                flexGrow: 1,
                width: '100wh',
                height: '100vh',
                padding: { lg: '20px', md: '10px', xs: '3px' }

            }}>
            <Grid container sx={{ height: '100%' }} spacing={{ lg: '20px', md: "10px", xs: '4px' }}>

                {/* الشمال */}
                <Grid
                    className={theme.palette.mode === 'dark' ? 'glass-card-dark' : 'glass-card-light'}
                    component={motion.div}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    sx={{
                        flexGrow: 1,
                        height: '100%',
                        borderRadius: '20px',
                        display: { md: 'flex', xs: 'none' },
                        justifyContent: 'center',
                    }}
                    size={2.5}
                >
                    <LeftSide></LeftSide>
                </Grid>

                {/* النص */}
                <Grid
                    className={theme.palette.mode === 'dark' ? 'glass-card-dark' : 'glass-card-light'}

                    component={motion.div}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    sx={{
                        p: '30px 0px',
                        flexGrow: 1,
                        maxHeight: '100%',
                        borderRadius: '20px',
                        overflow: 'scroll',
                        overflowX: 'hidden'
                    }}
                    size={{ md: 8.7, xs: 10.6 }}
                >
                    <Box width={'100%'} p={'0 20px'}>
                        <Routes>
                            <Route path="/" element={<About />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>

                    </Box>
                </Grid>

                {/* اليمين */}
                <Grid
                    className={theme.palette.mode === 'dark' ? 'glass-card-dark' : 'glass-card-light'}

                    component={motion.div}
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    sx={{
                        flexGrow: 1,
                        borderRadius: '20px',
                        height: '100%',
                        // Width: '40px'
                    }}
                    size={{ md: .8, xs: 1.4 }}
                >
                    <NavBar mode={mode} setMode={setMode} />
                </Grid>

            </Grid>
        </Box>
    )
}

