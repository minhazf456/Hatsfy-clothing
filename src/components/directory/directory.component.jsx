import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


// this one will need to be class component  because
// we need to store the state value of those manu items
//that we want to pass and create our manu items with.


//This one is going to have a directory with a state value of those menu items.

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }
      ]
    };
  }
//  so inside of our render we want to return what we had in our home page.
// let's go back to our homepage and let's copy this directory menu because that's all we really need

// now wa map through our sections. we want to pass these section
// objects into our manu item. so that you can create manu item

// and now we know that we have to pass in a function to our map call.
// in our map call of our array we're gonna get a section and what we want to render is the menu item

render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;