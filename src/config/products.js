import { addUniqueId } from '../utils/helpers';

export const title = 'Wide choice of transport robots';

export const data = [
  {
    image: './images/products/product_1-otto.svg',
    title: 'OTTO 100 (pending)',
    specs: {
      'Max payload: ': '220 lbs (100kg)',
      'Size: ': '740 x 550 x 310 mm',
      'Max speed: ': '4.3 mph',
      'Running time: ': '4 hrs or 9 mi',
      'Charging time: ': '1.2hrs (0-80%: 0.75 hrs)',
    },
  },
  {
    image:
      'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
    title: 'Placeholder',
    specs: {
      'Max payload: ': 'Placeholder',
      'Size: ': 'Placeholder',
      'Max speed: ': 'Placeholder',
      'Running time: ': 'Placeholder',
      'Charging time: ': 'Placeholder',
    },
  },
];

export const arrows = {
  left: './images/products/product_carousel-arrow_left.svg',
  right: './images/products/product_carousel-arrow_left.svg',
  leftInactive: './images/gallery/left-arrow-inactive.png',
  rightInactive: './images/gallery/left-arrow-inactive.png',
};

addUniqueId(data);
