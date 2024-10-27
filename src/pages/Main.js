import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const webtoonMain = [
  {
    id: 0,
    title: "낙향문사전",
    wirtter: "바킹독",
    img: "https://image-comic.pstatic.net/webtoon/746534/thumbnail/thumbnail_IMAG21_2df4002b-4597-4eed-8cdd-cb77eb73ad83.jpg",
  },
  {
    id: 1,
    title: "마도전생기",
    wirtter: "포스스튜디오/codezero",
    img: "https://image-comic.pstatic.net/webtoon/807777/thumbnail/thumbnail_IMAG21_e47489ea-bf97-4726-a8e7-6403092a303a.jpg",
  },
  {
    id: 2,
    title: "사신",
    wirtter: "임재원/설봉",
    img: "https://image-comic.pstatic.net/webtoon/799837/thumbnail/thumbnail_IMAG21_97023c54-e37e-4dca-9c62-9bf3b04413ce.jpg",
  },
  {
    id: 3,
    title: "광마회귀",
    wirtter: "JP/이히/유진성",
    img: "https://image-comic.pstatic.net/webtoon/776601/thumbnail/thumbnail_IMAG21_7365135131254864183.jpg",
  },
  {
    id: 4,
    title: "남궁세가 비인격",
    wirtter: "해사",
    img: "https://image-comic.pstatic.net/webtoon/827744/thumbnail/thumbnail_IMAG21_a94e2923-a434-4dc1-925f-a2ba4005a122.jpg",
  },
  // {
  //   id: 6,
  //   title: "절대군림",
  //   wirtter: "박시대/장영훈",
  //   img: "https://image-comic.pstatic.net/webtoon/832677/thumbnail/thumbnail_IMAG21_05ee91c5-55cb-49d5-9935-5608a8bbe41c.jpg",
  // }
];

const Wrap = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const ConWrap = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  h3 {
    margin: 10px 0 5px;
    font-size: 18px;
    text-align: center;
  }

  p {
    margin: 0;
    margin-bottom: 5px;
    font-size: 14px;
    color: #555;
    text-align: center;
  }
`;

const Main = () => {
  return (
    <>
      <Wrap>
        <ConWrap>
          {webtoonMain.map((webtoon) => (
            <Con key={webtoon.id}>
              <Link to={`/sub01/${webtoon.id}`}>
                <img src={webtoon.img} alt={webtoon.title} />
                <h3>{webtoon.title}</h3>
                <p>{webtoon.wirtter}</p>
              </Link>
            </Con>
          ))}
        </ConWrap>
      </Wrap>
    </>
  );
};

export default Main;
