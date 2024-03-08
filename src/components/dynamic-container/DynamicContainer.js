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
      <div className="meta-data_container">
        <h3>Dynamic Container: Title (Who's On)</h3>
        <h5>Description</h5>
        <p>{new Date(Date.now()).toString()}</p>
        <hr className='hr-solid'></hr>
        {/* Create 3 clickable tabs that shows our different innovation ideas */}
      </div>

      <div className="all-profiles_container">
        <Profile image={imageUrl} title={title} description={description} />
      </div>
    </div>
  )
}

export default DynamicContainer;
