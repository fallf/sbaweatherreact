import React from "react";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="background-video">
        <source
          src="/video/windows-colorful-waves.3840x2160.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
