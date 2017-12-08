import React, { Component } from 'react';

class MoodChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMood: 'happy',
      face: ':-)',
      currentMoodIdx: 0,
      moods: ['happy', 'sad', 'angry', 'neutral']
    };

    this.changeMood = this.changeMood.bind(this);
  }

  changeMood(e) {
    const moodsObj = {
      happy: ':)',
      sad: ':(',
      angry: '>:(',
      neutral: '-_-'
    };
    let nextMoodIdx = this.state.currentMoodIdx + 1;
    if (nextMoodIdx === this.state.moods.length) {
      nextMoodIdx = 0;
    }
    this.setState({
      face: moodsObj[this.state.currentMood],
      currentMood: this.state.moods[nextMoodIdx],
      currentMoodIdx: nextMoodIdx
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.face}</h1>
        <button onClick={this.changeMood}> Change Mood </button>
      </div>
    );
  }
}

export default MoodChanger;
