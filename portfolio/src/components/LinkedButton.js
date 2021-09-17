import React from "react"
import styled from "styled-components";

function LinkedButton({title, href}){
    return(
        <ButtonsStyled>
            <LinkedButtonStyled>
                <a href={href} target="_blank"> {title} </a>
            </LinkedButtonStyled>
        </ButtonsStyled>
    )
}




const LinkedButtonStyled = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-top: 1rem;
    margin-bottom: 0rem;
    &:active ,&:focus{
        background-color: var(--primary-color);
    }
    &:hover{
        background-color: var(--primary-color);
    }

    &:not(:last-child){
        margin-right: .6rem;
    }
`;

const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 0rem auto;


`;

export default LinkedButton;