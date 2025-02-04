import {
    Box,
    Button,
    IconButton,
    MenuItem,
    Modal,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { useDispatch } from "react-redux";
import { CloseIconInSircle } from "../icons/svgIcons";
import {
    CalendarIcon,
    DatePicker,
    LocalizationProvider,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
    reductStudentSelector,
    selectIdSelector,
    tokenSelector,
} from "../../redux/selectors";
import { useEffect, useState } from "react";
import { getDataById, updateStudent } from "../../API";

export const RedactModal = ({ isOpen, onClose }) => {
    const theme = useTheme();
    const token = useSelector(tokenSelector);
    const selectId = useSelector(selectIdSelector);
    const reductStudent = useSelector(reductStudentSelector);
    const dispatch = useDispatch();
    // ********************************************************
    const [name, setName] = useState("");
    const [date, setDate] = useState("2022-04-17");
    const [group, setGroup] = useState("group1");
    const [term, setTerm] = useState("2022-04-17");
    const [vac, setVac] = useState("yes");

    useEffect(() => {
        if (selectId) {
            dispatch(getDataById({ token, selectId }));
        }
    }, [token, selectId, dispatch]);
    useEffect(() => {
        if (reductStudent) {
            setName(reductStudent.name || "");
            setDate(reductStudent.date || "2022-04-17");
            setGroup(reductStudent.group || "group1");
            setTerm(reductStudent.term || "2022-04-17");
            // setVac(reductStudent.vac || "yes");
        }
    }, [dispatch, reductStudent]);
    const send = ()=>{
        // console.log(term);
        
        dispatch(updateStudent({ token, selectId, params: {name, date, group, term, vac}}))
        
        // dispatch(getData({ token }));
    }
    const styleSelect = {
        select: {
            MenuProps: {
                PaperProps: {
                    sx: {
                        p: "8px",
                        borderRadius: "24px",
                        "&>ul": {
                            p: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "13px",
                            alignItems: "center",

                            "&>li": {
                                display: "flex;",
                                width: "295px;",
                                padding: "16px;",
                                bgcolor: "#fff",
                                flexDirection: "column;",
                                alignItems: "flex-start;",
                                gap: "12px;",
                                borderRadius: "16px;",
                                "&:hover": {
                                    bgcolor: theme.palette.primary.lightMain,
                                    color: "#fff",
                                },
                                "&.Mui-selected:hover": {
                                    bgcolor: theme.palette.primary.lightMain,
                                    color: "#fff",
                                },
                                "@media (min-width: 744px)": {
                                    width: "400px",
                                },
                            },
                        },
                    },
                },
            },
        },
    };
    const styleBox = {
        display: "flex;",
        flexDirection: "column;",
        alignItems: "flex-start;",
        gap: "8px;",
    };
    const styleInput = {
        display: "flex;",
        width: "311px",
        flexDirection: "column;",
        alignItems: "flex-start;",
        gap: "12px;",
        borderRadius: "16px",
        border: "1px solid #DEDEDE;",
        bgcolor: "#fff",
        color: theme.palette.primary.dark,
        fontFamily: "Manrope;",
        fontSize: "20px;",
        fontWeight: "600;",
        lineHeight: "24px;",
        letterSpacing: "0.5px;",
        "&>div>input": {
            padding: "16px;",
            borderRadius: "24px",
        },
        "& .MuiOutlinedInput-root": {
            width: "311px",
            borderRadius: "16px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            width: "311px",
            borderRadius: "16px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            width: "311px",
            borderRadius: "16px",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            width: "311px",
            borderRadius: "16px",
        },
        "@media (min-width: 744px)": {
            width: "428px",
            fontSize: "24px;",
            "& .MuiOutlinedInput-root": {
                width: "428px",
                borderRadius: "16px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
                width: "428px",
                borderRadius: "16px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                width: "428px",
                borderRadius: "16px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                width: "428px",
                borderRadius: "16px",
            },
        },
        "@media (min-width: 1440px)": {
            marginLeft: "0",
            "&>a": {
                fontSize: "40px;",
                letterSpacing: "0.4px;",
            },
        },
    };

    return (
        <>
            <Modal
                open={isOpen}
                onClose={onClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        bgcolor: "#fff",
                        width: "343px",
                        // height: "618px",
                        p: "16px",
                        display: "inline-flex;",
                        flexDirection: "column;",
                        alignItems: "flex-start",
                        borderRadius: "24px;",
                        gap: "24px",
                        border: "none",
                        "@media (min-width: 744px)": {
                            width: "500px",
                            p: "36px",
                        },
                        "@media (min-width: 1440px)": {
                            marginLeft: "0",
                            "&>a": {
                                fontSize: "40px;",
                                letterSpacing: "0.4px;",
                            },
                        },
                    }}
                >
                    <IconButton
                        sx={{
                            position: "absolute",
                            right: "16px",
                            top: "16px",
                            p: 0,
                        }}
                        onClick={() => {
                            onClose();
                        }}
                    >
                        <CloseIconInSircle />
                    </IconButton>
                    {/* //******************************||NAME||**************************************** */}
                    <Box sx={styleBox}>
                        <Typography sx={{ marginLeft: "16px" }}>
                            ПІБ учня
                        </Typography>
                        <TextField
                            sx={styleInput}
                            label="ПІБ учня"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></TextField>
                    </Box>
                    {/* //******************************||DATE||************************************* */}
                    <Box sx={styleBox}>
                        <Typography>Дата народження</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={styleInput}
                                slots={{
                                    openPickerIcon: CalendarIcon,
                                }}
                                defaultValue={dayjs(date)}
                                onChange={(newValue) =>
                                    setDate(
                                        newValue
                                            ? newValue.format("YYYY-MM-DD")
                                            : ""
                                    )
                                }
                            />
                        </LocalizationProvider>
                    </Box>
                    {/* //******************************||GROUP||**************************************** */}
                    <Box sx={styleBox}>
                        <Typography>Група здоров'я</Typography>
                        <TextField
                            select
                            value={group}
                            label="Група здоров’я"
                            variant="outlined"
                            sx={{ ...styleInput }}
                            slotProps={{ ...styleSelect }}
                            onChange={(e) => setGroup(e.target.value)}
                        >
                            <MenuItem value={"group1"}>Основна</MenuItem>
                            <MenuItem value={"group2"}>Підготовча</MenuItem>
                            <MenuItem value={"group3"}>Спеціальна</MenuItem>
                            <MenuItem value={"group4"}>Звільнений</MenuItem>
                        </TextField>
                    </Box>
                    {/* //******************************||TERM||**************************************** */}
                    <Box sx={styleBox}>
                        <Typography>Термін дії</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={styleInput}
                                slots={{
                                    openPickerIcon: CalendarIcon,
                                }}
                                defaultValue={dayjs(term)}
                                onChange={(newValue) =>
                                    setTerm(
                                        newValue
                                            ? newValue.format("YYYY-MM-DD")
                                            : ""
                                    )
                                }
                            />
                        </LocalizationProvider>
                    </Box>
                    {/* //******************************||VAC||**************************************** */}
                    <Box sx={styleBox}>
                        <Typography>Щеплення</Typography>
                        <TextField
                            select
                            value={vac}
                            label="Щеплення"
                            variant="outlined"
                            sx={{ ...styleInput }}
                            slotProps={{ ...styleSelect }}
                            onChange={(e) => setVac(e.target.value)}
                        >
                            <MenuItem value={"yes"}>Щеплений</MenuItem>
                            <MenuItem value={"no"}>Нещеплений</MenuItem>
                        </TextField>
                    </Box>
                    <Button
                        sx={{
                            display: "flex;",
                            width: "310px;",
                            padding: "10px 24px;",
                            justifyContent: "center;",
                            alignItems: "center;",
                            gap: "10px;",
                            borderRadius: "32px;",
                            bgcolor: theme.palette.primary.lightMain,
                            fontFamily: "Manrope;",
                            color: "#fff;",
                            fontSize: "24px;",
                            fontWeight: "600;",
                            lineHeight: "1.4;",
                            "@media (min-width: 744px)": {
                                width: "428px;",
                            },
                        }}
                        onClick={()=>{
                            send()
                        }}
                    >
                        Зберегти
                    </Button>
                </Box>
            </Modal>
        </>
    );
};
