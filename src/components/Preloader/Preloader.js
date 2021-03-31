import './Preloader.css';
import '../Gallery/Gallery.css';

function Preloader({ isLoading }) {
  return (
    <div className={`preloader ${isLoading ? 'preloader_visible' : ''}`}>
      <div className="preloader__orbit">
        <div className="preloader__planet" />
      </div>
    </div>
  );
}

export default Preloader;
