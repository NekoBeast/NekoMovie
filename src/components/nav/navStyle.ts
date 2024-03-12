import styled from "styled-components";

const NavWrapper = styled.div`
  width: mix-content;
  height: 80px;

  .nav_bar {
    Input {
      width: 300px;
      border: none;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.58);
      color: white;
      font-weight: 600;
      font-size: medium;
    }
  }
  .clip_filter {
    filter: drop-shadow(4px 5px 0px white);
  }
  .header {
    z-index: 999;
    padding-left: 15px;
    clip-path: polygon(100% 0%, 80% 100%, 0% 100%, 0% 0%);
    background-color: black;
    width: 400px;
    height: 90px;
    position: relative;

    h2 {
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 900;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-image: url("https://i.pinimg.com/564x/5f/73/88/5f7388ca0c24bbc6691e13e2ef899429.jpg");
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
const SearchInputs = styled.div`
  display: flex;
  justify-content: center;
  z-index: 9;
  position: absolute;
  width: 100%;

  .search_scroll {
  }
  .search_scroll::-webkit-scrollbar {
    width: 0%;
  }
`;
export { NavWrapper, SearchInputs };
