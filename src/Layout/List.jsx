import React, {Component} from 'react';
// import ImgText from '../Component/ImgText'
import Components from '../Components'
import { useSelector, useDispatch,connect } from 'react-redux'
import { addComponent } from './reducer'
import {Button, Card} from 'antd'
import legoSlice, {selectName, changeName} from '../features/lego/legoSlice'
// const dispatch = useDispatch();
class List extends Component{
    componentList = [
        {
            name: 'img-text',
            img: ''
        }
    ]
    // pageConfig = useSelector((state) => state.pageConfig)
    add = ()=>{
        this.props.dispatch(addComponent())
    }

    render(){
        const {componentList, props} = this;
        const {onAddCompnent, dispatch} = props;
        console.log('this :>> ', this);
        return (
            <div className='left-list'>
                <input type="text" onChange={(e)=> dispatch(changeName({newName: e.target.value}))} />
                <ul className='left-list__main'>
                    {Components.map((v, i)=>{
                        return <li key={i} onClick={()=>onAddCompnent(v)}>{v.name}</li>
                    })}
                </ul>
            </div>

        )
    }
}
export default connect(selectName)(List)