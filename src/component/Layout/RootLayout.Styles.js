// import {makeStyles} from "@material-ui/core";

// const rootLayoutStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginLeft: theme.spacing(2),
//     },
//     toolbar: {
//         alignItems: 'flex-start',
//         background: "whitesmoke",
//         minHeight: 100,
//         paddingTop: theme.spacing(1),
//         boxShadow: '0 3px 5px 2px rgba(144, 136, 136, .3)',
//         paddingBottom: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 2,
//         alignSelf: 'flex-end',
//     },

// }));

// export default rootLayoutStyles

import { makeStyles } from "@material-ui/core";

const rootLayoutStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#f5f5f5",
        padding: theme.spacing(3),
        minHeight: "100vh",
    },
    menuButton: {
        marginLeft: theme.spacing(2),
        padding: theme.spacing(1, 2),
        color: "#fff",
        backgroundColor: "#4e54c8",
        borderRadius: 8,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        transition: "background-color 0.3s ease",
        "&:hover": {
            backgroundColor: "#6c63ff",
        },
    },
    toolbar: {
        alignItems: "center",
        background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        minHeight: 80,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        color: "#fff",
        borderBottom: "1px solid #ddd",
    },
    title: {
        flexGrow: 1,
        alignSelf: "center",
        fontSize: "1.8rem",
        fontWeight: 600,
        color: "#fff",
        textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        fontFamily: "'Roboto', sans-serif",
    },
}));

export default rootLayoutStyles;
