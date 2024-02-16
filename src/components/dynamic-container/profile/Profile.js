// contains the profile image and description of a captured person on the live stream

import React from 'react';
import Icon from './icon/Icon';
import Description from './description/Description';
import './profile.css';

const Profile = ({image, description, links}) => {
  return (
    <div>
      <Icon image={image} />
      <Description description={description} links={links} />
    </div>
  )
}

export default Profile;
