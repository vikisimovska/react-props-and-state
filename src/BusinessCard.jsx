import React from 'react';

const BusinessCard = props => (
  <div>
    <h1> {props.name} </h1>
    <h2> {props.title} </h2>
    {props.links.map(link => <li>{link}</li>)}
  </div>
);

export default BusinessCard;

/* SIDE EFFECTS */

