import {makeStyles} from "@material-ui/core";

const educationStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 100,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'justify-content',
        color: theme.palette.text.secondary,
        margin: "auto",
    },
    image:{
        height: "100%",
        width: '100%',
    },
    img: {
        maxWidth: "inherit",
        maxHeight: "inherit",
        height: 'inherit',
        width: 'inherit',
        objectFit: 'cover',
    },
}));

export default educationStyles