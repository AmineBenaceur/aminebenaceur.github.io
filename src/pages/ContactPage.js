import React from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Title from '../components/Title';

export default function ContactPage() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(
            "service_6u2vmkd",
            "template_x27ndlk",
            e.target,
            "user_6p6fHe1b6mWbkUnMaCFgL"
          ).then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset(); //TODO: add send confirmation
      }
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled>
                <InnerLayout className={'contact-section'}>
                <div className="form-content">
                    <div className="contact-title">
                        <h4> Get in Touch! </h4>
                    </div>
                    <form className="contact-form" onSubmit={sendEmail}>

                            <input type="hidden" name="contact_number" />
                            <div className="form-field" >
                                <input
                                    className="form-field"
                                    placeholder="Your Name"
                                    type="text"
                                    name="user_name"
                                    required
                                />
                            </div>
                            <div className="form-field" >
                                <input
                                    className="form-field"
                                    placeholder="E-mail"
                                    type="email"
                                    name="user_email"
                                    required
                                />
                            </div>
                            <div className="form-field" >
                                <textarea
                                    className="form-field"
                                    placeholder="Message"
                                    name="message"
                                    cols="30" 
                                    rows="10"
                                    required
                                />
                            </div>

                            <div className="form-field-send-button">
                                <input className="send-button" type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>

    )
}


const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
                
            }
        }
        .contact-form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 1rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    .form-field-send-button{
        margin-top: 1rem;
        input{
            color: var(--white-color);
            border: 1px solid var(--border-color);
            outline: none;
            background-color: var(--primary-color);
            width: 100%;
        }
    }

    }
`;
