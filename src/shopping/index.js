import React from 'react';
import "./styles.scss";
import { ShoppingList } from '../shopping_list';
import { Filter } from '../filter';

class Shopping extends React.Component {


    render() {
return(
       <div className='container'>
       <Filter/>
       <div className="seperator"></div>
       <ShoppingList/>
       </div> 
);
    }
}
export default Shopping;