import {React} from 'react';
import './builder.style.css';
import { Items } from './items/items.component';
import { TotalPrice } from './totalprice/totalPrice.component';
import { Modal } from './modal/modal.component';
export const Builder = ({items,price,add,remove,scoops}) => (
    <div>
        <div className="builder">
            <h3>Buiild your own ice cream.</h3>
            <Items item_list = {items} add= {add} remove = {remove} scoops ={scoops}/>
            <TotalPrice item_price = {price}/>
            {/*total price*/}
            <button type="button" className="order rounded">
                Add to cart
            </button>
        </div>
        <Modal>
            Hello world
        </Modal>
    </div>
)