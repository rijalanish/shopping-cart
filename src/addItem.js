import React, { Component } from 'react';


export class AddItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quantity: '',
        productId: ''
      };
  
    }
  
    handleChange = (event) => {
      this.setState({quantity: Number(event.target.value)});
    }
  
    handleSelect = (event) => {
      this.setState({productId: Number(event.target.value)});
    }
  
    submit = (e) => {
        const {quantity, productId} = this.state;
        this.props.handleSubmit(quantity, productId);
        e.preventDefault(); 
        const form = document.getElementsByClassName("form-control");
        this.setState({productId: '',  quantity: ''});
        form[0].value = '';
        form[1].value = 'Select an option';
    }

    render() {

        const {productOptions} = this.props;
        const options = productOptions.map((product) => {
            return <option key={product.id} value={product.id}>{product.name}</option>
        })
        const disable = (this.state.productId && this.state.quantity) ? false : true
    
        return (
            <form className='container' id="myForm" onSubmit={this.submit}>
                <div className="form-group">
                <label for="quantity">Quantity</label>
                <input type="number" className="form-control" onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                <label for="Products">Products</label>
                <select className="form-control" onChange={this.handleSelect}>
                    <option selected disabled>Select an option </option>
                    {options}
                </select>
                </div>
                <button type="submit" className="btn btn-primary" disabled={disable}>Submit</button>
            </form>
            );
    
    }
  }
