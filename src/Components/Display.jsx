import React from 'react'
import Wrapper from './Wrapper';
import { rmd } from '../utils';

function Display({ toDisplay }) {
            return toDisplay.map((data) => <Wrapper data={data} id={rmd().toString()} />);
}

export default Display