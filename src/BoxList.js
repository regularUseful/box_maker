import React, {Component} from 'react';
import Box from './Box';
import BoxForm from './BoxForm';


class BoxList extends Component{
    constructor(props){
        super(props)
        this.state = {
            boxes: []
        }
        this.create = this.create.bind(this)
    }

    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    remove(id){
        this.setState({
            boxes: this.state.boxes.filter((i)=> i.id !== id)
        })
    }

    render(){
        let boxes = this.state.boxes.map(i=> {
            return <Box className="single-box" key={i.id} id={i.id}height={i.height} width={i.width} color={i.color} removeBox={()=>this.remove(i.id)}/>
        })
        return(
            <div className="everything-container">
                <h1>Useless Box Maker!</h1>
                <BoxForm createBox={this.create} />
                {boxes}
            </div>
        );
    }
}

export default BoxList;