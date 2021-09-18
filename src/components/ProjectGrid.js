import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import projectInfo from '../data/ProjectInfo';

function ProjectGrid({projects}) {
    return (
        <ProjectGridStyled>
            <Grid container spacing={3}>{
                projects.map( (project) => {
                    return(
                        <Grid item  xs={12} md={6} xl={4} lg={4}>
                        <ProjectCard key={project.id} project={project} />
                        </Grid>
                    )

                })
                }
            </Grid>
        </ProjectGridStyled>
    )
}

const ProjectGridStyled = styled.div`
    /* width: 100%
    height: 100%; */
`;

export default ProjectGrid
