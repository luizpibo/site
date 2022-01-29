import styled from "styled-components";

export const Header = styled.header`
    background: #FFAAAACC;
    backdrop-filter: blur(0.3rem);
    position: fixed;
    height: 4rem;
    width: 100%;
    z-index: 2;
`;

export const Container = styled.div`
    display: grid;
`;

export const Main = styled.main`
    align-items: center;
    background-image: url("fundo_header.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    /*background: linear-gradient(#159999, #048888);*/
    display: grid;
    min-height: 550px;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    overflow: hidden;
    position: relative;
    padding: 5rem 0;

    @media (max-width: 768px) {
        grid-template: 1fr 1fr / 1fr;
        gap: 1rem;
    }
`;

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
    width: 100%;
    justify-items: center;
    position: relative;
    ::before{
        content: "";
        background: linear-gradient(to right, #C0C0C000,#C0C0C0);
        position: absolute;
        width: 700px;
        height: 400px;
        transform: rotate(-45deg) translateX(-50%);
        @media (max-width: 768px) {
            height: 300px;
        }
    }
`

export const ProfilePicture = styled.div`
    background-color: #d2d2d2;
    border-radius: 50%;
    height: 400px;
    display:grid;
    justify-items: center;
    position: relative;
    overflow: hidden;
    width: 400px;
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
    box-shadow: 0 0 1rem 0.2rem #00000055;
    border-style: solid;
    border-width: 2px;
    border-radius: 1rem;
    width: 75%;
    padding: 1.5rem;
    p {
        margin-bottom: 0;
    }
    h1{
        margin: 0;
        font-size: 3rem;
    }

    h3 {
        margin: 0;
    }
`


export const ContainerSkills = styled.div`
    background: #159999;
    border-top: 1px solid #33333388;
    border-bottom: 1px solid #33333388;
    min-height: 50vh;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
    justify-items: center;
    padding: 2rem 0;
    @media (max-width: 768px) {
        grid-template: 1fr 1fr 1fr 1fr / 1fr
    }


`
export const CardSkill = styled.div`
    width: 80%;
    min-height: 20rem;
    background-color: #ffffff33;
    border-radius: 10%;
    box-shadow: 0 0 1rem 0.2rem #33333333;
`;

export const ContainerBlog = styled.section`
    min-height: 70vh;
    background-color: #048888;
`;

export const Footer = styled.footer`
display: block;
    background:  #333;
    min-height: 30vh;
`

