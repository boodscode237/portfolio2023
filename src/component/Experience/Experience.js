import React from 'react'
import { CssBaseline, Grid, ImageList, ImageListItem, Paper,} from "@material-ui/core";
import experienceStyle from "./Experience.Styles";
import {ResumeApi, TechnologiesUsed} from "./ExperienceApi";




const Experience = () => {
    const classes = experienceStyle()
    const renderExperience = ResumeApi.map(experienceApi => (
        <Grid key={experienceApi.id} item xs>
            <Paper className={classes.paper}>
                <h1>{experienceApi.year}</h1>
                <h2>{experienceApi.title}</h2>
                <p>
                    {experienceApi.desc}
                </p>
            </Paper>
        </Grid>
    ))
    const renderImages = TechnologiesUsed.map((technology) => (
        <ImageListItem key={technology.id} cols={technology.cols || 1}>
            <img src={technology.imageUrl} alt={technology.name}/>
        </ImageListItem>
    ))
    return(
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <h1 className={classes.title}><center>EXPERIENCE</center></h1>
                <Grid container>
                    <Grid container xs={6} spacing={2}>
                        <Grid item xs={6} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                {renderExperience}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={6} spacing={2}>

                        <Grid item xs={6} sm container>
                            <Grid item xs container direction="column">
                                <Paper className={classes.paper}>
                                    <div className={classes.division}>
                                        <ImageList cols={6}>
                                            {renderImages}
                                        </ImageList>
                                    </div>
                                </Paper>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </React.Fragment>
    )
}

export default Experience