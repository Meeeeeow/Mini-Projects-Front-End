import React,{Component, isValidElement} from 'react';
import { IceCream } from '../../components/ice-cream/ice-cream.component';
import { Builder } from '../../components/builder/builder.component';
class IceCreamBuilder extends Component{
    constructor(){
        super();

        this.state={
            items:{},
            scoops:[],
            totalPrice:0
        }
    }

    addScoops =  scoop =>{
        const {scoops , items} = this.state;
        const ongoing_scoops = [...scoops];
        ongoing_scoops.push(scoop);
        console.log(` add ${items[scoop]}`);
        this.setState((prevState)=>{
            return{
                scoops:ongoing_scoops,
                totalPrice:prevState.totalPrice + items[scoop]
                
            }
        })
    }

    removeScoops =  scoop =>{
        const {scoops , items} = this.state;
        const ongoing_scoops = [...scoops];
        console.log(` remove ${items[scoop]}`);
        
        const scoopIndex = ongoing_scoops.findIndex(sc => sc === scoop)
        console.log(`this is ${scoopIndex}`)
        if (scoopIndex > -1){
            ongoing_scoops.splice(scoopIndex,1);
            this.setState((prevState)=>{
                return{
                    scoops:ongoing_scoops,
                    totalPrice:prevState.totalPrice - items[scoop]
                    
                }
            })
        }else if(ongoing_scoops.length === 0)
            alert(`Please add what flaovrs you want first.`);
        else
            alert(`${scoop} is alreay removed from your wishlist.`);
        
    }
    componentDidMount(){
        fetch('https://ice-cream-react-47be1-default-rtdb.firebaseio.com/items.json').then(response => response.json()).then(
            resData => this.setState({items:resData})
        );
    }
    componentDidUpdate(){
        console.log('updated');
    }
    render(){
        const {items,totalPrice,scoops} = this.state;
        return(
            <div className="container ice-cream-container">
                <IceCream scoops = {scoops}/>
                <Builder items={items} price = {totalPrice} add={this.addScoops} remove = {this.removeScoops} scoops ={scoops}/>
            </div>
        )
    }
}
export default IceCreamBuilder;