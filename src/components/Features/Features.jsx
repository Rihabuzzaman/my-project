import PropTypes from 'prop-types';

const Features = ({ feature }) => {
    return (
        <div>
            <p>{feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string.isRequired
};

export default Features;
