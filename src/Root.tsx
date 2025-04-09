import { Composition } from "remotion";
import { MyComposition } from "./compositions/MyComposition";
import { ClipComposition } from "./compositions/ClipComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="ClipComp"
        component={ClipComposition}
        durationInFrames={3000} // 100 seconds at 30fps
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          video_url: "",
          clip: {
            start_time: 0,
            end_time: 0,
            transcript: []
          }
        }}
      />
    </>
  );
};
