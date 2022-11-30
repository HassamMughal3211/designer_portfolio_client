import React from 'react';
import { Image } from 'antd';
import 'antd/dist/reset.css';

const ImageCard = ({width,imgUrl}) => (
  <Image
    width={width}
    src={imgUrl}
  />
);
export default ImageCard;