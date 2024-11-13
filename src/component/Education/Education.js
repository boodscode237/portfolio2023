import React from 'react';
import { ButtonBase, CssBaseline, Grid, Paper } from "@material-ui/core";
import educationStyles from "./Education.Styles";

const Education = () => {
    const classes = educationStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <h1><center>EDUCATION</center></h1>
                <Grid container>
                    <Grid container xs={6} spacing={2}>
                        <Grid item xs={6} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h1>Master's Degree in Artificial Intelligence - Expected 2025</h1>
                                        <h2>ITMO University, Saint Petersburg</h2>
                                        <p>
                                            Currently pursuing a Master's in Artificial Intelligence, specializing in NLP and Computer Vision. 
                                            Research topic: <b>"Development and Optimization of a Large Language Model (LLM) for the French Language"</b>.
                                        </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h1>Bachelor's Degree in Finance and Accounting - 2016</h1>
                                        <h2>Catholic University of Central Africa, Yaoundé</h2>
                                        <p>
                                            Graduated with honors. During my studies, I held the role of class delegate, demonstrating leadership 
                                            and organizational skills.
                                        </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h1>Technical Baccalaureate - 2013</h1>
                                        <h2>Minor Seminary Saint Joseph of Efok</h2>
                                        <p>
                                            Completed with honors, achieving top grades, especially in English. This qualification enabled me to 
                                            pursue university studies.
                                        </p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={6} item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="ITMO logo" src="https://i.postimg.cc/nhwm7V7K/logo-transparent.png" />
                        </ButtonBase>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Education;
