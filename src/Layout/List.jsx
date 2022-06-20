import {Component} from 'react';
import ImgText from '../Component/img-text'
class List extends Component{
    componentList = [
        {
            name: 'img-text',
            img: ''
        }
    ]
    render(){
        const {componentList, props} = this;
        const {onAddCompnent} = props;
        return (
            <ul>
                {componentList.map((v, i)=>{
                    return <li key={i} onClick={()=>onAddCompnent(ImgText)}>{v.name}</li>
                })}
            </ul>
        )
    }
}
export default List