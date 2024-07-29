import styled from 'styled-components';

export const FaqSection = styled.section`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    padding: 1.3rem 6%;
    display: flex;
    flex-direction: column;
    text-align: center;

    ul {
        padding: 0;
    }

    h1 {
        font-size: 2rem;
        margin: 0 0 43px;
        font-weight: 900;
    }

    li {
        height: 40px;
        font-size: 1.1rem;
        display: flex;
        list-style-type: none;
        background-color: aliceblue;
        gap: 10px;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 10px;
        justify-content: start;
        text-align: start;
        align-items: center;
    }

    img {
        transform: translate(-50%);
        justify-content: center;
        align-items: center;
        border: 0;
        margin-right: -1.2rem;
    }
`;
