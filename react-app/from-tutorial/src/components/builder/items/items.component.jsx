import {React} from 'react';
import {Item} from './item/item.component';

export const Items = ({item_list,add,remove,scoops}) =>{
    const items = Object.keys(item_list);
    console.log(items);
    return(
        <div>
            <ul>
                {items.map(item =>(
                    <Item key ={item} item = {item} add={add} remove = {remove} scoop = {scoops}/>
                ))}
            </ul>
        </div>
    )
};