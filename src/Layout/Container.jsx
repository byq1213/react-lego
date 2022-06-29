import React, { useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Extender from './components/Extender/index'
import {addComponent, setContainer, setDragComp, setXYLine ,updateComponentPosition} from '../features/lego/legoSlice'
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
        console.log('container drop')
        // 释放时,方可拿到辅助线坐标,也就是组件相对位置和组件信息
        if(storeLegoState.currentDragComponent){
            if(storeLegoState.dragType === 'add'){
                dispatch(addComponent(storeLegoState.currentDragComponent));
                dispatch(setDragComp({
                    componentData: null,
                    dragType: null
                }))
            }
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
        // 当拖拽是,变更辅助线坐标
        dispatch(setXYLine({
            x: e.clientX - x,
            y: e.clientY - y
        }))
        dispatch(setContainer({
            // ref: containerRef.current,
            positionX: x,
            positionY: y
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
                    <Extender style={{left: v.left + 'px', top: v.top + 'px'}}  data={v}  key={i} index={i} component={MyComponent}
                        
                    >
                    </Extender>
                )
            })
        }</div>
    )
}