import './App.css';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import Gallery from '../Gallery/Gallery';
import { products } from '../../utils/config';
import { galleryItems } from '../../config/gallery';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Section type="products" layout="vertical" title="Wide choice of transport robots">
        <Carousel products={products} />
      </Section>
      <Section type="gallery" layout="horizontal" title="Gallery">
        <Gallery products={galleryItems} />
      </Section>
      <Footer />
    </>
  );
}

export default App;
