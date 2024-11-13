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
            <div className={`${classes.root} gradient-background`}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={`${classes.paper} intro-paper`}>
                            <h1 className="intro-title">
                                Hi, I’m <span className="name-highlight">Brice Дональд</span>
                            </h1>
                            <h2 className="specialization">
                                I specialize in
                                <span className="typing-highlight">
                                    <Typewriter 
                                        words={[
                                            " Python Programming", 
                                            " Data Analysis Libraries", 
                                            " Machine Learning (scikit-learn, TensorFlow, Pytorch)",
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
                        <Paper className={`${classes.paper} languages-paper`}>
                            <div className="languages">
                                <p className="languages-header">I use various programming languages and tools:</p>
                                <span className="languages-code">
                                    const stack = &#123;<br />
                                    python: "intermediate",<br />
                                    Pytorch: "intermediate",<br />
                                    spark: "beginner",<br />
                                    hadoop: "beginner",<br />
                                    &#125;
                                </span>
                                <p className="languages-append">
                                    <Typewriter 
                                        words={[
                                            ".append('Pytorch')", 
                                            ".append('Python')", 
                                            ".append('Docker')", 
                                            ".append('FastAPI')",
                                            ".append('Keras')", 
                                            ".append('NLP')"
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
                            <div className="profile-images">
                                <ButtonBase className="profile-image-container">
                                    <img className="profile-image" alt="Brice Donald" src="https://i.ibb.co/LQjg4QJ/linkedin-profile.jpg" />
                                </ButtonBase>
                                <ButtonBase className="profile-image-container">
                                    <img className="profile-image" alt="Brand logo" src="https://i.postimg.cc/TPkSMDz8/instagram-profile-image.png" />
                                </ButtonBase>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid container justifyContent="center" spacing={2} className="social-icons">
                        <Grid item>
                            <SocialIcon url="https://github.com/boodscode237" bgColor="#333" />
                        </Grid>
                        <Grid item>
                            <SocialIcon url="https://twitter.com/LiubliuYa" bgColor="#1DA1F2" />
                        </Grid>
                        <Grid item>
                            <SocialIcon url="https://www.linkedin.com/in/brice-abodo-7995061b0" bgColor="#0A66C2" />
                        </Grid>
                        <Grid item>
                            <SocialIcon url="https://www.facebook.com/don.bri.965" bgColor="#4267B2" />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};

export default Home;
