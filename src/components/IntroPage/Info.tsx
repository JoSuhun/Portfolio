import * as i from "../styles/IntroPage/InfoStyle";
const Info = () => {
  return (
    <div className="h-screen p-16 bg-gon-darkgreen">
      <div
        className="h-full p-10 bg-white rounded-3xl shadow-md flex flex-col
       justify-center items-center"
      >
        <div>
          <div className="py-10">
            <div
              className="2xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl
             mb-3 font-PartialSans"
            >
              " 생각이 많은 개발자 조수훈입니다. "
            </div>
            <p className="xl:text-lg">
              : 지식만 많은 사람보다, 생각도 많은 사람이 되고 싶습니다.
            </p>
          </div>
          <div className="[&>p]:text-xl [&>p]:mb-1">
            <i.InfoComment>
              <span>효율적이고 재사용이 가능한</span> 코드를 작성합니다.
            </i.InfoComment>
            <i.InfoComment>
              <span>사용자 경험</span>과 사용자 입장의 UI/UX를 중시합니다.
            </i.InfoComment>
            <i.InfoComment>
              <span>긍정적인 관계</span>에서 나오는 <span>팀워크의 힘</span>을
              중요하게 생각합니다.
            </i.InfoComment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
