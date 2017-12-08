import React, { Component } from 'react';
import BusinessCard from './BusinessCard';

class MyProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BusinessCard
          name={this.props.name}
          title="Instructor"
          links={[
            'http://github.com/hueter',
            'http://linkedin.com/in/michael-hueter',
            'http://google.com'
          ]}
        />
      </div>
    );
  }
}

export default MyProfile;
