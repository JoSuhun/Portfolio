import { memo } from "react";
import * as l from "../styles/common/Loading";
import tooltip from "/img/welcome-tooltip.png";
import bgimage from "/img/bgimage.png";
type Props = {
  progress: number;
};

const Loading = memo(({ progress }: Props) => {
  return (
    <l.LoadingWrapper $bgimage={bgimage}>
      <div className="inner_wrapper">
        <div className="welcome_message">
          <img src={tooltip} alt="" />
          <p>어서오세요, FE 조수훈의 포트폴리오입니다.</p>
        </div>
        <div className="percentage">{progress} %</div>
        <l.ProgressBarContainer progress={progress}>
          <div className="progress progress_moved">
            <div className="progress_bar"></div>
          </div>
        </l.ProgressBarContainer>
      </div>
    </l.LoadingWrapper>
  );
});

export default Loading;
