// import styled from "styled-components";

// export const Section = styled.div`
//   .pgto {
//     padding: 3rem;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }

//   img {
//     width: 36rem;
//     height: 36rem;
//   }
//   .botao {
//     padding: 5rem;
//   }
// `;

import styled from "styled-components";

export const Section = styled.div`
  .pgto {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 36rem;
    height: 36rem;
  }

  .botao {
    padding: 5rem;
  }

  @media (min-width: 1440px) {
    .pgto {
      padding: 4rem;
    }

    img {
      width: 40rem;
      height: 40rem;
    }

    .botao {
      padding: 4rem;
    }
  }

  /* Estilos para telas entre 1024px e 1440px */
  @media (max-width: 1440px) and (min-width: 1024px) {
    .pgto {
      padding: 2.5rem;
      flex-direction: column;
    }

    img {
      width: 30rem;
      height: 30rem;
    }

    .botao {
      padding: 3rem;
    }
  }

  /* Estilos para telas menores que 1024px */
  @media (max-width: 1024px) {
    .pgto {
      padding: 2rem;
    }

    img {
      width: 25rem;
      height: 25rem;
    }

    .botao {
      padding: 2.5rem;
    }
  }

  /* Estilos para telas menores que 425px */
  @media (max-width: 425px) {
    .pgto {
      padding: 1rem;
    }

    img {
      width: 18rem;
      height: 18rem;
    }

    .botao {
      padding: 1.5rem;
    }
  }
`;
