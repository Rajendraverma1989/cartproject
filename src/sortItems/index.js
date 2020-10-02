import React from 'react';
import "./styles.scss";
import { connect } from 'react-redux';
import { setCurrentItems } from '../redux/sortItem/sortItem-action';


class SortPorxy extends React.Component {

highToLow = () => {
    let sortArray = [...this.props.items].sort(this.compareHighToLow);
    this.props.setCurrentItems(sortArray);
}
lowTohigh = () => {
    let sortArray = [...this.props.items].sort(this.compareLowTohigh);
    this.props.setCurrentItems(sortArray);
}

discount = () => {
    let sortArray = [...this.props.items].sort(this.compareDiscount);
    this.props.setCurrentItems(sortArray);
}


compareHighToLow = (a, b) => {
    const bandA = a.price;
    const bandB = b.price;
  
    let comparison = 0;
    if (bandA < bandB) {
      comparison = 1;
    } else if (bandA > bandB) {
      comparison = -1;
    }
    return comparison;
  }

  compareLowTohigh = (a, b) => {
    const bandA = a.price;
    const bandB = b.price;
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  compareDiscount = (a, b) => {
    const bandA = a.discount;
    const bandB = b.discount;
  
    let comparison = 0;
    if (bandA < bandB) {
      comparison = 1;
    } else if (bandA > bandB) {
      comparison = -1;
    }
    return comparison;
  }

    render() {
       return(
        <div className={'sortData'}> 
            <p className={'sortBy'}> Sort By:</p>
            <div className={'sortLink'} onClick={this.highToLow} > Price -- High Low </div>
            <div className={'sortLink'} onClick={this.lowTohigh} > Price --  Low High </div>
            <div className={'sortLink'} onClick={this.discount} > Discount</div>
        </div>
    );
    }
}

const mapStateToProps = state => ({
    items:state.sort.sortItem
  });
  const mapDispatchToProps = dispatch => ({
    setCurrentItems: cart => dispatch(setCurrentItems(cart))
})
  
  export const Sort = connect(mapStateToProps, mapDispatchToProps)(SortPorxy);