import React from 'react';
import "./styles.scss";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Button from '../button';
import { setCurrentItems } from '../redux/sortItem/sortItem-action';
import { connect } from 'react-redux';
import data from '../shopping/data.json';


class FilterPorxy extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          value: {
            min: 500,
            max: 10000
          }
        };
      }
      onClick= () => {        
        let newdata = data.items.filter(item => (item.price > this.state.value.min && item.price <= this.state.value.max))
        this.props.setCurrentItems(newdata);
      }

    render() {

      return(
       <div className='filter'>         
         <InputRange
          draggableTrack
          maxValue={10000}
          minValue={500}
          formatLabel={value => `₹${value}`}
          value={this.state.value}
          onChange={value => this.setState({ value: value })}/>
          <p className={'pricetext'}> Price</p>
          <div className={'buttonIcon'}>
           <Button
            text={'Apply'}
            class={'filterButton'}
            onClick={this.onClick}
            />
           </div>      
        </div> 
);
    }
}

const mapStateToProps = state => ({
  items: state.sort.sortItem
  });
  const mapDispatchToProps = dispatch => ({
    setCurrentItems: cart => dispatch(setCurrentItems(cart))
})
  
  export const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterPorxy);