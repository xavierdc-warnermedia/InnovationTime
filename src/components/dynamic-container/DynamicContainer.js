import React from 'react';
import Profile from './profile/Profile';
import './DynamicContainer.css';

const DynamicContainer = () => {
  const nothing = () => {
    alert('nothing happened');
  }

  //TODO: will need to generate some kind of api that returns a title, description, and photo (if applicable)
  const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&usqp=CAU';
  const title = 'Jane Doe';
  const description = 'Entrepeneur, Leader, and tech innovator with Warner Brothers Discovery.';

  return (
    <div className="container">
      <h3>Speakers In This Segment</h3>
      <button className="button" onClick={nothing}>This button doesn't do anything</button>
      <div className="all-profiles_container">
        <Profile image={imageUrl} title={title} description={description} />
      </div>
    </div>
  )
}

export default DynamicContainer;
