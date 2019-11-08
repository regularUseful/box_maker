import React, {Component} from 'react';
import Box from './Box'
import BoxForm from './BoxForm'

class BoxList extends Component{
    constructor(props){
        super(props)
        this.state = {
            boxes: [{height: 100, width: 300, color: "lime"}]
        }
        this.create = this.create.bind(this)
    }

    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    render(){
        let boxes = this.state.boxes.map(i=> {
            return <Box height={i.height} width={i.width} color={i.color} />
        })
        return(
            <div>
                <BoxForm createBox={this.create} />
                {boxes}
            </div>
        );
    }
}

export default BoxList;