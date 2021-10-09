import PropTypes from 'prop-types';

const fixNumber = (num:number) => {
  return Number.parseFloat(num.toString()).toFixed(2)
    
};
export default fixNumber;


