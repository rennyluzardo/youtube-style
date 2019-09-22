import React, { Component } from 'react'

// Components
import SearchBar from '../components/global/SearchBar'
import VideoList from '../components/global/VideoList'

import youtube, { KEY } from '../apis/youtube'

export default class index extends Component {
  state = {
    videos: []
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY
      }
    })

    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos} />
      </div>
    )
  }
}
