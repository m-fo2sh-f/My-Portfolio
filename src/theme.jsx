import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
    createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 800,
                lg: 1090,
                xl: 1440,
            },
        },
        palette: {
            mode,
            ...(mode === "light"
                ? {
                    primary: {
                        dark: "#ffe2ccff",
                        main: "#fdc497ff",
                        light: "#f8cfb0c1",
                    },
                    secondary: {
                        dark: "#5661b9ff",
                        main: "#636ec3ff",
                        light: "#ffc9a0ff",
                        contrastText: "#5962a8ff",
                    },
                    text: {
                        primary: "#5962a8ff",
                        secondary: "#eae7e7ff",
                        disabled: "#d0d0d0ff",
                    },
                    divider: "#ffc9a081",

                    success: {
                        main: "#00d33cff",
                    },
                }
                : {
                    primary: { dark: "#fdcca6ff", main: "#f9b17a", light: "#fdcca6ff" },
                    secondary: {
                        dark: "#2c3048ff",
                        main: "#424769",
                        light: "#676f9d",
                        contrastText: "#2d3250",
                    },
                    text: {
                        primary: "#ffffffff",
                        secondary: "#bcbcbcff",
                        disabled: "#aaa",
                    },
                    divider: "#fdcca65e",
                    success: {
                        main: "#008727ff",
                    },
                }),
        },
    });
