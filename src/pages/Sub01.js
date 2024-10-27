import { useParams } from "react-router-dom";
import styled from "styled-components";

const webtoonInfo = [
  {
    id: 0,
    title: "낙향문사전",
    img: "https://image-comic.pstatic.net/webtoon/746534/thumbnail/thumbnail_IMAG21_2df4002b-4597-4eed-8cdd-cb77eb73ad83.jpg",
    writter: "바킹독",
    desc: `온갖 비리가 가득한 과거 시험에 낙방해 좌절한 주인공 손빈.
    자신의 신세를 한탄하는 손빈 앞에 나타난 사자혁은 그에게 자신의 일대기를 기록할 것을 청한다.
    이후 둘은 함께 천하를 주유하게 되는데,
    과연 그의 붓이 써 내려가는 무림 일대기는 어떠한 기록을 남기게 되고,
    무림 세계에 발을 들이게 된 손빈의 운명은 어찌 흘러갈는지……`,
    hashTag: `#무협/사극 #레드아이스 스튜디오 #정통무협 #동양 #시대물 #우정 #먼치킨`,
  },
  {
    id: 1,
    title: "천하제일 대사형",
    img: "https://image-comic.pstatic.net/webtoon/802278/thumbnail/thumbnail_IMAG21_1f75b2d4-e3cd-4a9f-917e-635557178b08.jpg",
    writter: "YooN",
    desc: `잔혹했던 정사대전에 반 강제적으로 끌려갔던 대사형 ‘혁무상’.
    수많은 피가 흐른 전쟁에 참전한지 7년. 전쟁은 진즉 끝났음에도 돌아오지 않아 죽은 줄 알았다.
    
    간신히 고향 땅을 밟은 혁무상이 보게 된 것은, 고작 삼류 흑도에게 핍박당해 무너져가는 고향 용호무관의 모습.
    
    분노에 찬 혁무상. 용호무관을 향해 다가오는 모든 위협에 대사형은 검을 빼어 든다.`,
    hashTag: `#무협/사극 #사이다 #참교육 #환골탈태 #판무 #복수극 #먼치킨 #소설원작`,
  },
  {
    id: 2,
    title: "사신",
    img: "https://image-comic.pstatic.net/webtoon/799837/thumbnail/thumbnail_IMAG21_97023c54-e37e-4dca-9c62-9bf3b04413ce.jpg",
    writter: "임재원",
    desc: `[ 2023 대한민국콘텐츠대상 만화부문 대통령상 수상작 ]

    형의 복수를 위해 살천문의 무사 황정을 죽인 소년 종리추.
    살천문의 추격을 피하기 위해 살혼부의 살수 적지인살에게
    몸을 의탁하게 되면서 십망(十忘)이라는 거대한 소용돌이에 휩쓸린다.
    십망의 그늘에서 벗어나기 위해선 전설의 경지인 사무령이 되는 수밖에 없다!`,
    hashTag: `#판타지 #판타지개그 #서양 #게임 #왕족/귀족 #개그 #세계관 #게임판타지`,
  },
  {
    id: 3,
    title: "광마회귀",
    img: "https://image-comic.pstatic.net/webtoon/776601/thumbnail/thumbnail_IMAG21_7365135131254864183.jpg",
    writter: "YooN",
    desc: `무공에 미친 광마 이자하.
    그는 마교 교주의 천옥을 훔쳐 쫓기던 중 벼랑에서 떨어지게 된다.
    모든 게 끝났다고 생각한 순간 눈을 떠보니, 사람들에게 무시당하던 점소이 시절로 돌아와 있는데...
    게다가 억울한 누명으로 두들겨 맞고 객잔은 박살이 나 있는 상황.
    ​점소이 시절로 회귀한 광마!
    사내는 다시 미치게 될 것인가? 아니면 사내의 적들이 미치게 될 것인가.`,
    hashTag: `#무협/사극 #사이다 #세계관 #회귀 #판무 #소설원작`,
  },
  {
    id: 4,
    title: "남궁세가 비인격",
    img: "https://image-comic.pstatic.net/webtoon/827744/thumbnail/thumbnail_IMAG21_a94e2923-a434-4dc1-925f-a2ba4005a122.jpg",
    writter: "해사",
    desc: `"다시는 살려두지 않겠다."

    무림 통일이라는 일대 과업을 앞두고 길러준 '개'에게 일가 방계가 잔인하게 절멸당하고 만
    남궁 세가의 가주 '남궁현호'.
    
    그 '개'에게 목이 잘려 시야가 흐려지는 순간, 6년 전 그를 처음 만났던 시기로 회귀하고 만다...`,
    hashTag: `#무협/사극 #사이다 #동양 #액션 #성장물 #동양풍판타지 #회귀 #판무`,
  },
  {
    id: 5,
    title: "마도전생기",
    img: "https://image-comic.pstatic.net/webtoon/807777/thumbnail/thumbnail_IMAG21_e47489ea-bf97-4726-a8e7-6403092a303a.jpg",
    writter: "포스스튜디오/codezero",
    desc: `정파무림 의천맹의 최강 살수, 천하진.

    자유를 찾기 위해 탈출을 감행하지만 코앞에서 목숨을 잃고 만다.

    그런데…
    '신교불패, 만마앙복. 삼공자님의 쾌유를 경하드리옵니다!...' `,
    hashTag: `#무협/사극 #전쟁 #악역이주인공 #지금추천작 #성장물 #힘순찐 #회귀 `,
  },
  {
    id: 6,
    title: "절대군림",
    img: "https://image-comic.pstatic.net/webtoon/832677/thumbnail/thumbnail_IMAG21_05ee91c5-55cb-49d5-9935-5608a8bbe41c.jpg",
    writter: "박시대/장영훈",
    desc: `"이 강호, 제가 먹습니다!"
    왼손에는 군자검을, 오른손에는 지옥도를 든
    미스터리한 과일상 아들.
    입담과 재주는 물론, 압도적인 무공 실력까지 갖춘
    완벽한 그의 진짜 정체는 무엇일까.
    '강호제패'를 품은 스무 살 청년, '적이건(赤利乾)'의 유쾌한 여정이 시작된다! `,
    hashTag: `#무협/사극 #정통무협 #동양 #배틀 #능글남 #미친작화 #무협/사극 #고인물 `,
  },
  // {
  //   id: 7,
  //   title: "아수라",
  //   img: "https://image-comic.pstatic.net/webtoon/826670/thumbnail/thumbnail_IMAG21_ecfd3f55-b872-45a8-9837-a94d1dcb9f72.jpg",
  //   writter: "류기운/문정후",
  //   desc: `최초로 대륙을 통일한 절대자로부터 불사의 비밀을 알아오라는 명을 받고 떠난 이가 있었다.
  //   세상의 모든 곳을 찾아다녀서라도 반드시 불사의 비밀을 알아올 것으로 믿었던 그는
  //   절대자가 죽고 제국이 몰락할 때까지 끝내 돌아오지 않았고, 수많은 억측만을 남긴 채 사람들의 기억 속에서도 차츰 잊혀져갔다.
  //   그리고 오랜 시간이 흐른 뒤... `,
  //   hashTag: `#판타지 #동양 #모험 #액션 #무협/사극 #성장물 #동양풍판타지 #인외존재 `,
  // },
];

const ConWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  .imgwrap {
    width: 195px;
    height: 250px;
    margin-top: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .textwrap {
    h3 {
      margin: 10px 0;
    }

    p:nth-child(2) {
      font-weight: 700;
      margin-bottom: 25px;
    }

    p:nth-child(3) {
      color: #444;
      margin-bottom: 45px;
    }

    p:nth-child(4) {
      font-weight: 600;
      font-family: "Times New Roman", Times, serif;
      color: #797979;
    }
  }

  .rightcon {
    width: 100%;
    max-width: 600px;
    height: 500px;
    background: #f1f1f1
      url(https://www.doyacart.com/upFolder/doyacart/upFolder/upFile/summernote/dy_design_customize/1698731845686_courseInfoImage_6540973dab468_0.webp)
      no-repeat center / cover;
    margin-top: 30px;
  }
`;

const Sub01 = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <ConWrap>
        <div className="leftcon">
          <div className="imgwrap">
            <img src={webtoonInfo[id].img} alt={webtoonInfo[id].title} />
          </div>

          <div className="textwrap">
            <h3>{webtoonInfo[id].title}</h3>
            <p>{webtoonInfo[id].writter}</p>
            <p>{webtoonInfo[id].desc}</p>
            <p>{webtoonInfo[id].hashTag}</p>
          </div>
        </div>

        <div className="rightcon"></div>
      </ConWrap>
    </div>
  );
};

export default Sub01;
