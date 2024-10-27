import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 80px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    h3 {
      font-size: 28px;
      /* font-weight: 900; */
      font-family: Georgia, "Times New Roman", Times, serif;
    }
    span {
      margin: 7px 0 0 10px;
    }
  }

  img {
    width: 52px;
    height: 52px;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <h3>
        <a href="#">
          <h3>무협,</h3>
          <span>툰</span>
        </a>
      </h3>
      <img src="/webtoonlogo.jpg" alt="logo_img" />
    </HeaderWrap>
  );
};

export default Header;
