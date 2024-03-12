import styled from "styled-components";

const MoviePageWrapper = styled.div`
  .img_Wrapper {
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    .text_Wrapper {
      border-radius: 10px;
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
  .animations {
    animation: onopacity 1s 1;
  }

  @keyframes onopacity {
    25% {
      transform: translateY(-25deg);
      opacity: 0.5;
    }

  }
`;

export { MoviePageWrapper };
