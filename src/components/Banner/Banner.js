import './Banner.css';
import { sectionTitles } from '../../config/section-titles';
import Button from '../Button/Button';

function Banner({ onClick }) {
  return (
    <section className="banner">
      <div className="banner__content">
        <h2 className="banner__title">{sectionTitles.banner}</h2>
        <Button id="banner" location="banner" onClick={onClick} />
      </div>
    </section>
  );
}

export default Banner;
