
import ReactPlayer from "react-player";

type VideoModuleProps = {
  videoUrl: string;
};

function VideoModule({ videoUrl }: VideoModuleProps) {
    return (
<div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="w-[80vw] h-[80vh]">
    <ReactPlayer
      src={videoUrl}
      playing
      controls
      width="100%"
      height="100%"
    />
  </div>
</div>
    );
}

export default VideoModule;