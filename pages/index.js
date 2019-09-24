import React, { Component } from 'react'
import { connect } from 'react-redux'
// Components
import SearchBar from '../components/global/SearchBar'
import VideoList from '../components/global/VideoList'
import VideoDetail from '../components/global/VideoDetail'
// Actions
import { getVideoDetail } from '../actions/videos'

class index extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = term => {
    this.props.getVideoDetail(term).then(videoDetail => {
      this.setState({
        videos: videoDetail.data.items,
        selectedVideo: videoDetail.data.items[0]
      })
    })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    videos: state.videos.videos
  }),
  {
    getVideoDetail
  }
)(index)
