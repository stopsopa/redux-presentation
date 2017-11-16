

import React from 'react';

const Footer = ({ text }) =>(
    <div>
        footer: {text}
    </div>
);

Footer.defaultProps = { text: 'default footer content [Footer.defaultProps]' };

export default Footer
