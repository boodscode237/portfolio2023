import {
    ButtonBase,
    CssBaseline,
    Grid,
    Paper,
} from "@material-ui/core";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from 'react-social-icons';
import homeStyles from "./Home.Styles";
import React from "react";
import './Home.css';

const Home = () => {
    const classes = homeStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h1>
                                Hi, I’m <span className={classes.span}>Brice Дональд</span>
                            </h1>
                            <h2>
                                I specialize in
                                <span className={classes.span}>
                                    <Typewriter 
                                        words={[
                                            " Python Programming", 
                                            " Data Analysis Libraries", 
                                            " Machine Learning (scikit-learn, TensorFlow)",
                                            " Artificial Intelligence"
                                        ]} 
                                        loop 
                                        cursor 
                                        cursorStyle='|' 
                                        typeSpeed={70} 
                                        deleteSpeed={50} 
                                        delaySpeed={1000} 
                                    />
                                </span>
                            </h2>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div className='languages'>
                                <p>I use various programming languages and tools:</p>
                                <span className={classes.span}>const languages = &#123;<br />
                                    python: "intermediate",<br />
                                    javascript: "intermediate",<br />
                                    Csharp: "beginner",<br />
                                    kotlin: "beginner",<br />
                                &#125;
                                </span>
                                <p className={classes.span}>
                                    <Typewriter 
                                        words={[
                                            ".append('Javascript')", 
                                            ".append('Python')", 
                                            ".append('C#')", 
                                            ".append('ReactJS')",
                                            ".append('NodeJS')", 
                                            ".append('Kotlin')"
                                        ]} 
                                        loop 
                                        cursor 
                                        cursorStyle='|' 
                                        typeSpeed={70} 
                                        deleteSpeed={50} 
                                        delaySpeed={1000} 
                                    />
                                </p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div className="languages">
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="Brice Donald" src="https://i.ibb.co/LQjg4QJ/linkedin-profile.jpg" />
                                </ButtonBase>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="Brand logo" src="https://i.postimg.cc/TPkSMDz8/instagram-profile-image.png" />
                                </ButtonBase>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <SocialIcon url={'https://github.com/boodscode237'} />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <SocialIcon url={'https://twitter.com/LiubliuYa'} />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <SocialIcon url={'https://www.linkedin.com/in/brice-abodo-7995061b0'} />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <SocialIcon url={'https://www.facebook.com/don.bri.965'} />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Home;
