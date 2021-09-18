import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import SmallTitle from '../components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../components/ResumeItem';
import {experience_NeuroFus, courseWork} from '../data/ResumeInfo'
import LinkedButton from '../components/LinkedButton';
import AmineBenaceurResume from '../documents/AmineBenaceurResume.pdf'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />

    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <LinkedButton title={"Click for PDF Resume"} href={AmineBenaceurResume} icon={PictureAsPdfIcon} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'9/19 - 9/20'} 
                        title={'Software Engineer Intern'}
                        subTitle={'NeuroFUS Laboratory, UofC'}
                        text={''}
                        listItems={experience_NeuroFus} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'Class of 2021'} 
                        title={'BSc. in Software Engineering'}
                        subTitle={'University of Calgary'}
                        text={''}
                        listItems={courseWork} 
                    />

                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);


    }


    }
`;
export default Resume
