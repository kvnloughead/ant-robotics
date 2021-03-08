import './Carousel.css';
import Button from '../Button/Button';

function Carousel(props) {
    return(
        <>
            <div className='carousel'>
                <image className='carousel-arrow carousel-arrow_left'></image>
                <div className='carousel-item'>
                    <image className='carousel-item__image' src={products.image}></image>
                    <div className='carousel-item__details'>
                        <h2 className='carousel-item__title'>OTTO 100 (pending) {props.title}</h2>
                        <ul className='carousel-item__specs'>
                            <li className='carousel-item__spec'>
                                <span className='carousel-item__spec-type'>Spec type: </span>Spec value
                            </li>
                            <li className='carousel-item__spec'>
                                <span className='carousel-item__spec-type'>Spec type: </span>Spec value
                            </li>
                            <li className='carousel-item__spec'>
                                <span className='carousel-item__spec-type'>Spec type: </span>Spec value
                            </li>
                            <li className='carousel-item__spec'>
                                <span className='carousel-item__spec-type'>Spec type: </span>Spec value
                            </li>
                            <li className='carousel-item__spec'>
                                <span className='carousel-item__spec-type'>Spec type: </span>Spec value
                            </li>
                            {/* for (const [key, value] of Object.entries(products).map(([key,value], i) =>
                            <li className='carousel-item__spec' card={[key, value]} key={props.cards.indexOf(card)} value={props.cards.indexOf(card)}>
                                <span className='carousel-item__spec-type'>{props.data.key}</span>{props.data.value}
                            </li>)})  { */}
                        </ul>
                        <Button className='carousel-item__button' label={'Get more info'} style={{ background: 'black' }} />
                    </div>
                </div>
                <image className='carousel-arrow carousel-arrow_right'></image>
            </div>
        </>
    );
}

export default Carousel;