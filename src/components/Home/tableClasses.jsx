import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../API";
import { listSelector, tokenSelector } from "../../redux/selectors";

export const TableClasses = ({ maxParallel = 50, minParallel = 1 }) => {
    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    const list = useSelector(listSelector);

    useEffect(() => {
        // console.log("Calling getData with token:", token);
        dispatch(getData({ token }));
    }, [token, dispatch]);

    const data = useSelector(listSelector);

    // Фильтрация данных по параллелям
    const filteredData = data.filter(
        (item) => item.parallel >= minParallel && item.parallel <= maxParallel
    );

    // Сортировка данных по параллели и алфавиту классов
    const sortedData = filteredData.sort((a, b) => {
        if (a.parallel === b.parallel) {
            // Сортировка по классу, если параллели одинаковые (например, "А" раньше "Б")
            return a.class.localeCompare(b.class, "ru", { sensitivity: "base" });
        }
        // Сортировка по параллели
        return a.parallel - b.parallel;
    });

    // Группировка по параллели
    const rows = [...new Set(sortedData.map((item) => item.parallel))].map(
        (parallel) => {
            return sortedData.filter((item) => item.parallel === parallel);
        }
    );

    const theme = useTheme();

    return (
        <>
            {list.length > 0 && (
                <Table>
                    <TableBody
                        sx={{
                            p: "16px",
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            "@media (min-width: 744px)": {
                                p: "24px",
                                gap: "36px",
                            },
                            "@media (min-width: 1440px)": {
                                p: "60px",
                            },
                        }}
                    >
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    display: "flex",
                                    gap: "24px",
                                    "@media (min-width: 744px)": {
                                        gap: "21px",
                                    },
                                    "@media (min-width: 1440px)": {
                                        gap: "103px",
                                    },
                                }}
                            >
                                {row.map((item) => (
                                    <TableCell
                                        key={item.class}
                                        sx={{
                                            p: 0,
                                            border: 0,
                                        }}
                                    >
                                        <Button
                                            sx={{
                                                display: "flex;",
                                                width: "60px;",
                                                p: 0,
                                                justifyContent: "center;",
                                                alignItems: "center;",
                                                gap: "10px;",
                                                borderRadius: "36px;",
                                                bgcolor: "#FFF;",
                                                boxShadow:
                                                    "0px 4px 4px 0px rgba(0, 0, 0, 0.03);",
                                                color: theme.palette.primary
                                                    .light,
                                                fontFamily: "Manrope;",
                                                fontSize: "18px;",
                                                fontWeight: "700;",
                                                lineHeight: "1.4;",
                                                letterSpacing: "0.18px;",
                                                "&>a": {
                                                    padding: "10px 20px;",
                                                    textDecoration: "none",
                                                    color: "#000",
                                                    "&:hover": {
                                                        color: "#fff",
                                                    },
                                                },
                                                "&:hover": {
                                                    borderRadius: "36px;",
                                                    "&>a": {
                                                        color: "#fff",
                                                    },
                                                    background:
                                                        theme.palette.primary
                                                            .lightMain,
                                                },
                                                "@media (min-width: 744px)": {
                                                    width: "134px;",
                                                    height: "76px",
                                                    "&>a": {
                                                        padding: "10px 36px;",
                                                        fontSize: "32px;",
                                                        letterSpacing:
                                                            "0.32px;",
                                                    },
                                                },
                                                "@media (min-width: 1440px)": {
                                                    marginLeft: "0",
                                                    "&>a": {
                                                        fontSize: "40px;",
                                                        letterSpacing: "0.4px;",
                                                    },
                                                },
                                            }}
                                            type="button"
                                        >
                                            <Link
                                                to={`/class/${item.parallel}-${item.class}`}
                                            >
                                                {item.parallel}-{item.class}
                                            </Link>
                                        </Button>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </>
    );
};
