import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background-color: #EEEEEE55;
    border-radius: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
    padding: 2rem;
`
export const CardSkill = styled.div`
    align-items: center;
    background-color: #EEEEEE55;
    border-radius: 10%;
    box-shadow: 0 0 1rem 0.2rem #33333333;
    display: grid;
    justify-content: center;
    min-height: 10rem;
    width: 10rem;

    @media (max-width: 768px) {
        width: 9.2rem;
        height: 9.2rem;
    }
`;