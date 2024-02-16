// contains the description of the guest found including any links to merchandise, articles, etc.

import React from 'react';

const Description = ({description, links}) => {
  return (
    <div>
      <p>{description ?? ''}</p>
      {links.length ? Array.from(links).map(link => <a href={link}>{link}</a>) : ''}
    </div>
  )
}

export default Description;
