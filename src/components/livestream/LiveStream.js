import React from "react";
import './LiveStream.css';

const LiveStream = ({liveStreamAddress}) => {

  return (
    <div className='live-stream'>
      <iframe class='stream' title='live' src={liveStreamAddress} autoplay='autoplay'>Test
      </iframe>
        Live Stream
    </div>
  )
};

export default LiveStream;
