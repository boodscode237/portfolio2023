import {makeStyles} from "@material-ui/core";

const homeStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 100,
    },
    span: {
        color: 'red'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image:{
        height: "35vh",
        width: '50%',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

}));

export default homeStyles