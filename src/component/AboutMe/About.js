import React from 'react'
import {ButtonBase, CssBaseline, Grid, Paper, Typography} from "@material-ui/core";
import aboutStyles from "./About.Styles";

const About = () => {
    const classes = aboutStyles()
    return(
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <h1><center>ABOUT ME</center></h1>
                    <Grid container>
                        <Grid container xs={7} spacing={2}>
                            <Grid item xs={6} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Paper className={classes.paper}>
                                            <h2>Who Am I?</h2>
                                            <p>I am a student at the <b>Russian State Vocational and Pedagogical University.</b></p>
                                            <p>In the past I studied accounting and
                                                finance and worked a bit in that domain.
                                            </p>
                                            <p>Then i decided to learn programming because
                                                with programming people make <br /><b>MAGIC</b> and <b>Coffee</b>
                                            </p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classes.paper}>
                                            <h2>What I like</h2>
                                            <p>For sure, I like languages, I like challenges, and food. My life is:<br/>
                                            Study, sport, cooking(eating 😋😋), Study. I read when I am in public transport.
                                                Recently I spent a lot of time reading <b>Dostoevsky</b></p>
                                            <p>
                                                I can say the programming laguage I like the most is Python but I code mostly with javascript.
                                                Recently I started making Android apps with kotlin jetpack compose. It is just 🔥🔥.
                                            </p>
                                        </Paper>
                                    </Grid>

                                    <Grid item>
                                        <Paper className={classes.paper}>
                                            <h2>My plans</h2>
                                            <p>
                                                I have plans for the future.
                                                I want to have a Master degree and even a PHD if all goes well.<br/>
                                                I want to teach students at the university, online and even in school.
                                                I plan to create a site for open online courses in my country.
                                                A site that can be used by students from primary school till the
                                                university to learn and practice what they learned at school.
                                                At least a place were any question can be answered.
                                            </p>
                                            <p>Also with some friends we are looking to create a startup with the goal
                                                of bringing solution to problems that our countries face(Creating technologies for that).
                                                <br/>
                                                We just want to contribute as much as we can.
                                            </p>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={5} item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="https://i.postimg.cc/yYjc1y8b/pinterest-board-photo.png" />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </div>
        </React.Fragment>
    )
}

export default About