import styled from 'styled-components';

export const Container = styled.ul`
    align-items: center;
    background-color: #EEEEEE55;
    border-radius: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    min-height: inherit;
    justify-content: space-evenly;
    padding: 2rem;
`
export const CardSkill = styled.li`
    align-items: center;
    background-color: #EEEEEEAA;
    border-radius: 10%;
    box-shadow: 0 0 1rem 0.2rem #33333333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 10rem;
    width: 10rem;
    span {
        font-size: 1.3em;
        text-transform: uppercase;
    }
    @media (max-width: 768px) {
        width: 9.2rem;
        height: 9.2rem;
    }
`;