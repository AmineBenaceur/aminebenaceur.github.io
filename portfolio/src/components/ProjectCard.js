import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import styled from 'styled-components';


function ProjectCard({project}) {
    return (
        <ProjectCardStyled>
            <Card xs={12} md={6} xl={3} lg={3} justify={'center'} className='project-card' >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        width = "300"
                        image={project.photo}
                        title="Contemplative Reptile"
                    />
                    <CardContent className="project-typography">
                        <Typography gutterBottom variant="h5" component="h2" >
                        {project.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {project.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                    project.links.youtube && ( <Button startIcon={<YouTubeIcon />} variant="outlined" href={project.links.youtube}
                        target="_blank" className="button-youtube">
                        Demo 
                    </Button>) }
                    {    
                    project.links.github && ( <Button variant="outlined" startIcon={<GitHubIcon />} href={project.links.github}
                        target="_blank"className="button-github">
                        Github 
                    </Button>)}
                    {    
                    project.links.link && ( <Button size="small" startIcon={<LinkIcon />}  variant="outlined" href={project.links.link}
                        target="_blank" className="button-link"  >
                        Link
                    </Button>)
                    }

                </CardActions>
            </Card>
        </ProjectCardStyled>
    )
}

const ProjectCardStyled = styled.div`

.project-card{
    background-color: var(--background-dark-grey)

}
.project-typography{
    h2{
        color: var(--white-color);
    }
    p{
        color: var(--font-light-color);
    }
}
.button-youtube{
    background-color: var(--background-dark-color);
    width: 6rem;
    height: 2rem;
    span{
        color: red;
    }
}
.button-link{
    background-color: var(--background-dark-color);
    width: 6rem;
    height: 2rem;
    span{
        color: blue;
    }
}
.button-github{
    background-color: var(--background-dark-color);
    width: 7rem;
    height: 2rem;
    span{
        color: purple;
    }
}

`;


export default ProjectCard
