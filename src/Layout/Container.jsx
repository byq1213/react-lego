import React, {Component} from 'react'
import Loading from './components/Loading'
import Extender from './components/Extender/index'
import legoSlice, {selectName, changeName} from '../features/lego/legoSlice'
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

    const storeLegoState = useSelector(state => state.lego);
    console.log('container render')
    return (
        <div className='container'>{
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