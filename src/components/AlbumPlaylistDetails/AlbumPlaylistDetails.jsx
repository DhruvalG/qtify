import React from 'react';
import './AlbumPlaylistDetails.css';

const AlbumPlaylistDetails = ({ title, image, follows }) => {
  return (
    <div className="menu-item">
      <img src={image} alt="ablum" loading="lazy" />
      <div className="menu-item-info">
        <h3 className="menu-item-title">{title}</h3>
        <p className="menu-item-followers">{follows} followers</p>
      </div>
    </div>
  );
};

export default AlbumPlaylistDetails;
