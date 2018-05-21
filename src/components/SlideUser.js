import React from 'react';

const SlideUser = ({user, numSlides}) => {
  const styleSlide = {
    width: `${100 / numSlides}%`,
  };

  const {picture, name, email} = user;

  return (
    <div className="user-slide" style={styleSlide}>
      <img className="user-slide__img" src={picture.large} alt="profile" />
      <p>
        <strong>{`${name.first} ${name.last}`}</strong>
      </p>
      <p>{email}</p>
    </div>
  );
}

export default SlideUser;
