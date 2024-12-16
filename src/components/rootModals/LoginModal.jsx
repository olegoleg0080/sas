import * as Yup from "yup";
import {
    Box,
    Button,
    Container,
    Modal,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { tornLoginModal } from "../../redux/slice";
import { signin } from "../../API";

export const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const theme = useTheme();
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    // const token = useSelector(tokenSelector)

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Це не схоже на email")
            .required("Це поле обов'язкове"),
        password: Yup.string()
            .min(6, "Пароль не коротший за 6 символів")
            .required("Пароль є обов'язковим"),
    });

    const handleSubmit = async () => {
        try {
            await validationSchema.validate(
                { email, password },
                { abortEarly: false }
            );
            setErrors({});
            dispatch(signin({ email, password }));
            dispatch(tornLoginModal());
        } catch (error) {
            const formattedErrors = {};
            error.inner.forEach(err => {
                formattedErrors[err.path] = err.message;
            });
            setErrors(formattedErrors);
        }
    };

    const styleInput = {
        display: "flex",
        width: "213px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px",
        borderRadius: "16px",
        border: "1px solid #DEDEDE",
        bgcolor: "#fff",
        color: theme.palette.primary.dark,
        fontFamily: "Manrope",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "1.4",
        letterSpacing: "0.5px",
        // "&>div>input": {
        //     padding: "16px",
        //     borderRadius: "24px",
        //     height:"54px",
        // },
        // "& .MuiOutlinedInput-root": {
        //     width: "213px",
        //     borderRadius: "16px",
        //     height:"50px",
        // },
        // "& .MuiOutlinedInput-notchedOutline": {
        //     width: "213px",
        //     borderRadius: "16px",
        //     height:"54px",
        // },
        // "&:hover .MuiOutlinedInput-notchedOutline": {
        //     width: "213px",
        //     borderRadius: "16px",
        //     height:"54px",
        // },
        // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        //     width: "213px",
        //     borderRadius: "16px",
        //     height:"54px",
        // },
        // "input:-webkit-autofill": {
        //     animation: "autofill 5s forwards;",
        //     height:"54px",
        // },
        // "@media (min-width: 744px)  ": {
        //     width: "223px",
        //     gap: "10px",
        //     fontSize: "24px",

        //     height: "54px",
        //     "&>div>input": {
        //         padding: "10px",
        //         height: "54px",
        //     },
        //     "& .MuiOutlinedInput-root": {
        //         width: "223px",
        //         height: "54px",
        //     },
        //     "& .MuiOutlinedInput-notchedOutline": {
        //         width: "223px",
        //         // height: "54px",
        //     },
        //     "&:hover .MuiOutlinedInput-notchedOutline": {
        //         width: "223px",
        //         borderRadius: "12px",
        //         // height: "54px",
        //     },
        //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        //         width: "223px",
        //         height: "54px",
        //     },
        // },
    };

    return (
        <Modal
            BackdropProps={{
                onClick: event => event.stopPropagation(),
            }}
            open={isOpen}
            onClose={onClose}
            sx={{
                bgcolor: theme.palette.primary.main,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Container
                maxWidth="false"
                sx={{
                    maxWidth: "343px",
                    margin: "0 auto",
                    "@media (min-width: 744px)": {
                        maxWidth: "481px",
                        p: 0,
                    },
                    "&:focus": {
                        outline: "none",
                    },
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        position: "relative",
                        bgcolor: "#fff",
                        width: "311px",
                        height: "421px",
                        p: "36px 50px",
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                        borderRadius: "24px",
                        gap: "24px",
                        border: "none",
                        "@media (min-width: 744px)": {
                            width: "481px",
                            height: "443px",
                            borderRadius: "32px",
                            gap: "36px",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            color: "#313131",
                            fontFamily: "Manrope",
                            fontSize: "32px",
                            fontWeight: "800",
                            lineHeight: "1.4",
                            letterSpacing: "0.32px",

                            "@media (min-width: 744px)": {
                                fontSize: "48px",
                                letterSpacing: "0.48px",
                            },
                        }}
                    >
                        Вхід
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "40px",
                            "@media (min-width: 744px)": {
                                gap: "24px",
                            },
                            "&> .MuiTextField-root div, ~input": {
                                padding: "16px",
                                width: "213px",
                                borderRadius: "16px",
                                height: "54px",
                                "@media (min-width: 744px)  ": {
                                    width: "223px",
                                    gap: "10px",
                                    padding: "10px",
                                },
                            },
                            "&> .MuiTextField-root": {
                                border: 0,
                            }
                        }}
                    >
                        <TextField
                            sx={styleInput}
                            label="Електронна пошта"
                            variant="outlined"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            sx={styleInput}
                            type="password"
                            label="Пароль"
                            variant="outlined"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                    </Box>
                    <Button
                        onClick={() => {
                            handleSubmit();
                        }}
                        sx={{
                            display: "flex",
                            width: "213px",
                            height: "48px",
                            padding: "10px 24px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            borderRadius: "24px",
                            bgcolor: "#495AF5",
                            color: "#fff",
                            fontFamily: "Manrope",
                            fontSize: "20px",
                            fontWeight: "700",
                            lineHeight: "1.4",
                            "@media (min-width: 744px)": {
                                width: "225px",
                            },
                        }}
                    >
                        Далі
                    </Button>
                </Box>
            </Container>
        </Modal>
    );
};
