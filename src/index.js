import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import secret from './_secret.js';

const YOUTUBE_API_KEY = secret.API_KEY;

// This is a class of a component
// To create an instance of this class use <App />
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Render App inside an element with class name 'container'
ReactDOM.render(<App />, document.querySelector('.container'));
