// contains the circular image profile of the guest or person detected on the live stream if one is available
// defaults to a CNN logo or default silhouette if none is available

import React from 'react';

const Icon = ({image}) => {
  return (
    <img src={image ?? ''} alt=""></img>
  )
}

export default Icon;
