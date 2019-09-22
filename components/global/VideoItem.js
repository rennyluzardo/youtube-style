import React from 'react';

const VideoItem = ({ video }) => (
  <div>
    <img src={video.snippet.thumbnails.medium.url} alt=""/>
    <p>{ video.snippet.title }</p>
  </div>
)


export default VideoItem;
