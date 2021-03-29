import './Banner.css';
import { bannerTitle } from '../../config/banner';
import Button from '../Button/Button';

function Banner({ onClick }) {
  return (
    <section className="banner">
      <div className="banner__content">
        <h2 className="banner__title">{bannerTitle}</h2>
        <Button id="banner" location="banner" onClick={onClick} />
      </div>
    </section>
  );
}

export default Banner;
