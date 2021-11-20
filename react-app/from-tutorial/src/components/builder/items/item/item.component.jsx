import {React} from 'react';
import './item.styles.css';
import {countBy} from 'lodash';

export const Item = ({item,add,remove,scoop = {}}) =>{
    const scoopCount = countBy(scoop);
    return(
        <li className="item">
            <span>{item}</span>
            {scoopCount[item] >= 0 ? <span className="quantity">
                {scoopCount[item]}
            </span> : null}
            <div className="right">
                <button onClick ={()=> add(item)} className="plus rounded" type="button">
                    +
                </button>
                <button onClick ={()=> remove(item)} className="minus rounded" type="button">
                    -
                </button>
            </div>
        </li>
    )
};
