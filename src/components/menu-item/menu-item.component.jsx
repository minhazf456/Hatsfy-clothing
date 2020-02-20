import React from 'react';
import { withRouter } from 'react-router-dom'; // withrouter is is it's a higher order component and a higher order component is essentially
// a function that takes a component as an argument and which turns you a modified component.

import './menu-item.styles.scss';

// use functional component here instead of classed based
//component becuase we are not using any state to hold the value


/// React actually gives every one of these HTML markup elements another property called style and
// style takes an object that has properties values equal to CSS values you want to apply to this element.
// So what we want to do is we want to set a background image.

// const MenuItem = ({ title, imageUrl, size }) => (
//   <div 
//       style={{
//         backgroundImage: `url(${imageUrl})`
//       }}
//       className={`${size} menu-item`}
//       >
//       <div className='content'>
//       <h1 className='title'>{title.toUpperCase()}</h1>
//       <span className='subtitle'>SHOP NOW</span>
//     </div>
//   </div>
// );

// export default MenuItem;



const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div 
  className={`${size} menu-item`}
  onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div    /// // this div => We just want to see the effect get bigger with in our div when we hover over it.
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

// component is a function that takes any component and modifies it in some way and then returns you that
// new modified component.

export default withRouter(MenuItem);