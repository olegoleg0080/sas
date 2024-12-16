import { Box, Button, Link, useTheme } from "@mui/material";
import { SortIcon } from "../icons/svgIcons";
import { HeaderSelectList } from "./HeaderSelectList";
import { useDispatch, useSelector } from "react-redux";
import {
    showSelectGroupSelector,
    showSelectVacSelector,
} from "../../redux/selectors";
import {
    headerNavSelectBtn,
    headerNavSelectGroup,
    headerNavSelectVac,
    headerSortNavBox,
    headerSortNavBtn,
} from "../../styles/headerStyles";
import { showSelectGroup, showSelectVac } from "../../redux/slice";

export const HeaderSortNav = () => {
    const theme = useTheme();
    const isShowGroups = useSelector(showSelectGroupSelector);
    const isShowVac = useSelector(showSelectVacSelector);
    // console.log(isShowGroups);

    const dispatch = useDispatch();

    return (
        <Box
            sx={{
                ...headerSortNavBox,
            }}
        >

            <Link
                href="/sas"
                underline="none"
                color="#fff"
                sx={{ ...headerSortNavBtn,
                    "&:hover": {
                        color: theme.palette.primary.main,
                        bgcolor: "#fff",
                    }, }}
            >
                Класи
            </Link>
            <Box
                sx={{
                    ...headerNavSelectGroup,
                }}
            >
                <Button
                    className="navBtn"
                    name="navBtn"
                    onClick={() => {
                        dispatch(showSelectGroup())
                    }}
                    sx={{
                        ...headerNavSelectBtn,
                        "&:hover": {
                            color: theme.palette.primary.main,
                            bgcolor: "#fff",
                            "& .MuiButton-endIcon>svg": {
                                fill: theme.palette.primary.main,
                            },
                        },
                    }}
                    variant="contained"
                    endIcon={<SortIcon />}
                >
                    Групи
                </Button>
                {isShowGroups && (
                    <HeaderSelectList
                        params={
                            {group1: "Основна",
                            group2: "Підготовча",
                            group3: "Спеціальна",
                        group4: "Звільнені",}
                        }
                    />
                )}
            </Box>
            <Box
                sx={{
                    ...headerNavSelectVac,
                }}
            >
                <Button
                    className="navBtn"
                    name="navBtn"
                    onClick={() => {
                        dispatch(showSelectVac())
                    }}
                    sx={{
                        ...headerSortNavBtn,
                        "&:hover": {
                            color: theme.palette.primary.main,
                            bgcolor: "#fff",
                            "& .MuiButton-endIcon>svg": {
                                fill: theme.palette.primary.main,
                            },
                        },
                    }}
                    variant="contained"
                    endIcon={<SortIcon />}
                >
                    Щеплення
                </Button>
                {isShowVac && (
                    <HeaderSelectList params={{vac1: "Щеплені", vac2: "Не щеплені"}} />
                )}
            </Box>
        </Box>
    );
};
