import styled from "styled-components";

const bgImgInfo = [
  {
    id: 0,
    title: "main_bg",
    imgUrl: "/webtoon_mainbg.jpeg",
  },
  {
    id: 1,
    title: "sub_bg",
    imgUrl: "/webtoon_subbg.jpeg",
  },
  {
    id: 2,
    title: "404_bg",
    imgUrl: "/webtoon_404bg.jpeg",
  },
];

const Bgimg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.imgUrl}) no-repeat center center / cover;
  filter: brightness(0.6);
  z-index: -1;
`;

const Background = ({ id }) => {
  const imgUrl = bgImgInfo[id].imgUrl;
  // imgUrl만 넘겨서 딱딱 배경이 바뀌게 한다!!
  // imgUrl를 잡아야한다

  return (
    <>
      <Bgimg imgUrl={imgUrl} />
    </>
  );
};

export default Background;
