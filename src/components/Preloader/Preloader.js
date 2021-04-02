import './Preloader.css';
import '../Gallery/Gallery.css';

function Preloader({ isLoading, location }) {
  return (
    <div className={`preloader ${isLoading ? 'preloader_visible' : ''} preloader_location_${location}`}>
      <div className="preloader__orbit">
        <div className="preloader__planet" />
      </div>
    </div>
  );
}

export default Preloader;
