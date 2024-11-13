import React from 'react';
import { ButtonBase, CssBaseline, Grid, Paper } from "@material-ui/core";
import aboutStyles from "./About.Styles";

const About = () => {
    const classes = aboutStyles();
    return (
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
                                        <p>I am a graduate student at <b>ITMO University</b> in Saint Petersburg, specializing in <b>Artificial Intelligence</b>.</p>
                                        <p>Previously, I studied finance and accounting, gaining valuable experience in that field before discovering my passion for programming and AI.</p>
                                        <p>This journey led me to focus on AI, particularly <b>Natural Language Processing (NLP)</b> and <b>Computer Vision</b>, where I believe programming can truly create <b>MAGIC</b> (and, of course, coffee!).</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h2>What I Like</h2>
                                        <p>I enjoy learning new languages, taking on challenges, and exploring different cuisines. My routine is all about study, sports, and cooking (and eating 😋).</p>
                                        <p>I spend a lot of time reading, especially Dostoevsky recently, while commuting. My favorite programming language is Python, although I often work with JavaScript. Lately, I’ve been delving into Android development with Kotlin and Jetpack Compose, which is just 🔥🔥.</p>
                                    </Paper>
                                </Grid>

                                <Grid item>
                                    <Paper className={classes.paper}>
                                        <h2>My Plans</h2>
                                        <p>Looking ahead, I aim to complete a Master’s and eventually pursue a PhD. I aspire to teach AI and programming at the university level and make education accessible through online courses.</p>
                                        <p>One of my dreams is to create a platform for open online courses in my home country, supporting students from primary school through university, where they can ask questions and gain practical skills.</p>
                                        <p>Additionally, I’m working with friends to start a technology-focused company aimed at solving challenges in our communities. We hope to make a meaningful impact by developing innovative solutions for local problems. Together, we’re excited to contribute as much as possible.</p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={5} item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="About Me" src="https://i.postimg.cc/yYjc1y8b/pinterest-board-photo.png" />
                        </ButtonBase>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default About;
