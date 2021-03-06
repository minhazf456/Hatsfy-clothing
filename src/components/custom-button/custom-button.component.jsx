import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

// So we'll call the prop is Google sign in and then we will conditionally render using string interpolation
// the class name of Google sign in.Otherwise we'll render an empty string and then we will also always render custom button.
// Now we're able to do this because with react everything is javascript.
// And using this we will now render this class of Google sign and if this property is true if not then
// there will be an empty string and custom button is also always rendered.

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);


export default CustomButton;