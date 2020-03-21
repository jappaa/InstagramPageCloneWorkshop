import React from 'react';
import './Gallery.css';

import { galleryData } from './data';
  
  class Gallery extends React.Component {
    constructor() {
      super()
      this.state = { ig: galleryData };
    }
    render() {
      const { ig }  = this.state;
      return (
        <div className="gallery">
            { ig.map((item, index) => (
                <div className="gallery-box" key={index}>
                  <img className="gallery-image" src={item.images.standard_resolution.url} alt={item.caption.text} />
                  <div className="gallery-box-caption">
                    <div className="gallery-box-caption-content">
                      <div className="text-faded">
                        {item.caption.text}  
                        <hr/>
                        <span>{item.likes.count} likes {item.comments.count} comments </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
           
      );
    }
  }

  export default Gallery;