import React, { Component } from 'react';
import BusinessCard from './BusinessCard';

const MyProfile = props => {
  return (
    <div>
      <BusinessCard
        name={props.name}
        title="Instructor"
        links={[
          'http://github.com/hueter',
          'http://linkedin.com/in/michael-hueter',
          'http://google.com'
        ]}
      />
    </div>
  );
};

export default MyProfile;
