import './Footer.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Contact from '../Contact/Contact';
import { contacts, copyright, title, address } from '../../utils/config';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">{title}</h2>
      <div className="footer__columns">
        <ul className="footer__contacts">
          {contacts.map((contact) => (
            <Contact contact={contact} key={JSON.stringify(contact)} />
          ))}
        </ul>
        <MapContainer
          className="footer__map"
          center={[37.74084040153697, -122.2010889161262]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[37.74084040153697, -122.2010889161262]}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      </div>
      <p className="footer__copyright">{copyright}</p>
    </footer>
  );
}

export default Footer;
