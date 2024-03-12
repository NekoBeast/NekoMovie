import styled from "styled-components";

const DetailPageWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: fit-content;

  Button {
    background: black;
    width: fit-contant;
    height: 40px;
    transition: all 0.3s;
    text-transform: capitalize;
    &:hover {
      background: white;
      color: black;
    }

    h2 {
      font-weight: bold;
    }
  }

  /* download section  */
  .onStart {
    display: flex;
  }

  
  /* download section ends */
  .img_Wrapper {
    transition: all 0.3s ease-in-out;
    border-radius: 5px;

    .text_Wrapper {
      border-radius: 5px;
      display: none;
      background-color: rgb(0, 0, 0, 0.6);
    }
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.89);

      .text_Wrapper {
        display: flex;
      }
    }
  }
`;

export { DetailPageWrapper };
