import { addUniqueId } from '../utils/helpers';

export const title = 'Customers benefit despite of the automation level';

export const data = [
  {
    image: './images/workplace-images/man-on-pallet-jack.png',
    title: 'Labor-intensive dolly movements',
    text:
      '<b>Challenges</b>: It is more and more <b>difficult to hire workers</b>, because they prefer to work in delivery services for the same money.',
  },
  {
    image: './images/workplace-images/man-on-forklift.png',
    title: 'Forklifts, tuggers managed by man',
    text:
      '<b>Challenges:</b> It is more and more <b>difficult to hire forklift drivers</b>  because they prefer to work in delivery for the same money.',
  },
  {
    image: './images/workplace-images/follow-the-line-robots.png',
    title: 'Follow-the-line robots',
    text:
      '<b>Challenges:</b> It is time-consuming and expensive to replace old robots by state-of-the art, but produced by another vendor.',
  },
  {
    image: './images/workplace-images/autonomous-robots.png',
    title: 'Autonomous mobile robots ',
    text:
      '<b>Challenges</b>: Limited upgrade options within the same vendor robot line only and too expensive to use another vendor robots.',
  },
];

addUniqueId(data);
