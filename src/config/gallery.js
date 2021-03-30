import { addUniqueId } from '../utils/helpers';

export const title = 'Gallery';

export const data = [
  {
    image: './images/gallery/gallery-image-1.png',
    text: 'ANT 100 Robot at work',
  },
  {
    image: 'http://www.animationmagazine.net/wordpress/wp-content/uploads/futurama-6b-3.jpg',
    text: 'Bending Units at a work meeting',
  },
  {
    image: 'https://i.ytimg.com/vi/8inhN656Zag/hqdefault.jpg',
    text: "Our competitor's robots",
  },
];

export const arrows = {
  left: './images/gallery/left-arrow.svg',
  right: './images/gallery/right-arrow.svg',
  leftInactive: './images/gallery/left-arrow-inactive.png',
  rightInactive: './images/gallery/right-arrow-inactive.svg',
};

addUniqueId(data);
