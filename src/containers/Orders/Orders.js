import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders:[],
        loading: true
    }

    componentDidMount(){
        axios.get('/orders.json')
            .then(res => {
                const fetchedData = []
                for(let key in res.data){
                    fetchedData.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({
                    loading: false,
                    orders: fetchedData
                })
            }).catch(err => {
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order=>(
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}/>
                ))}
            </div>
        );
    }c
}

export default WithErrorHandler(Orders, axios);