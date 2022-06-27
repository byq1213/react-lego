import React, {Component} from 'react';
// import ImgText from '../Component/ImgText'
import Components from '../Components'
import { useSelector, useDispatch,connect } from 'react-redux'
import {Button, Card} from 'antd'
import {addComponent, setDragComp} from '../features/lego/legoSlice'
export default function List (){
    // const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const storeLegoState = useSelector(state => state.lego);
    const onAddCompnent = (v)=>{
        console.log('storeLegoState :>> ', storeLegoState);
        dispatch(addComponent(v))
    }
    const dragStateHandle = ({componentData, index}, e)=>{
        dispatch(setDragComp({componentData}))
        // console.log('componentData :>> ', componentData);
        // console.log('e :>> ', e);
        // e.dataTransfer.setData('index', index)
        // e.dataTransfer.setData('componentData', componentData)

    }
    return (
        <div className='left-list'>
            <ul className='left-list__main'
            >
                {Components.map((v, i)=>{
                    return <li 
                            draggable
                            key={i}
                            onDragStart={(e)=> dragStateHandle({componentData: v, index: i}, e)}
                            onClick={()=>onAddCompnent(v)}>{v.name}</li>
                })}
            </ul>
        </div>
    )
}