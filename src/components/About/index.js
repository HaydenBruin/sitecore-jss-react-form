import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const About = (props) => (
    <div>
        <p>About Component</p>
        <Text tag="h2" field={props.fields.desc} />
        <Text field={props.fields.heading} />
    </div>
);

export default About;
