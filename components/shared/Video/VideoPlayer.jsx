import React, { useRef } from "react";
import PlayButton from "./PlayButton"; // Import the PlayButton component

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  return (
    <div className="">
      <video ref={videoRef} width="650" height="450" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <PlayButton videoRef={videoRef} />
    </div>
  );
};

export default VideoPlayer;
