import './Carousel.css';
import Button from '../Button/Button';

function Carousel(props) {
    return(
        <>
            <ul className='carousel'>
                <image className='carousel-arrow carousel-arrow_left'></image>
                {props.products.map((product) => (
                    <li className='carousel-item'>
                        <image className='carousel-item__image' src={product.image}></image>
                        <div className='carousel-item__details'>
                            <h3 className='carousel-item__title'>{product.title}</h3>
                            <ul className='carousel-item__specs'>
                            {Object.entries(product.data).map(([key,value]) => (
                                <li className='carousel-item__spec'>
                                    <span className='carousel-item__spec-type'>{key}</span>{value}
                                </li>
                            ))}
                            </ul>
                            <Button className='carousel-item__button' label={'Get more info'} style={{ background: 'black' }} />
                        </div>
                    </li>
                ))}
                <image className='carousel-arrow carousel-arrow_right'></image>
            </ul>
        </>
    );
}

export default Carousel;