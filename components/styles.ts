import styled from "styled-components";

export const Header = styled.nav`
    background: #193C64CC;
    backdrop-filter: blur(0.3rem);
    height: 4rem;
    position: fixed;
    width: 100%;
    z-index: 2;
`
export const Container = styled.div`
    display: grid;
    font-family: "Prompt", sans-serif;
`
export const Main = styled.header`
    align-items: center;
    background-image: url("fundo_header.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    box-shadow: 0 -2px 1rem #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    min-height: 600px;
    overflow: hidden;
    position: relative;
    padding: 5rem 0;
    @media (max-width: 768px) {
        gap: 1rem;
        grid-template: 1fr 1fr / 1fr;
    }
`
export const Presentation = styled.section`
    align-items: center;
    display: grid;
    height: 100%;
    justify-items: center;
    width: 100%;
    z-index: 1;
`
export const PictureContainer = styled.div`
    align-items: center;
    display: grid;
    height: 100%;
    justify-items: center;
    position: relative;
    width: 100%;
    ::before{
        content: "";
        background: #B7B7B7;
        height: 300px;
        position: absolute;
        transform: rotate(-45deg) translateX(50%);
        width: 700px;
        @media (max-width: 768px) {
            height: 300px;
        }
    }
`
export const ProfilePicture = styled.div`
    background-color: #B7B7B7;
    border-radius: 50%;
    display:grid;
    height: 300px;
    position: relative;
    overflow: hidden;
    width: 300px;
    img {
        position: relative;
        width: 300px;   
    }
    @media (max-width: 768px) {
        height: 300px;
        width: 300px;
    }
`
export const Wrapper = styled.div`
    background-color: #FFFFFF10;
    backdrop-filter: blur(0.5rem);
    border-radius: 1rem;
    border-style: solid;
    border-width: 2px;
    box-shadow: 0 0 1rem 0.2rem #00000055;
    padding: 1.5rem;
    width: 75%;
    p {
        margin-bottom: 0;
        margin-top: 1rem;
    }
    h1{
        font-size: 3rem;
        line-height: 2.4rem;
    }

    h3 {
        margin: 0;
    }

    hr {
        background-color: #B7B7B7;
        border: none;
        height: 0.2rem;
        width: 10rem;
    }
`
export const ContainerSkills = styled.section`
    align-items: flex-start;
    background-color: #B7B7B7;
    /**background: #80D9A1;*/
    border-top: 1px solid #33333388;
    border-bottom: 1px solid #33333388;
    display: grid;
    gap: 2rem;
    grid-template: 1fr / 1fr 1fr;
    justify-content: center;
    padding: 3rem 2rem;
    
    h2{
        margin: 0 0 1rem 0;
        text-align: center;
        text-shadow: #333333AA 0 0 2rem;
    }
    
    @media (max-width: 768px) {
        grid-template: 1fr / 1fr;
    }
`
export const PersonalDescription = styled.div`
    display: grid;
    div {
        font-size: 1.2rem;
        border-radius: 1rem;
        padding: 2rem;
        background-color: #EEEEEE55;
        height: 100%;
    }
    label {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: lighter;
        text-decoration: underline;
    }
`
export const ContainerProjectsAndBlog = styled.section`
    background: linear-gradient(#213365,#0C0D0D);
    box-shadow: 0 0 1rem #000;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    gap: 2rem;
    height: 100%;
    justify-content: stretch;
    padding: 2rem;
    position: relative;
    text-align: center;
    h2{
        color: #B7B7B7;
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        grid-template: 1fr 1fr / 1fr;
    }
`
export const Projects = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    div {
        flex: 1;
        background-color: #EEEEEE55;
        border-radius: 1rem;
        font-size: 1.2rem;
        padding: 2rem;
    }
`
export const Blog = styled.div`
    display: flex;
    flex-direction: column;
`
export const PostList = styled.ul`
    background-color: #B7B7B7;
    border-radius: 1rem;
    box-shadow: inset 0 0 1rem #000;
    display: grid;
    gap: 0.5rem;
    height: 20rem;
    padding: 0.5rem 0;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
`
export const Post = styled.li`
    align-items: center;
    background-color: #FFFFFF85;
    height: 5rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s;

    img {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
    }
    :hover{
        cursor: pointer;
        background-color: #FFFFFFAA;
        color: #969696;
    }
    :active{
        transform: scale(1.05);
    }
`
export const Footer = styled.footer`
    text-align: center;
    background: #0C0D0D;
    color: #B7B7B7;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    width: 100%;
    .githubLink {
        ::before{
            display: block;
            content: "";
            background-image: url("github-icon.svg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 100px;
            width: 100px;
        }
    }
    .linkedinLink {
        ::before{
            display: block;
            content: "";
            background-image: url("linkedin-icon.svg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 100px;
            width: 100px;
        }
    }
`