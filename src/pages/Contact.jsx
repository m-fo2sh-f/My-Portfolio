import React from 'react'
import emailjs from "emailjs-com";
import { alpha, Box, Grid, Stack, TextField, useTheme, Typography, styled, Button } from '@mui/material';
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';
import { useForm } from "react-hook-form"


const ColorButton = styled(Button)(({ theme }) => ({
    transition: ".4s all",
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.dark,
    },
}));
export default function Contact() {
    const theme = useTheme()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        emailjs.send("service_yru55ah", "template_u4u45ff", data, "HecEiVdTKOqBjVXSR")
            .then(
                (result) => alert("Mail sent:" + result.text),
                (error) => alert("Error:" + error.text)
            );
    }
    const textFieldStyles = (theme) => ({
        caretColor: theme.palette.primary.main,
        width: "100%",
        "& .MuiOutlinedInput-root": {
            borderRadius: "15px",
            backgroundColor: alpha(theme.palette.primary.dark, .1),
            "& fieldset": {
                borderColor: "transparent",
            },
            "& textarea": {
                color: theme.palette.text.secondary,
            },
            "& input": {
                color: theme.palette.text.secondary,
            },
            "&:hover fieldset": {
                borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
            },
        },
        "& .MuiInputLabel-root": {
            color: theme.palette.primary.main,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: theme.palette.primary.main,
        },
    });
    return (
        <Stack sx={{ height: '620px', textAlign: 'center' }} spacing={2} justifyContent={'center'} >
            <Typography variant="h1" sx={{ fontSize: { md: '50px', sm: '30px', xs: '30px' }, width: '100%', color: theme.palette.primary.main }}>Contact Mohamed</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <TextField
                            {...register("name", { required: "Name is required" })}
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ""}
                            id="outlined-multiline-flexible"
                            label="Name"
                            multiline
                            sx={textFieldStyles(theme)}
                        />
                    </Grid>
                    <Grid size={6}>
                        <TextField
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Invalid email address",
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ""}

                            id="outlined-textarea"
                            label="Email"
                            sx={textFieldStyles(theme)}

                        />
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            {...register("message", { required: "Message cannot be empty" })}
                            error={!!errors.message}
                            helperText={errors.message?.message}
                            id="outlined-multiline-static"
                            label="Your Message"
                            multiline
                            rows={15}
                            sx={textFieldStyles(theme)}
                        />
                    </Grid>
                </Grid>
                <ColorButton
                    type='submit'
                    className="button-cv"
                    sx={{
                        mt: '20px',
                        fontSize: { lg: 14, md: 10.2 },
                        color: theme.palette.secondary.contrastText,
                        bgcolor: theme.palette.primary.main,
                        width: "60%",
                        height: "40px",
                        boxShadow: ` 0px 1px 30px -5px ${theme.palette.primary.main}  `,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.secondary.dark,
                        },

                    }}
                    variant="contained"
                >
                    Send Email{" "}
                    <OutgoingMailIcon
                        sx={{ ml: { lg: "10px", xs: "5px" } }}
                    ></OutgoingMailIcon>
                </ColorButton>
            </form>
        </Stack >
    );
}

