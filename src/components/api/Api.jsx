import React, { Component } from 'react'
import axios from 'axios'
import './Api.css'
import Modal from 'react-modal';
export default class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            data: [],
            isActive:false,
            menu_items:null
        };
        }
        

    componentDidMount() {
    this._isMounted = true;
    Modal.setAppElement('body');
    axios.get(`https://jsonblob.com/api/4e6e6a57-eb72-11eb-9eff-b5f91494da60`)
    .then(dataa =>{
        console.log(dataa.data.categorys)
        this.setState({
            data : dataa.data.categorys
        })
    })
    .catch(err=>console.log(err))
    }  
    
    toggleModal=(category,menu_items,i)=>{
        // console.log(menu_items['sub-items'])
        this.setState({
            isActive:!this.state.isActive,
            menu_items:menu_items,
            id:i
            
        })
        // console.log(category,menu_items,i)
    }

    RenderModalData=()=>{
        if(this.state.menu_items!=null){
        console.log(this.state.menu_items['sub-items'])
        if(this.state.menu_items!=null){
            return this.state.menu_items['sub-items'].map((item,i)=>{
                    // alert('Clicked')
                    console.log(item)
                    return(
                        <div key={i}>
                            
                        Item Name: {item.name}<br/>
                        Description: {item.description}<br/>
                        Category Name: {item.category_name}<br/>
                        Cuisine Name: {item.cuisine_name}<br/>
                        Discount: {item.discount.amount}<br/>
                        Price: {item.price}<br/>
                        <button onClick={this.toggleModal}>Close</button>
                        </div>
                    )
                }
            )
        }   
    }
}
 

    render(){
        return(
            <>
            {
                this.state.data.map((category,i)=>
                <div key={i}>
                    {category.name} 
                    {/* Appeteaser */}
                    <div className="subItems">
                        
                        {category['menu-items'].map((menu_items,i)=>

                        <p key={i} onClick={this.toggleModal.bind(this,category,menu_items,i)}>
                        {menu_items.name}
                        {/* Chicken */}
                        </p>
                        )}
                    </div>
                </div>
                )
            }
            
        <Modal
        isOpen={this.state.isActive}
        onRequestClose={this.toggleModal}
        >
            {this.RenderModalData()}
  
        </Modal>
    </>
    )}

    }
