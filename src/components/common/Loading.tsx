import { memo } from "react";
import * as l from "../styles/Loading";
type Props = {
  progress: number;
};

const Loading = memo(({ progress }: Props) => {
  return (
    <l.LoadingWrapper>
      <div className="percentage">{progress} %</div>
      <l.ProgressBarContainer progress={progress}>
        <div className="progress2 progress-moved">
          <div className="progress-bar2"></div>
        </div>
      </l.ProgressBarContainer>
    </l.LoadingWrapper>
  );
});

export default Loading;
