import styled from "styled-components";
import background from "../../Assets/bg.png";

// export const Titulo = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding-top: 1rem;
//   flex-direction: column;

//   h1 {
//     margin-top: 0;
//     font-family: "Montserrat", sans-serif;
//     text-transform: uppercase;
//   }

//   p {
//     width: 70%;
//     border-top: solid 0.06rem white;
//     margin-top: 3rem;
//   }
// `;

export const Section = styled.section`
  background-image: url(${background});
  background-color: #f6cf00;
  height: 775.61px;

  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
  font-size: 1.18rem;
  /* align-items: end; */

  justify-content: center;
  /* align-content: center; */

  gap: 20px;

  section {
    margin: 0 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
  .texto {
    width: 32rem;

    font-family: "Montserrat", sans-serif;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.075rem;
  }

  img {
    /* align-items: baseline;
    width: 43.25rem; */
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  h1 {
    width: 30rem;
    max-width: 20rem;
    font-family: "Montserrat", sans-serif;

    display: block;

    margin-bottom: 0;

    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  p {
    margin: 1%.5 0;
  }

  .imagemMaos {
    margin: -5px;
    margin-top: 6.9rem;
    display: flex;
    justify-content: end;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
