import { addUniqueId } from '../utils/helpers';

export const brandTitle = 'ANT Robotics';

export const htmlIds = {
  brandId: 'brand-logo',
  productsId: 'products',
  benefitsId: 'benefits',
  galleryId: 'gallery',
  cardListId: 'card-list',
  teamId: 'team',
  contactsId: 'contacts',
};

export const links = [
  {
    htmlId: htmlIds.productsId,
    title: 'Robots',
  },
  {
    htmlId: htmlIds.benefitsId,
    title: 'Benefits',
  },
  {
    htmlId: htmlIds.galleryId,
    title: 'Gallery',
  },
  {
    htmlId: htmlIds.cardListId,
    title: 'Will it work for Me?',
  },
  {
    htmlId: htmlIds.teamId,
    title: 'Team',
  },
  {
    htmlId: htmlIds.contactsId,
    title: 'Contact Us',
  },
];

export const darkMenuIcon = './images/header/menu-icon-dark.svg';
export const lightMenuIcon = './images/header/menu-icon-light.svg';
export const darkCloseIcon = './images/header/dark-close-icon.svg';
export const lightCloseIcon = './images/header/light-close-icon.svg';

addUniqueId(links);
