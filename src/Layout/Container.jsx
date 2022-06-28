import React, { useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Extender from './components/Extender/index'
import {addComponent, setDragComp, setXYLine} from '../features/lego/legoSlice'
import {useSelector} from 'react-redux'
import { getRelativePosition } from 'utils/dom'

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
    const containerRef = useRef(null)

    const storeLegoState = useSelector(state => state.lego);
    const mouseMoveHandle = (e)=>{
        e.stopPropagation();
        const {clientX ,clientY} = e;
        console.log('e.target', e.target)
        if(clientX == storeLegoState.xLine && clientY == storeLegoState.yLine){

        }else{
        const [x, y ] = getRelativePosition(containerRef.current)
            dispatch(setXYLine({
                x: e.clientX - x,
                y: e.clientY - y
            }))
        }
        
    }
    useEffect(()=>{
        // containerRef.current.addEventListener('mousemove', mouseMoveHandle)
        return ()=>{
        // containerRef.current.removeEventListener('mousemove', mouseMoveHandle)
        }
    })
    const mouseOverHandle = (e)=>{
        console.log('mouse over :>> ', e.clientX, e.clientY);
        
        const [x, y ] = getRelativePosition(containerRef.current)
        console.log('x,y :>> ', x,y);
        dispatch(setXYLine({
            x: e.clientX - x,
            y: e.clientY - y
        }))
        // document.removeEventListener('mouseover', mouseOverHandle)
    }

    const dropHandle = (e)=>{
        // console.log('e.target :>> ', e.target);
        if(storeLegoState.currentDragComponent){
            dispatch(addComponent(storeLegoState.currentDragComponent));
            // document.removeEventListener('mouseover', mouseOverHandle)
            dispatch(setDragComp({
                componentData: null
            }))
        }
    }
    const dragoverHandle = (e)=>{
        // const [x, y ] = getRelativePosition(containerRef.current)
        // console.log('x,y :>> ', x,y);
        // document.addEventListener('mouseover', mouseOverHandle)
        // console.log('e.target :>> ', e.target);
        // console.log('dragover', e.target)
        // console.log('dragover :>> ', e.clientX, e.clientY);
        const [x, y ] = getRelativePosition(containerRef.current)
        dispatch(setXYLine({
            x: e.clientX - x,
            y: e.clientY - y
        }))
        e.preventDefault()
    }
    const xLineStyle = {
      width: storeLegoState.xLine,
      top: storeLegoState.yLine
    }
    const yLineStyle = {
      height: storeLegoState.yLine,
      left: storeLegoState.xLine
    }
    return (
        <div className='container' ref={containerRef} onDrop={dropHandle} onDragOver={dragoverHandle}>
            <div className="line x-line" style={xLineStyle}></div>
            <div className="line y-line" style={yLineStyle}></div>
            {
            storeLegoState.pageConfig.map((v, i)=>{
                // let MyComponent = React.lazy(()=> import('../Components/'+v)) // 每次的变更组件都会重进加载
                let MyComponent = createNewComponent(v.name)
                return (
                    <Extender  data={v}  key={i} index={i} component={MyComponent}>
                    </Extender>
                )
            })
        }</div>
    )
}