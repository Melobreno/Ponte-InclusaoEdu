import styled from 'styled-components';

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  flex-direction: column;

  p {
    width: 80%;
    border-top: solid 0.06rem white;
    margin-top: 4rem;
  }
`;

export const Section = styled.section`
background-color: #F6CF00;

`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  font-size: 1.18rem;
  align-items: center;
  margin-bottom: 0;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 43.25rem;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  p {
    width: 30rem;
    max-width: 20rem;
    font-family: 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans ,Unicode',
      Verdana, sans-serif;
    font-size: 1.2rem;
    display: block;
    padding: 10px;
    margin-bottom: 0;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
