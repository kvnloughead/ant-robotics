import './Banner.css';
import { sectionTitles } from '../../config/section-titles';
import Button from '../Button/Button';

function Banner() {
  return (
    <section className="banner">
      <h2 className="banner__title">{sectionTitles.banner}</h2>
      <Button label="Click here!" location="banner" />
    </section>
  );
}

export default Banner;
