import {
    ButtonBase,
    CssBaseline,
    Grid,
    Paper,
} from "@material-ui/core";
import { Typewriter } from "react-simple-typewriter"
import { SocialIcon } from 'react-social-icons';
import homeStyles from "./Home.Styles";
import React from "react";
import './Home.css'

const Home = () => {
    const classes = homeStyles()
    return(
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
                                I know
                                <span className={classes.span}>
                <Typewriter words={[" Python", " Data analysis libraries.", " Machine learning libraries(scikit-learn)."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
                            </h2>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={`${classes.paper}`}>
                            <div className={'languages'}>

                                <p>I use various languages to code: </p>
                                <span className={classes.span}>let languages = &#123;<br/>
                                python: "intermediate",<br/>
                                javascript: "intermediate",<br/>
                                Csharp: "beginner",<br/>
                                Kotlin: "beginner",<br/>
                                    &#125;
            </span>
                                <p className={classes.span}>
                                    <Typewriter words={[".append('Javascript')", ".append('Python')", ".append('C#')", ".append('ReactJS')",
                                        ".append('NodeJS')", ".append('Kotlin')" ]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                                </p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div className="languages">
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="my=e donald" src="https://i.ibb.co/LQjg4QJ/linkedin-profile.jpg" />
                                </ButtonBase>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="logo of my brand" src="https://i.postimg.cc/TPkSMDz8/instagram-profile-image.png" />
                                </ButtonBase>
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <SocialIcon url={'https://github.com/boodscode237'}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <SocialIcon url={'https://twitter.com/LiubliuYa'}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <SocialIcon url={'https://www.linkedin.com/in/brice-abodo-7995061b0'}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <SocialIcon url={'https://www.facebook.com/don.bri.965'}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default Home
