import React from 'react';
import bows from 'bows';

const LOGGER = bows('components')


export const NoMatch = (props) =>
    <h3>Route not found</h3>



export const Homepage = props =>
    <h1>Hello World!</h1>



export const Home = props =>
    <div>
        <h1>
            Welcome to FWW (Flask with Webpack)
        </h1>
        <p>(Hello World)</p>
    </div>
