// 获取元素绝对位置
// 获取距离上方
export const getElementLeft = (ele) =>{
    // 获取相对位置
    let relativeLeft = ele.offsetLeft;
    let parentEle = ele.offsetParent; // 父组件
    while(parentEle != null){
        relativeLeft += parentEle.offsetLeft;
        parentEle = parentEle.offsetParent
    }
    return relativeLeft;
}
export const getElementTop = (ele) =>{
    // 获取相对位置
    let relativeTop = ele.offsetTop;
    let parentEle = ele.offsetParent; // 父组件
    while(parentEle != null){
        relativeTop += parentEle.offsetTop;
        parentEle = parentEle.offsetParent
    }
    return relativeTop;
}
export const getRelativePosition = (ele = this) =>{
    return [
        getElementLeft(ele),
        getElementTop(ele)
    ]
}
Document.prototype.getRelativePosition = getRelativePosition;