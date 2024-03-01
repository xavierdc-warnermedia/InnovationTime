// Contains the profile image, name, and description of a captured person on the live stream or speaker on a segment

import React from 'react';
import Icon from './icon/Icon';
import Description from './description/Description';
import Title from './title/title';
import './profile.css';

const Profile = ({image, title, description, links}) => {
  return (
    <div className="profile_container">
      <Icon image={image} />
      <div className="profile_descriptors">
        <Title title={title} />
        <Description description={description} links={links} />
      </div>
    </div>
  )
}

export default Profile;
