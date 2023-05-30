import React, { useState, useCallback } from "react";
import { ProductItems } from "../MenuItems/MenuItems";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function ImageGrid(id) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    console.log('lightbox')
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
 
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
     {ProductItems.map((item, index) => {
      return item.id === id.id ?
        <span key={index}>
          <Gallery photos={item.imgGrid} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={item.imgGrid.map((x) => ({
                    ...x,
                    srcset: x.source,
                    caption: x.alt,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </span>
      : null
     })}
    </>
  );
}

export default ImageGrid;