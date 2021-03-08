import { products } from '../../utils/config';

function Test() {
  return (
    <ul className='product-list'>
      {products.map((product) => (
        <li className='product'>
           <h3 className='product__title'>{product.name}</h3>
           <ul className='product__attributes'>
             {Object.entries(product.data).map(([key, value]) => (
               <li className='product__attribute'>
                 <span className='product__attribute-key'>
                   {key}
                 </span>{value}
               </li>
             ))
            }
           </ul>
         </li>
        ))
      }
    </ul>
  );
}

export default Test;