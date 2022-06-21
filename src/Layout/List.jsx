import {Component} from 'react';
// import ImgText from '../Component/ImgText'
import Components from '../Components'
console.log('Components :>> ', Components);
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
                {Components.map((v, i)=>{
                    return <li key={i} onClick={()=>onAddCompnent(v)}>{v.name}</li>
                })}
            </ul>
        )
    }
}
export default List