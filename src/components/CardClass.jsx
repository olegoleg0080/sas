import {
    Box,
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    useTheme,
} from "@mui/material";
import { nanoid } from "nanoid";
import { DownloadIcon } from "./icons/svgIcons";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tornRedactModal } from "../redux/slice";

export const CardClass = ({ obj, type }) => {
    const [params] = useSearchParams();
    const dispatch = useDispatch();
    const filterGroup = params.get("filterGroup");
    const filterVac = params.get("filterVac");
    const theme = useTheme();
    const styleTh = {
        display: "flex;",
        padding: "10px;",
        alignItems: "center;",
        justifyContent: "center",
        gap: "10px;",
        flexShrink: "0;",
        textAlign: "center",

        color: theme.palette.primary.dark,
        fontFamily: "Manrope",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "1.4",
        "@media (min-width: 744px)": {
            fontSize: "20px",
        },
        "@media (min-width: 1440px)": {
            fontSize: "24px",
        },
    };

    const visibleData = (data) => {
        const newData = data.filter((item) => {
            return item.group === filterGroup || item.vac === filterVac;
        });

        return newData;
    };
    return (
        <Container
            maxWidth="false"
            component={Paper}
            sx={{
                display: "flex",
                gap: "40px",
                overflow: "scroll",
                "@media (min-width: 600px)": {
                    padding: 0,
                },
                "&::-webkit-scrollbar": {
                    display: "none",
                },
                boxShadow: "none",
                "@media (min-width: 744px)": {
                    gap: "48px",
                },
                "@media (min-width: 1440px)": {
                    p: "25px",
                },
            }}
        >
            {obj.classes.map((item) => {
                return (
                    <Box
                        key={nanoid()}
                        sx={{
                            maxWidth: "455px",
                            "@media (min-width: 744px)": {
                                maxWidth: "641px",
                            },
                            "@media (min-width: 1440px)": {
                                maxWidth: "786px",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex;",
                                width: type === "group" ? "455px;" : "342px",
                                padding: "10px 30px;",
                                justifyContent: "space-between;",
                                alignItems: "center;",
                                borderRadius: "36px 36px 0px 0px;",
                                bgcolor: theme.palette.primary.lightMain,
                                "@media (min-width: 744px)": {
                                    width:
                                        type === "group" ? "641px;" : "501px",
                                },
                                "@media (min-width: 1440px)": {
                                    width:
                                        type === "group" ? "786px;" : "612px",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#FFF;",
                                    fontFamily: "Manrope;",
                                    fontSize: "20px;",
                                    fontWeight: "700;",
                                    lineHeight: "1.4;",
                                    "@media (min-width: 744px)": {
                                        fontSize: "24px;",
                                    },
                                    "@media (min-width: 1440px)": {
                                        fontSize: "36px;",
                                    },
                                }}
                            >
                                {obj.parallel} - {item.class}
                            </Typography>
                            <Button
                                sx={{
                                    display: "flex;",
                                    justifyContent: "flex-end;",
                                    alignItems: "center;",
                                    gap: "4px;",
                                    color: "#FFF;",
                                    fontFamily: "Manrope;",
                                    fontSize: "14px;",
                                    fontWeight: "700;",
                                    lineHeight: "1.4;",
                                    bgcolor: "transparent",
                                    textTransform: "none",
                                    "@media (min-width: 744px)": {
                                        fontSize: "20px;",
                                        "&>span>svg": {
                                            width: "28px",
                                        },
                                    },
                                    "@media (min-width: 1440px)": {
                                        fontSize: "14px;",
                                    },
                                }}
                                variant="contained"
                                endIcon={<DownloadIcon />}
                            >
                                Отримати дані
                            </Button>
                        </Box>
                        <Table
                            sx={{
                                display: "flex;",
                                padding: "16px;",
                                flexDirection: "column;",
                                alignItems: "flex-start;",
                                "@media (min-width: 744px)": {
                                    padding: "30px;",
                                },
                            }}
                        >
                            <TableHead>
                                <TableRow
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            type === "group"
                                                ? "30px 140px 110px 110px"
                                                : "30px 135px 115px",
                                        gap: "0;",
                                        "@media (min-width: 744px)": {
                                            gridTemplateColumns:
                                                type === "group"
                                                    ? "48px 180px 170px 150px"
                                                    : "48px 200px 160px",
                                        },
                                        "@media (min-width: 1440px)": {
                                            gap: "24px",
                                            gridTemplateColumns:
                                                type === "group"
                                                    ? "48px 200px 200px 150px"
                                                    : "48px 200px 200px",
                                        },
                                    }}
                                >
                                    <TableCell sx={styleTh}>№</TableCell>
                                    <TableCell sx={styleTh}>ПІБ</TableCell>
                                    {type === "group" && (
                                        <TableCell
                                            sx={{
                                                ...styleTh,
                                            }}
                                        >
                                            Група здоров’я
                                        </TableCell>
                                    )}
                                    {type === "group" && (
                                        <TableCell
                                            sx={{
                                                ...styleTh,
                                            }}
                                        >
                                            Термін дії
                                        </TableCell>
                                    )}

                                    {type === "vac" && (
                                        <TableCell
                                            sx={{
                                                ...styleTh,
                                            }}
                                        >
                                            Щеплення
                                        </TableCell>
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody
                                onClick={(e) => {
                                    console.log(e.target.parentElement, "1");
                                    dispatch(
                                        tornRedactModal(
                                            e.target.parentElement.id
                                        )
                                    );
                                }}
                            >
                                {visibleData(item.students).length > 0 &&
                                    visibleData(item.students).map(
                                        (student) => {
                                            return (
                                                <TableRow
                                                    key={nanoid()}
                                                    id={student._id}
                                                    sx={{
                                                        display: "grid",
                                                        gridTemplateColumns:
                                                            type === "group"
                                                                ? "30px 140px 110px 110px"
                                                                : "30px 135px 115px",
                                                        gap: "0;",
                                                        "&:hover": {
                                                            bgcolor:
                                                                theme.palette
                                                                    .primary
                                                                    .purpure,
                                                            cursor: "pointer",
                                                        },
                                                        "@media (min-width: 744px)":
                                                            {
                                                                gridTemplateColumns:
                                                                    type ===
                                                                    "group"
                                                                        ? "48px 180px 170px 150px"
                                                                        : "48px 200px 160px",
                                                            },
                                                        "@media (min-width: 1440px)":
                                                            {
                                                                gap: "24px",
                                                                gridTemplateColumns:
                                                                    type ===
                                                                    "group"
                                                                        ? "48px 200px 200px 150px"
                                                                        : "48px 200px 200px",
                                                            },
                                                    }}
                                                >
                                                    <TableCell
                                                        sx={{
                                                            ...styleTh,
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        1
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            ...styleTh,
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {student.name}
                                                    </TableCell>
                                                    {type === "group" && (
                                                        <TableCell
                                                            sx={{
                                                                ...styleTh,
                                                                fontWeight:
                                                                    "500",
                                                            }}
                                                        >
                                                            {student.group
                                                                ? student.group
                                                                : ""}
                                                        </TableCell>
                                                    )}

                                                    {type === "group" && (
                                                        <TableCell
                                                            sx={{
                                                                ...styleTh,
                                                                fontWeight:
                                                                    "500",
                                                            }}
                                                        >
                                                            term
                                                        </TableCell>
                                                    )}
                                                    {type === "vac" && (
                                                        <TableCell
                                                            sx={{
                                                                ...styleTh,
                                                                fontWeight:
                                                                    "500",
                                                            }}
                                                        >
                                                            {student.vac
                                                                ? student.vac
                                                                : ""}
                                                        </TableCell>
                                                    )}
                                                </TableRow>
                                            );
                                        }
                                    )}
                            </TableBody>
                        </Table>
                    </Box>
                );
            })}
        </Container>
    );
};
