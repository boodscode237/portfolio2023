import React from 'react'
import {Link, NavLink, Outlet} from "react-router-dom";
import rootLayoutStyles from "./RootLayout.Styles"
import {AppBar, CssBaseline, IconButton, Toolbar, Typography, useScrollTrigger} from "@material-ui/core";
import linksDetails from "./data";



function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const RootLayout = (props) => {
    const classes = rootLayoutStyles();
    const renderLinks = linksDetails.map((item) =>
        <IconButton color="inherit">
            <NavLink key={item.id} to={item.link}>
                {item.name}
            </NavLink>
        </IconButton>
    )
    return(
        <React.Fragment>
            <CssBaseline />
                    <ElevationScroll {...props} className={classes.root}>
                    <AppBar>
                        <Toolbar className={classes.toolbar}>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <Link className='menu' to='/'>
                                    ai.abodo
                                </Link>
                            </IconButton>
                            <Typography className={classes.title} variant="h5" noWrap>
                                PORTFOLIO
                            </Typography>
                            {renderLinks}
                        </Toolbar>
                    </AppBar>
                    </ElevationScroll>
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    )
}

export default RootLayout
