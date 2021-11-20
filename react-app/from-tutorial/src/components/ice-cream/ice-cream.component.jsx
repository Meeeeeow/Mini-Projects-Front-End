import {React} from 'react';
import './ice-cream.styles.css';
import {Scoop} from './scoop/scoop.component';
import cherry from '../../images/cherry.png';

export const IceCream = ({scoops}) => {
    console.log(scoops);
    return(
        <div>
       
        <div className="ice-cream">
            <p className="cone">
                {/*add scoop */}
            </p>
            {scoops.map(scoop =>(
                <Scoop key={`${scoop} ${Math.random()}`} scoop_flavor = {scoop}/>
            ))}
            {/*scoop component*/}

            <img src={cherry} alt="cherry" className="cherry"></img>

        </div>
    </div>
    )
};