import { AbsoluteFill, OffthreadVideo } from "remotion";

type TranscriptEntry = {
  timestamp: number;
  text: string;
}

type Clip = {
  start_time: number;
  end_time: number;
  transcript: TranscriptEntry[];
}

type ClipCompositionProps = {
  video_url: string;
  clip: Clip;
}

export const ClipComposition: React.FC<ClipCompositionProps> = ({
  video_url,
  clip,
}) => {
    if (video_url.length === 0 || clip.transcript.length === 0) return null;
    console.log('Rendering video clip with transcript');

  // Find the current transcript entry based on timestamp
//   const currentTranscript = clip.transcript.find(
//     (entry) => currentTime >= entry.timestamp
//   );
    console.log('video_url', video_url);
    console.log('clip', clip);
    const startFrom = clip.start_time * 30;
    const endAt = clip.end_time * 30;
    return (
        <AbsoluteFill>
        <OffthreadVideo 
            src={video_url}
            startFrom={startFrom}
            endAt={endAt}
        />
        </AbsoluteFill>
    );
    }; 

// {currentTranscript && (
//     <AbsoluteFill
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "rgba(0, 0, 0, 0.7)",
//           color: "white",
//           padding: "10px 20px",
//           borderRadius: "4px",
//           fontSize: "24px",
//           textAlign: "center",
//           maxWidth: "80%",
//         }}
//       >
//         {currentTranscript.text}
//       </div>
//     </AbsoluteFill>
//   )}