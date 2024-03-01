// contains the circular image profile of the guest or person detected on the live stream if one is available
// defaults to a CNN logo or default silhouette if none is available

import React from 'react';
import './icon.css';

const Icon = ({image}) => {
  return (
    <div className="profile_image-container">
      <img className="profile_icon" src={image ?? ''} alt=""></img>
    </div>
  )
}

export default Icon;
