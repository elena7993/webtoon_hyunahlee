import styled from "styled-components";
import Background from "../components/Backgound";

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
    margin-top: 50px;
    h3 {
      margin: 0;
      margin-bottom: 30px;
      font-size: 100px;
      color: #fff;
      span {
        font-size: 18px;
      }
    }
    p {
      color: #f1f1f1;
      font-size: 18px;
      font-weight: 700;
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
            src="/pagenotfound_img.png"
            alt="404_img"
            // <img
            //   src="https://pbs.twimg.com/media/FG94pY-aUAUmj-Q.jpg"
            //   alt="404_img"
          />
        </div>

        <div className="textBox">
          <h3>
            404 <span>Page Not Found</span>{" "}
          </h3>
          <p>저런, 찾는 서책이 없구료...</p>
          <p>그러지말고 술이나 한 잔 어떤가... </p>
        </div>
      </ConWrap>

      <Background id={2} />
    </>
  );
};

export default PageNotFound;
