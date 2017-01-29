import React from 'react';
import Player from '@vimeo/player';
import Scroll from 'react-scroll';
import { findNearestTimeStamp } from '../componentHelpers';

const scroller = Scroll.scroller;

class VideoPlayer extends React.Component {

  componentDidUpdate() {
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const callback = function (data) {
      const anchor = findNearestTimeStamp(this.props.comments, data.seconds);
      const element = document.getElementById(anchor.toString());
      element.scrollIntoView();
    }.bind(this);
    player.on('seeked', callback);
  }

  render() {
    return (
      <div>
        <iframe src="https://player.vimeo.com/video/76979871" width="640" height="360" frameBorder="0" allowFullScreen />
      </div>
    );
  }
}


export default VideoPlayer;

