import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { listSelector, tokenSelector } from "../../redux/selectors";
import { Box, Button, Container, useTheme } from "@mui/material";
import { useEffect } from "react";
import { downloadExcel, getData } from "../../API";
import { RemoveIcon } from "../icons/svgIcons";
import { CardClass } from "../CardClass";
import { nanoid } from "nanoid";

export const SortByParams = () => {
    const { state } = useLocation();
    const [params, setParams] = useSearchParams();
    const filterGroup = params.get("filterGroup");
    const filterVac = params.get("filterVac");
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
    const navigate = useNavigate();

    const groupedData = data.reduce((acc, student) => {
        let parallelObj = acc.find(p => p.parallel === student.parallel);

        if (!parallelObj) {
            parallelObj = { parallel: student.parallel, classes: [] };
            acc.push(parallelObj);
        }

        let classObj = parallelObj.classes.find(c => c.class === student.class);

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
    groupedData.forEach(parallelObj => {
        parallelObj.classes.sort((a, b) =>
            a.class.localeCompare(b.class, "ru")
        ); // 'ru' for Russian alphabet sorting
    });
    const groupMapping = {
        group1: "Основна",
        group2: "Підготовча",
        group3: "Спеціальна",
        group4: "Звільнений",
    };
    const vacMapping = {
        yes: "Щеплений",
        no: "Не щеплений",
        vac1: "Щеплений",
        vac2: "Не щеплений",
    };

    const handleDownload = (specificClass = "All") => {
        const filterKey = filterGroup ? "group" : "vac"; 
        const filterValue = filterGroup || filterVac || "All"; 

        dispatch(downloadExcel({
            token,
            filterKey,
            filterValue,
            specificClass,
        }));
    };

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
                    onClick={()=>{
                        navigate("/")
                    }}
                    sx={{
                        bgcolor: "transparent",
                        color: theme.palette.primary.main,
                        outline: `2px solid ${theme.palette.primary.main}`,
                        textTransform: "none",
                        padding: "8px 16px",
                        justifyContent: "start",
                        width: "fit-content",
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
                    {filterGroup
                        ? groupMapping[filterGroup] || filterGroup
                        : vacMapping[filterVac] || filterVac}
                </Button>
                {groupedData.map(item => (
                    <CardClass
                        key={nanoid()}
                        obj={item}
                        type={filterGroup ? "group" : "vac"}
                        download={handleDownload}
                    />
                ))}
            </Box>
        </Container>
    );
};
