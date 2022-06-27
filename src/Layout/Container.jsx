import React, {Component} from 'react'
import {useDispatch} from 'react-redux'
import Extender from './components/Extender/index'
import {addComponent, setDragComp} from '../features/lego/legoSlice'
import {useSelector} from 'react-redux'

let components = new Map()
let createNewComponent = (name)=>{
    if(components.has(name)){
        let MyComponent = components.get( name)
        return MyComponent
    }
    let MyComponent = React.lazy(()=> import('../Components/'+ name +'/index.jsx'))
    components.set(name, MyComponent)
    return MyComponent
}
export default function Container(){
    const dispatch = useDispatch();
    const storeLegoState = useSelector(state => state.lego);
    const dropHandle = (e)=>{
        if(storeLegoState.currentDragComponent){
            dispatch(addComponent(storeLegoState.currentDragComponent));
            dispatch(setDragComp({
                componentData: null
            }))
        }
        // console.log('container drop')
        // e.preventDefault();
        // e.stopPropagation();
        // const componentIndex = e.dataTransfer.getData('index');
        // const componentData = e.dataTransfer.getData('componentData');
        // console.log('componentData :>> ', componentData);
        // console.log('componentIndex :>> ', componentIndex);
        // dispatch(addComponent(componentData))
    }
    const dragoverHandle = (e)=>{
        e.preventDefault()
        console.log('drag over')
    }
    return (
        <div className='container' onDrop={dropHandle} onDragOver={dragoverHandle}>{
            storeLegoState.pageConfig.map((v, i)=>{
                // let MyComponent = React.lazy(()=> import('../Components/'+v)) // 每次的变更组件都会重进加载
                let MyComponent = createNewComponent(v.name)
                return (
                    <Extender data={v}  key={i} index={i} component={MyComponent}>
                    </Extender>
                )
            })
        }</div>
    )
}