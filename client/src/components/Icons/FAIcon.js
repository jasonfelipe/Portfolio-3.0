import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PromiseProvider } from 'mongoose';

const FAIcon = (props) => (
    <FontAwesomeIcon onClick={props.onClick} className='icon' size='10x' icon={[ props.prefix, props.iconName ]} />
);

export default FAIcon;


