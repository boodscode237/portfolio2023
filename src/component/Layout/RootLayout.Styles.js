import {makeStyles} from "@material-ui/core";

const rootLayoutStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    toolbar: {
        alignItems: 'flex-start',
        background: "whitesmoke",
        minHeight: 100,
        paddingTop: theme.spacing(1),
        boxShadow: '0 3px 5px 2px rgba(144, 136, 136, .3)',
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 2,
        alignSelf: 'flex-end',
    },

}));

export default rootLayoutStyles