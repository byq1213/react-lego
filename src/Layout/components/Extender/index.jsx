import React, { useState } from 'react'
import Loading from '../Loading'
import { useDispatch, useSelector } from 'react-redux'
import { setShowExt, delComponent, setDragComp, updateComponentPosition } from '../../../features/lego/legoSlice'
import './index.less'
import { getRelativePosition } from 'utils/dom'
export default function Extender(props) {
    const name = 'extender';
    const { component: MyComponent, data, index } = props
    const dispatch = useDispatch();
    const storeLegoState = useSelector(state => state.lego);
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    // 组件内点击事件
    const clickHandle = (e) => {
        e.stopPropagation();
        // 显示扩展项,和active class
        dispatch(setShowExt({ index }))
    }
    const delCompHandle = () => {
        dispatch(delComponent({ index }))
    }
    let extClassName = [];
    if (data.showExt) {
        extClassName.push(`${name}__comp--active`)
    }
    const dragHandle = () => {
        // 记录当前拖拽的组件
        dispatch(setDragComp({
            componentData: props.data,
            dragType: 'move'
        }))
        
    }
    const dragendHandle = (e) => {
        console.log('drag end:>> ', offsetX, offsetY );
        dispatch(updateComponentPosition({
            offsetX,
            offsetY
        }))
        dispatch(setDragComp({
            componentData: null,
            dragType: null
        }))
    }
    const dragStartHandle = (e)=>{
        // 需要拿到鼠标在组件中的位置,拿到偏移量
        const {clientX, clientY} = e; // 鼠标在客户端位置
        const {top, left} = props.data; // 组件的在容器的相对位置
        const {positionX: containerX, positionY: containerY} = storeLegoState.container
        setOffsetX(clientX - left - containerX)
        setOffsetY(clientY - top- containerY)
    }
    const mouseDownHandle = (e) =>{
        console.log('mouse down')
        e.stopPropagation();
        const startY = e.clientY
        const startX = e.clientX
        const startTop = props.data.top;
        const startLeft = props.data.left;
        dispatch(setDragComp({
            componentData: props.data,
            dragType: 'move'
        }))
        const move = (moveEvent)=>{
            console.log('mouse move')
            const currX = moveEvent.clientX
            const currY = moveEvent.clientY
            dispatch(updateComponentPosition({
                top:  currY - startY + startTop,
                left: currX - startX + startLeft
            }))
            // 修改当前组件样式
        }

        const up = ()=>{
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', up)
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', up)
    }
    // const {top,left} = props.data;
    // const styleObj = {
    //     left,
    //     top
    // }
    return (
        <div className={`${name}`} style={props.style} onDrag={dragHandle} draggable={false}
        onDragStart={dragStartHandle}
        onDragEnd={dragendHandle}
        onMouseDown={mouseDownHandle}>
            <div onClick={clickHandle} className={extClassName}>
                <React.Suspense fallback={<Loading />}>
                    <MyComponent ></MyComponent>
                </React.Suspense>
            </div>
            <div className={`${name}__btn-group`}>
                {
                    data.showExt && (
                        <div className=''>
                            <button>edit</button>
                            <button onClick={delCompHandle}>del</button>
                        </div>)
                }
            </div>
        </div>
    )
}