import {Component} from 'react';
// import ImgText from '../Component/ImgText'
import Components from '../Components'
import { useSelector, useDispatch } from 'react-redux'
import { addComponent } from './reducer'
import {Button, Card} from 'antd'
console.log('Components :>> ', Components);

class List extends Component{
    componentList = [
        {
            name: 'img-text',
            img: ''
        }
    ]
    pageConfig = useSelector((state) => state.pageConfig)
     dispatch = useDispatch()
    Add = ()=>{
        this.dispatch(addComponent())
    }
    render(){
        const {componentList, props} = this;
        const {onAddCompnent} = props;
        return (
            <div className='left-list'>
                <Button onClick={this.Add}>Add</Button>
                <ul className='left-list__main'>
                    {Components.map((v, i)=>{
                        return <li key={i} onClick={()=>onAddCompnent(v)}>{v.name}</li>
                    })}
                </ul>
            </div>

        )
    }
}
export default List