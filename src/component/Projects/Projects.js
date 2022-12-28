import React from 'react'
import {
    Button,
    CssBaseline,
    Grid,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    ListSubheader,
    Paper,
} from "@material-ui/core";
import projectStyle from "./Projects.Styles";
import {publicationAPI, projectsAPI} from "./ProjectsAPI";
import './Project.css'


function InfoIcon() {
    return null;
}

const Projects = () => {
    // onClick={()  => {}
    const imageClick = (url) => {
        window.open({url})
    }
    const classes = projectStyle()
    const renderExperience = publicationAPI.map(experienceApi => (
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
    const renderImages = projectsAPI.map(({item, name, imageUrl, link, desc, id, category}) => (
        <div className='gallery'>
            <a target='_blank'  href={link}><img src={imageUrl} alt="item" /></a>
            <div className="name">
                {name}
            </div>
            <div className="desc">
                {desc}
            </div>

        </div>
    ))
    return(
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <h1 className={classes.title}><center>PUBLICATIONS AND PROJECTS</center></h1>
                <h3><center>PUBLICATIONS</center></h3>
                <Grid container>
                    <Grid container xs={12} spacing={2}>
                        <Grid item xs={6} sm container>
                            <Grid
                                item xs container
                                spacing={2}
                            >
                                {renderExperience}
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
                <div className={classes.imageListRoot}>
                    <h3><center>PROJECTS</center></h3>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                                {renderImages}
                        </Grid>
                    </Grid>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Projects