import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import ProfilePhoto from '../img/ProfilePhoto.jpg';
function ImageSection(props) {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={ProfilePhoto} alt="Profile Photo"></img>
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4> I am <span> Amine Benaceur</span></h4>
                </div>
                <p className = "paragraph">
                    An ambitious Software Engineering graduate based in Calgary, Alberta who enjoys Hardware Interfacing and building things that live on the web. 
                </p>
                <div className="sub-title">
                    <h5> Experience </h5>
                </div>
                <p className = "paragraph">
                    My experience includes a 12-month internship working on hardware interfacing and desktop application development in the field of Focused Ultrasound.
                </p>
                <div className="sub-title">
                    <h5> Interests </h5>
                </div>

                <div className= "interest-list">
                    <ul>
                        <li className="interest-list-bullet">
                            Full-stack web development 
                        </li >
                        <li className="interest-list-bullet" >
                            Hardware Interfacing 
                        </li>
                        <li className="interest-list-bullet" >
                            Human-computer Interaction 
                        </li>
                        <li className="interest-list-bullet">
                            Cyber Security 
                        </li>
                        <li className="interest-list-bullet">
                            Robotics
                        </li>
                    </ul> 
                </div>
                <div className="sub-title">
                    <h5> Hobbies </h5>
                </div>
                <p className = "paragraph">
                    When I'm not hacking away on a project, I prefer to be lifting weights, playing pickup basketball, discoving scenic places of the city or watching comedic films.
                </p>
            </div>
            
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        h5{
            font-size: 1.25rem;
            margin-top: 1rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .interest-list{
            display: list-item;
            margin-left: 1.5rem;
            margin-top: 1rem;
            .interest-list-bullet{
                list-style-type: circle;
        
            }
        }
            .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection

