import React from 'react';
import "./styles.scss";
import { connect } from 'react-redux';
import { setCurrentCart,removeFromCart, decreaseItem} from '../redux/cartItem/cartItem-action';  



class ShoppingCartPorxy extends React.Component {
  constructor() {
    super()
    this.state = {
      cartItem: {},
      total: 0,
      totalPrice: 0
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
  
    if ( prevState.cartItem !== nextProps.cartItem || prevState.total !== nextProps.total ) {
      return {
        cartItem: nextProps.cartItem,
        total: nextProps.total
      };
    }
    return null;
  }

    increaseItem= (id) => {
                  this.props.setCurrentCart({id:id});
                  this.forceUpdate();
                }


    decreaseItem= (id) => {
          this.props.decreaseItem({id:id}); 
          this.forceUpdate();
        }

    removeFromCart= (id) => {
          this.props.removeFromCart({id:id}); 
          this.forceUpdate();
        }

    calDiscount = (item)=>{
          var numVal1 = Number(item.price);      
          var numVal2 = Number(item.discount) / 100 || 0;
          var totalValue = numVal1 - (numVal1 * numVal2)
          return totalValue.toFixed(2);
        }

        totalPrice = ()=>{
         const total =  this.props.cartItem && this.props.cartItem.map(item => item.price* item.quantity).reduce((prev, next) => prev + next);         
        return  total.toFixed(2); 
        }


    render() {

      return(
        this.state.cartItem && this.state.cartItem.length ? <div className={'showCart'}>
             <div className={'listItems'}>
               {
                    this.state.cartItem && this.state.cartItem.map( (item, i) => {                
                          return <div key={i} className='list'>
                                    <img src={require(`../assets/${item.name}.png`)} height={100} width={100} alt='abc'></img>
                                    <div>
                                        <div className={'name'}> {item.diplayName}</div>
                                        <div className={'priceList'}> 
                                        <div className={'disPrice'}>{this.calDiscount(item)}</div>
                                        <div className={'actualPrice'}>{item.price }</div>
                                        <div className={'discount'}>{item.discount || 0}%off</div>
                                        </div>
                                    </div>
                                    <div className={'countAction'}>
                                        <div className={'action'} onClick={()=>{this.decreaseItem(item.id)}}> - </div>
                                        <div className={'count'} > {item.quantity} </div>
                                        <div className={'action'} onClick={()=>{this.increaseItem(item.id)}}  > + </div>
                                    </div>
                                    <div className={'removeItem'} onClick={()=>{this.removeFromCart(item.id)}} > Remove </div>
                                </div>        
                      })
                  }
                </div>
                  <div className={'totalPayable'}>
                    <div className={'priceDetail'}>PRICE DETAILS</div>
                    <hr/>
                    <div>
                          <div className={'price'} >
                              <div className={'showPrice'}>Price</div>
                              <div className={'showPricedata'}>:</div>
                <div className={'showPricedata'}>₹ {this.totalPrice()}</div>
                          </div>
                          <div className={'discount'} >
                          <div className={'showPrice'}>Discount</div>
                              <div className={'showPricedata'}>:</div>
                              <div className={'showPricedata'}>₹ { this.totalPrice() - this.state.total }</div>
                          </div>
                    </div>
                    <hr/>
                    <div className={'totalPayableAmount'}>
                      <div>
                            Total Payable
                      </div>
                      <div>
                      ₹ {this.state.total}
                      </div>
                    </div>
                  </div>

           </div>
           :
           <div className={'caertEmpty'}>
            <h2>YOU DO NOT HAVE ANY RECORDS  </h2>
            </div>
       );
    }
}


const mapStateToProps = state => ({
    items: state.sort.sortItem,
    cartItem: state.cartItem.addedItems,
    total:state.cartItem.total
  });
  const mapDispatchToProps = dispatch => ({
    setCurrentCart: add => dispatch(setCurrentCart(add)),
    decreaseItem: sub => dispatch(decreaseItem(sub)),
    removeFromCart: remove => dispatch(removeFromCart(remove))
})
  
  export const ShoppingCart = connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPorxy);