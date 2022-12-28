import {makeStyles} from "@material-ui/core";

const experienceStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 100,
    },
    title: {
        marginBottom: 20,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'justify-content',
        color: theme.palette.text.secondary,
        margin: "auto",
        backgroundColor: 'whitesmoke'
    },
    division: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    }

}));

export default experienceStyle