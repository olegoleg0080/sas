import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { listSelector, tokenSelector } from "../../redux/selectors";
import { Box, Button, Container, useTheme } from "@mui/material";
import { useEffect } from "react";
import { getData } from "../../API";
import { RemoveIcon } from "../icons/svgIcons";
import { CardClass } from "../CardClass";
import { nanoid } from "nanoid";

export const SortByParams = () => {
    const { state } = useLocation();
    const [params, setParams] = useSearchParams();
    const filterGroup = params.get("filterGroup");
    const dispatch = useDispatch();
    const data = useSelector(listSelector);
    const token = useSelector(tokenSelector);
    const theme = useTheme();

    useEffect(() => {
        dispatch(getData({ token }));
    }, [token, dispatch]);

    useEffect(() => {
        if (state) {
            const filterGroup = state.filterGroup || "";
            const filterVac = state.filterVac || "";
            setParams({ filterGroup, filterVac });
        }
    }, [state, setParams]);

    const groupedData = data.reduce((acc, student) => {
        let parallelObj = acc.find((p) => p.parallel === student.parallel);

        if (!parallelObj) {
            parallelObj = { parallel: student.parallel, classes: [] };
            acc.push(parallelObj);
        }

        let classObj = parallelObj.classes.find(
            (c) => c.class === student.class
        );

        if (!classObj) {
            classObj = { class: student.class, students: [] };
            parallelObj.classes.push(classObj);
        }

        classObj.students.push({
            _id: student._id,
            name: student.name,
            group: student.group,
            vac: student.vac,
        });

        return acc;
    }, []);

    groupedData.sort((a, b) => a.parallel - b.parallel);
    groupedData.forEach((parallelObj) => {
        parallelObj.classes.sort((a, b) => a.class.localeCompare(b.class, 'ru')); // 'ru' for Russian alphabet sorting
    });


    return (
        <Container
            sx={{
                p: "15px",
                "@media (min-width: 1200px)": {
                    maxWidth: "2500px",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                <Button
                    variant="contained"
                    endIcon={<RemoveIcon />}
                    sx={{
                        bgcolor: "transparent",
                        color: theme.palette.primary.main,
                        outline: `2px solid ${theme.palette.primary.main}`,
                        textTransform: "none",
                        padding: "8px 16px",
                        justifyContent: "start",
                        width: "154px",
                        gap: "10px",
                        borderRadius: "32px",
                        fontFamily: "Manrope",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "140%",
                        "&>span": {
                            margin: 0,
                        },
                        "& .MuiButton-endIcon>svg": {
                            width: "24px",
                            height: "24px",
                            fill: theme.palette.primary.main,
                        },
                    }}
                >
                    Підготовча
                </Button>
                {groupedData.map((item) => (
                    
                    <CardClass
                        key={nanoid()}
                        obj={item}
                        type={filterGroup ? "group" : "vac"}
                    />
                ))}
            </Box>
        </Container>
    );
};
