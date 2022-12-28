import {makeStyles} from "@material-ui/core";

const projectStyle = makeStyles((theme) => ({
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
    },
    actionBg: {
        background: 'rgba( 249, 6, 6, 0.5 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 15px )',
        webkitBackdropFilter: 'blur( 15px )',
        bordeRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
    }

}));

export default projectStyle