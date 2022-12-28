import React from 'react'
import {ButtonBase, CssBaseline, Grid, Paper, Typography} from "@material-ui/core";
import educationStyles from "./Education.Styles";


const Education = () => {
    const classes = educationStyles()
    return(
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
                                        <h1>Bachelor Degree in Information Technology - 2023</h1>
                                        <h2>Russian State Vocational and Pedagogical University</h2>
                                        <p>
                                            I am actually at my last year of studies at RSVPU in Yekaterinburg.
                                            I will be writting my diploma on the topic: <b>"Creation and management of a website for a contest"</b>
                                        </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h1>Bachelor Degree in Information Technology - 2016</h1>
                                        <h2>Catholic university of Bertoua</h2>
                                        <p>
                                            I passed my bachelor degree with <b>honors and appreciations</b> from the committee.
                                            During that time I was the delegate(Старость) of my promotion for 2 and the half years.
                                            I was elected by my classmates two times in a row.
                                            I filled the role and gain respect from my classmates.
                                        </p>
                                    </Paper>
                                </Grid>

                                <Grid item>
                                    <Paper className={classes.paper}>
                                        <h1>Baccalaureate - Government Certificate Of Education - 2013</h1>
                                        <h2>Minor Seminary Saint Joseph of Efok</h2>
                                        <p>
                                            In 2013 I passed the Government Certificate Of Education. The exam to pass to study at the University.
                                            I passed my Exam with honors and I had one of the highest grade in one subject - English.
                                        </p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={6} item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="https://i.postimg.cc/nhwm7V7K/logo-transparent.png" />
                        </ButtonBase>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default Education