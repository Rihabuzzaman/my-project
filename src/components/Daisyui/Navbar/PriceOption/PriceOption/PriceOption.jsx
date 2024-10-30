import PropTypes from 'prop-types';
import Features from '../../../../Features/Features';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 rounded-md text-white'>
            <h2 className='text-center'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center'>{name}</h4>
           <div>
           {
                features.map((feature,index)=><Features key={index} feature={feature}></Features>
                )
            }
           </div>
           <button className='mt-12 bg-green-600 w-full py-2 hover:bg-green-900 '>Buy Now</button>
        </div>
        
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;
