import React from 'react';

import Directory from '../../components/directory/directory.component';  // we got to go into our home page and replace our
// old code with our new components so let's go and import in our directory

import './homepage.styles.scss';

const HomePage = (props) => (
  // console.log(props),
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;