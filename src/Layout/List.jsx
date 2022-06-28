import React, {useEffect} from 'react';
// import ImgText from '../Component/ImgText'
import Components from '../Components'
import { useSelector, useDispatch } from 'react-redux'
import {Button, Card} from 'antd'
import {addComponent, setDragComp, setXYLine} from '../features/lego/legoSlice'
import { getRelativePosition } from 'utils/dom';
export default function List (){
    // const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const storeLegoState = useSelector(state => state.lego);
    const onAddCompnent = (v)=>{
        dispatch(addComponent(v))
    }

    const dragStateHandle = ({componentData, index}, e)=>{
        dispatch(setDragComp({componentData}))
        // console.log('componentData :>> ', componentData);
        // console.log('e :>> ', e);
        // e.dataTransfer.setData('index', index)
        // e.dataTransfer.setData('componentData', componentData)

    }
    const dragenterHandle = (e)=>{
        // console.log('e :>> ', e);
        // console.log('dragenterHandle :>> ', getRelativePosition(e.target));
    }
    const dragHandle = (e)=>{
        // console.log('onDrag :>> ', e.clientX);
        // console.log('e.target :>> ', e.target);
    }
    const mousedownHandle = (e) =>{
        e.stopPropagation();

        // console.log('mouseoverHandle :>> ', e);
        console.log('最开始', e.clientX, e.clientY);
        // document.addEventListener('mousemove', mouseMoveHandle)
        // document.addEventListener('mouseup', mouseUpHandle)
    }
    const mouseUpHandle = (e)=>{
        console.log('mouse up')
        e.stopPropagation();
        // console.log('mouseUpHandle :>> ', e.client, e.clientY);
        // document.removeEventListener('mousemove', mouseMoveHandle)
    }
    // const mouseMoveHandle = (e)=>{
    //     e.stopPropagation();
    //     const {clientX ,clientY} = e;
    //     if(clientX == storeLegoState.xLine && clientY == storeLegoState.yLine){

    //     }else{
    //         dispatch(setXYLine({
    //             x: e.clientX,
    //             y: e.clientY
    //         }))
    //     }
        
    // }
    // useEffect(()=>{
    //     document.addEventListener('mousemove', mouseMoveHandle)
    //     return ()=>{
    //     document.removeEventListener('mousemove', mouseMoveHandle)
    //     }
    // })
    return (
        <div className='left-list'>
            <ul className='left-list__main'
            >
                {Components.map((v, i)=>{
                    return <li 
                            draggable
                            key={i}
                            // onDrag={dragHandle}
                            onDragStart={(e)=> dragStateHandle({componentData: v, index: i}, e)}
                            // onDragEnter={dragenterHandle}
                            onMouseDown={mousedownHandle}
                            // onMouseUp={mouseUpHandle}
                            // onMouseMove={mouseMoveHandle}
                            onClick={()=>onAddCompnent(v)}>{v.name}</li>
                })}
            </ul>
        </div>
    )
}