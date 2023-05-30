import React from 'react';
import LazyLoad from 'react-lazyload';

const ImgNextGen = ({
  srcWebp,
  srcJp2,
  fallback,
  alt,
  ...props
}) => {
  return (
    <LazyLoad height={200} offset={100} once>
      <picture>
        <source srcSet={srcWebp} type="image/webp" />
        {/* <source srcset={srcJrx} type="image/jxr" /> */}
        <source srcSet={srcJp2} type="image/jp2" />
        <source srcSet={fallback} type="image/jpeg" />
        <img src={fallback} alt={alt} {...props} />
      </picture>
    </LazyLoad>
  );
};
export default ImgNextGen;