import React from 'react'
import Loading from '../Loading'
import {useDispatch} from 'react-redux'
import {setShowExt, delComponent} from '../../../features/lego/legoSlice'
import './index.less'
export default function Extender(props){
    const name = 'extender';
    const {component: MyComponent, data, index} = props
    const dispatch = useDispatch();
    // 组件内点击事件
    const clickHandle = ()=>{
        // 显示扩展项,和active class
        dispatch(setShowExt({index}))
    }
    const delCompHandle = ()=>{
        dispatch(delComponent({index}))
    }
    let extClassName = [];
    if(data.showExt){
        extClassName.push(`${name}__comp--active`)
    }
    const dragHandle = ()=>{
    }
    const dragendHandle = (e)=>{
        console.log('e :>> ', e);
    }
    const {top,left} = props.data;
    const styleObj = {
        left,
        top
    }
    return (
        
        <div className={`${name}`} style={styleObj} onDrag={dragHandle} draggable onDragEnd={dragendHandle}>
            <div onClick={clickHandle} className={extClassName}>
                <React.Suspense fallback={<Loading/>}>
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