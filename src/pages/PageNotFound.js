import styled from "styled-components";

const ConWrap = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .imgBox {
    width: 500px;
    height: 800px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .textBox {
    width: 500px;
    h3 {
      font-size: 100px;
      span {
        font-size: 18px;
      }
    }
    p {
      font-size: 24px;
      font-family: Georgia, "Times New Roman", Times, serif;
    }
  }
`;

const PageNotFound = () => {
  return (
    <>
      <ConWrap>
        <div className="imgBox">
          <img
            src="https://pbs.twimg.com/media/FG94pY-aUAUmj-Q.jpg"
            alt="404_img"
          />
        </div>

        <div className="textBox">
          <h3>
            404 <span>Page Not Found</span>{" "}
          </h3>
          <p>저런, 찾는 서책이 없구료...</p>
          <p>그러지말고 술이나 한 잔 어떤가 </p>
        </div>
      </ConWrap>
    </>
  );
};

export default PageNotFound;
