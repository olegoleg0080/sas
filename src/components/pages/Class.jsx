import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tornRedactModal } from "../../redux/slice";
import { listSelector, schoolIdSelector, tokenSelector } from "../../redux/selectors";
import { getData } from "../../API";
import { useEffect } from "react";

export const Class = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const token = useSelector(tokenSelector);
    const preData = useSelector(listSelector)
    const schoolId = useSelector(schoolIdSelector);
    const { className } = useParams();
    const [ parallel, parallelClass] = className.split("-")
    
    const data = preData.filter(item => item.class === parallelClass && item.parallel === parseInt(parallel))
    useEffect(() => {
    if (!schoolId || !token || !dispatch) return; // Ждём, пока все данные будут доступны

    console.log(schoolId);
    dispatch(getData({ token, schoolId }));
}, [schoolId, token, dispatch]);

    const styleTh = {
        border: "none",
        display: "flex;",
        padding: "10px;",
        alignItems: "center;",
        gap: "10px;",
        flexShrink: "0;",
        justifyContent: "center",
        color: theme.palette.primary.dark,
        fontFamily: "Manrope;",
        fontSize: "16px;",
        fontStyle: "normal;",
        fontWeight: "700;",
        lineHeight: "1.4;",
        "@media (min-width: 744px)": {
            fontSize: "20px;",
        },
    };
    let num = 0;
    const groupMapping = {
        group1: "Основна",
        group2: "Підготовча",
        group3: "Спеціальна",
        group4: "Звільнений"
      };
    return (
        <Container
            maxWidth="false"
            sx={{
                display: "inline-flex;",
                flexDirection: "column;",
                alignItems: "flex-start;",
                gap: "16px;",
                p: "24px 16px",
                "@media (min-width: 744px)": {
                    p: "36px 48px",
                    gap: "24px;",
                },
                "@media (min-width: 1440px)": {
                    p: "40px 80px",
                },
            }}
        >
            <Typography
                sx={{
                    color: "#000",
                    fontFamily: "Manrope;",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "1.4",
                    marginLeft: "16px",
                    "@media (min-width: 744px)": {
                        fontSize: "24px",
                        marginLeft: "55px",
                    },
                    "@media (min-width: 1440px)": {
                        fontSize: "32px",
                    },
                }}
            >
                {className}
            </Typography>
            <TableContainer
                component={Paper}
                sx={{
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    paddingLeft: "300px",
                    boxShadow: "none",
                    "@media (min-width: 744px)": {
                            paddingLeft: "220px",
                        },
                        "@media (min-width: 950px)": {
                            paddingLeft: "0px",
                        },
                }}
            >
                <Table
                    sx={{
                        display: "flex",
                        p: "16px",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        border: "none",
                        "@media (min-width: 744px)": {
                            p: "24px 55px",
                            gap: "16px",
                        },
                    }}
                >
                    <TableHead>
                        <TableRow
                            
                            sx={{
                                display: "grid",
                                gridTemplateColumns:
                                    "30px 140px 105px 100px 100px 115px",
                                gap: "24px;",
                                "@media (min-width: 744px)": {
                                    gridTemplateColumns:
                                        "48px 180px 140px 120px 140px 140px",
                                },
                                "@media (min-width: 1440px)": {
                                    gridTemplateColumns:
                                        "48px 200px 200px 182px 182px 182px",
                                },
                            }}
                        >
                            <TableCell sx={styleTh}>№</TableCell>
                            <TableCell sx={styleTh}>ПІБ</TableCell>
                            <TableCell sx={styleTh}>Дата народження</TableCell>
                            <TableCell sx={styleTh}>Група здоров’я</TableCell>
                            <TableCell sx={styleTh}>Термін дії</TableCell>
                            <TableCell sx={styleTh}>Щеплення</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                    onClick={(e) => {
                        // console.log(e.target.parentElement)
                                dispatch(tornRedactModal(e.target.parentElement.id));
                            }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            "@media (min-width: 744px)": {
                                gap: "16px",
                            },
                        }}
                    >
                    {/* {console.log("data:" ,data)} */}
                        {data.map((item) => {
                            {/* console.log("data:" ,data); */}

                            num+=1
                            return (
                                <TableRow
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "30px 140px 105px 100px 100px 115px",
                                        gap: "24px;",
                                        "&:hover": {
                                            bgcolor:
                                                theme.palette.primary.purpure,
                                            cursor: "pointer",
                                        },
                                        "@media (min-width: 744px)": {
                                            gridTemplateColumns:
                                                "48px 180px 140px 120px 140px 140px",
                                        },
                                        "@media (min-width: 1440px)": {
                                            gridTemplateColumns:
                                                "48px 200px 200px 182px 182px 182px",
                                        },
                                    }}
                                    key={item._id}
                                    id={item._id}
                                >
                                    <TableCell
                                        sx={{ ...styleTh, fontWeight: "500" }}
                                    >
                                        {num}
                                    </TableCell>
                                    <TableCell
                                        sx={{ ...styleTh, fontWeight: "500" }}
                                    >
                                        {item.name}
                                    </TableCell>
                                    <TableCell
                                        sx={{ ...styleTh, fontWeight: "500" }}
                                    >
                                        {item.date}
                                    </TableCell>
                                    <TableCell
                                        sx={{ ...styleTh, fontWeight: "500" }}
                                    >
                                        {groupMapping[item.group]}
                                    </TableCell>
                                    <TableCell
                                        sx={{ ...styleTh, fontWeight: "500" }}
                                    >
                                        {item.term}
                                    </TableCell>
                                    <TableCell
                                        sx={{ ...styleTh, fontWeight: "500" }}
                                    >
                                        {item.vac === "yes" ? "Щеплений" : "Не щеплений"}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};
