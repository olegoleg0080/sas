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
import { listSelector, schoolIdSelector, tokenSelector } from "../../redux/selectors";

export const TableClasses = ({ maxParallel = 50, minParallel = 1 }) => {
    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    const list = useSelector(listSelector);
    const schoolId = useSelector(schoolIdSelector);
    useEffect(() => {
        if (!schoolId || !token || !dispatch) return; 
    
        console.log(schoolId);
        dispatch(getData({ token, schoolId }));
    }, [schoolId, token, dispatch]);
    

    const data = useSelector(listSelector);

    const filteredData = data.filter(
        item => item.parallel >= minParallel && item.parallel <= maxParallel
    );

    const groupedData = {};
    filteredData.forEach(item => {
        if (!groupedData[item.parallel]) {
            groupedData[item.parallel] = new Set();
        }
        groupedData[item.parallel].add(item.class);
    });

    const theme = useTheme();

    return (
        <>
            {Object.keys(groupedData).length > 0 && (
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
                        {Object.entries(groupedData).map(
                            ([parallel, classes]) => (
                                <TableRow
                                    key={parallel}
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
                                    {[...classes].map(classLetter => (
                                        <TableCell
                                            key={classLetter}
                                            sx={{
                                                p: 0,
                                                border: 0,
                                            }}
                                        >
                                            <Button
                                                sx={{
                                                    display: "flex",
                                                    width: "60px",
                                                    p: 0,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    borderRadius: "36px",
                                                    bgcolor: "#FFF",
                                                    boxShadow:
                                                        "0px 4px 4px 0px rgba(0, 0, 0, 0.03)",
                                                    color: theme.palette.primary
                                                        .light,
                                                    fontFamily: "Manrope",
                                                    fontSize: "18px",
                                                    fontWeight: "700",
                                                    lineHeight: "1.4",
                                                    letterSpacing: "0.18px",

                                                    "&>a": {
                                                        padding: "10px 20px",
                                                        textDecoration: "none",
                                                        color: "#000",
                                                        "&:hover": {
                                                            color: "#fff",
                                                        },
                                                    },
                                                    "&:hover": {
                                                        borderRadius: "36px",
                                                        "&>a": {
                                                            color: "#fff",
                                                        },
                                                        background:
                                                            theme.palette
                                                                .primary
                                                                .lightMain,
                                                    },
                                                    "@media (min-width: 744px)":
                                                        {
                                                            width: "134px",
                                                            height: "76px",
                                                            "&>a": {
                                                                padding:
                                                                    "10px 36px",
                                                                fontSize:
                                                                    "32px",
                                                                letterSpacing:
                                                                    "0.32px",
                                                            },
                                                        },
                                                    "@media (min-width: 1440px)":
                                                        {
                                                            marginLeft: "0",
                                                            "&>a": {
                                                                fontSize:
                                                                    "40px",
                                                                letterSpacing:
                                                                    "0.4px",
                                                            },
                                                        },
                                                }}
                                                type="button"
                                            >
                                                <Link
                                                    to={`/class/${parallel}-${classLetter}`}
                                                >
                                                    {parallel}-{classLetter}
                                                </Link>
                                            </Button>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            )}
        </>
    );
};
