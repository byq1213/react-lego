import {Component} from 'react';
export default class ImgText extends Component{
    state = {
        text: '123'
    }
    changeValue = (e)=>{
        console.log('e :>> ', e);
        const {name, value} = e.target
        this.setState(()=>{
            return {
                [name]: value
            }
        })
        console.log(this.state)
    }
    render(){
        const {text} = this.state;
        return (
            <div>
                <p>this is a img-text component</p>
                <p>text: {this.state.text}</p>
                <input type="text" name="text" value={text} onChange={this.changeValue}/>
            </div>
        )
    }
}