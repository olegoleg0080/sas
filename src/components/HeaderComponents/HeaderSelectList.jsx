import { Box, Button, useTheme } from "@mui/material";
import { nanoid } from "nanoid";
// import { useDispatch } from "react-redux";
// import { showAllSelect } from "../../redux/slice";
import { useNavigate } from "react-router-dom";
import { headerSortItem, headerSortList } from "../../styles/headerStyles";

export const HeaderSelectList = ({ params }) => {
    const theme = useTheme();
    // const dispatch = useDispatch()
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                ...headerSortList,
                bgcolor: theme.palette.primary.main,
            }}
        >
            {Object.entries(params).map(([key, value]) => (
                <Button
                    onClick={() => {
                        if (key.includes("group")) {
                            navigate(`/sort/${key}?filterGroup=${key}&filterVac=`);
                        } else if (key == "yes" || key == "no") {
                            navigate(`/sort/${key}?filterGroup=&filterVac=${key}`);
                        }
                    }}
                    key={nanoid()}
                    sx={{
                        ...headerSortItem,
                        "&:hover": {
                            color: theme.palette.primary.main,
                            bgcolor: "#fff",
                            borderRadius: "32px",
                            transition: ".5s",
                        },
                    }}
                >
                    {value} 
                </Button>
            ))}
        </Box>
    );
};
