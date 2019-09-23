import React from 'react'

const VideoDetail = ({ video }) => {
  const videoId = video && video.id && video.id.videoId ? video.id.videoId : null
  const videoSrc = `https://www.youtube.com/embed/${videoId}`

  return (
    !video
      ? <div>Loading...</div>
      : <div>
        <div className="ui embed">
          <iframe src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header" >{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
  )
}

export default VideoDetail
