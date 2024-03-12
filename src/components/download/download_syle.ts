import styled from "styled-components";

const DownloadPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;
  border-radius: 10px;
  background: transparent;
  padding: 10px;
  overflow: hidden;
  position: relative;
  .blur_box {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background: rgba(51, 51, 51, 0.65);
  
  }
  /* .icons{

  } */
`;

export { DownloadPageWrapper };
