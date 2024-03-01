// contains the description of the guest found including any links to merchandise, articles, etc.

import React from 'react';
import './description.css';

const Description = ({description, links}) => {
  return (
    <div className="profile_description">
      <p>{description ?? '-'}</p>
      {links && links.length ? Array.from(links).map(link => <a href={link}>{link}</a>) : ''}
    </div>
  )
}

export default Description;
