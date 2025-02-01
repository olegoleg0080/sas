import { Box, Container, Typography, useTheme } from "@mui/material";
import { TableClasses } from "../Home/tableClasses";
// import { TableClasses } from "../TableClasses";

export const Home = () => {
    const theme = useTheme();

    const styleBox = {
        p: "24px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "16px",
        "@media (min-width: 744px)": {
            p: "36px 48px",
        },
        "@media (min-width: 1440px)": {
            p: "40px 48px",
        },
    };
    const styleText = {
        color: theme.palette.primary.darkm,
        fontFamily: "Manrope;",
        fontStyle: "normal;",
        fontWeight: "500;",
        lineHeight: "1.4; ",
    };
    return (
        <Container
        maxWidth="false"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                m: "0 auto",
            }}
        >
            <Box sx={styleBox}>
                <Typography sx={styleText}>Молодша школа</Typography>
                <TableClasses minParallel={1} maxParallel={4} />
            </Box>
            <Box sx={styleBox}>
                <Typography sx={{styleText}}>Середня школа</Typography>
                <TableClasses minParallel={5} maxParallel={9} />
            </Box>
            <Box sx={styleBox}>
                <Typography sx={{styleText}}>Старша школа</Typography>
                <TableClasses minParallel={10} maxParallel={12} />
            </Box>
        </Container>
    );
};
