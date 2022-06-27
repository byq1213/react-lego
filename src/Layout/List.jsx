import React, {Component} from 'react';
// import ImgText from '../Component/ImgText'
import Components from '../Components'
import { useSelector, useDispatch,connect } from 'react-redux'
import {Button, Card} from 'antd'
import {addComponent} from '../features/lego/legoSlice'
export default function List (){
    // const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const storeLegoState = useSelector(state => state.lego);
    const onAddCompnent = (v)=>{
        console.log('storeLegoState :>> ', storeLegoState);
        dispatch(addComponent(v))
    }
    return (
        <div className='left-list'>
            <input type="text"  />
            <ul className='left-list__main'>
                {Components.map((v, i)=>{
                    return <li key={i} onClick={()=>onAddCompnent(v)}>{v.name}</li>
                })}
            </ul>
        </div>
    )
}