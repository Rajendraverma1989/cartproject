import React from 'react';
import "./styles.scss";
import data from '../shopping/data.json';
import { connect } from 'react-redux';
import { setCurrentCart } from '../redux/cartItem/cartItem-action';
import { setCurrentItems } from '../redux/sortItem/sortItem-action'
import {Sort} from '../sortItems'
import Button from '../button';


class ShoppingListPorxy extends React.Component {

constructor(){
    super()
    this.state = {
        items: []
    }
}
componentDidMount() {
  this.props.setCurrentItems(data.items);
  }


  calDiscount = (item)=>{
    var numVal1 = Number(item.price);

    var numVal2 = Number(item.discount) / 100 || 0;
  
    var totalValue = numVal1 - (numVal1 * numVal2)
    return totalValue.toFixed(2);
  }


  handleClick= (id) => {     
    let cart = this.props.cartItem || {};
    let allItems = this.props.items;
    let addedItem =  allItems.find(item=> item.id === id);
    const disPrice = this.calDiscount(addedItem);
    addedItem['discountPrice'] = Number(disPrice);
    this.props.setCurrentCart({...addedItem});
    this.forceUpdate();
    }
  


    render() {
       return(
        this.props.items &&  this.props.items.length? <div className='cartlist'>
                  <Sort/>
                    {
                    
                      this.props.items && this.props.items.map( (item, i) => {                
                            return <div key={i} className='list'>
                                      <img src={require(`../assets/${item.name}.png`)} height={200} width={200}></img>
                                      <div className={'name'}> {item.diplayName}</div>
                                      <div className={'priceList'}> 
                                        <div className={'disPrice'}>{this.calDiscount(item)}</div>
                                        <div className={'actualPrice'}>{item.price}</div>
                                        <div className={'discount'}>{item.discount || 0}%off</div>
                                      </div>
                                      <div className={'listButtons'}>
                                          <Button
                                            text={'Add To Cart'}
                                            class={'listButton'}
                                            onClick={()=>{this.handleClick(item.id)}}                       
                                            />
                                      </div>
                                  </div>        
                        })
                    }               
            </div>:
            <div className={'emptyText'}>
            <h2>YOU DO NOT HAVE ANY RECORDS  </h2>
            </div>
    );
    }
}


const mapStateToProps = state => ({
    items: state.sort.sortItem,
    cartItem: state.cartItem.cartItem,
  });
  const mapDispatchToProps = dispatch => ({
    setCurrentCart: cart => dispatch(setCurrentCart(cart)),
    setCurrentItems: sort => dispatch(setCurrentItems(sort))
})
  
  export const ShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingListPorxy);