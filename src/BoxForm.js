import React, {Component} from 'react';


class BoxForm extends Component{
    constructor(props){
        super(props)
        this.state = {
           height: "",
           width: "",
           color: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
        console.log(this.state[evt.target.name])
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createBox(this.state);
        this.setState({
            height: "",
            width: "",
            color: ""
        })
    }

    render(){
      
        return(
           <form onSubmit={this.handleSubmit}>
               <label htmlFor="height">Height</label>
               <input type="text" onChange={this.handleChange} name="height" value={this.state.height} id="height">
               </input>
               <label htmlFor="width">Width</label>
               <input type="text" onChange={this.handleChange} name="width" value={this.state.width} id="width">
               </input>
               <label htmlFor="color">Color</label>
               <input type="text" onChange={this.handleChange} name="color" value={this.state.color} id="color">
               </input>
               <button type="submit">Create Box</button>
           </form>
        );
    }
}

export default BoxForm;