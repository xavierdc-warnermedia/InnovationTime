// Contains profile's full name

import React from 'react';

const Title = ({title}) => {
  return (
    <h4>{title ?? '-'}</h4>
  )
}

export default Title;
