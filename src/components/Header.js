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
      color: #fff;
    }
    span {
      font-size: 18px;
      font-weight: 800;
      color: #fff;
      margin: 7px 0 0 10px;
    }
  }

  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <a href="#">
          <h3>무협,</h3>
          <span>툰</span>
        </a>
      </div>
      <img src="/webtoonlogo.jpg" alt="logo_img" />
    </HeaderWrap>
  );
};

export default Header;
