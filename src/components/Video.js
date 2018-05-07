import React, { PropTypes, Component } from "react";
import YouTube from "react-youtube";

const listVideo = ["KjjJTQSnnoc", "FtDaTXg1wOs", "2-KIxNNrJwc"];

class Video extends Component {
  state = {
    videoId: listVideo[0],
    que: 0
  };
  componentDidMount() {
    console.log("cdm", this.state.videoId, "11");
  }
  _onReady(event) {
    console.log("ready");
    //event.target.pauseVideo();
  }
  _onEnd = event => {
    console.log("end");
    this.setState({
      videoId: listVideo[this.state.que + 1],
      que: this.state.que + 1
    });
  };

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <div>
        <YouTube
          videoId={this.state.videoId}
          opts={opts}
          onReady={this._onReady}
          onEnd={this._onEnd}
        />
      </div>
    );
  }
}

export default Video;
