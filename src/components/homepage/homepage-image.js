import React from 'react';

import homeImg from '../../../static/images/homepage/russAndDami.jpg';

export default function HomeImage() {
    return (
      <div className='home-image-wrapper'>
        <img src={homeImg} className="img" />
      </div>
    )
}