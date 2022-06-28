import { createSlice } from "@reduxjs/toolkit";

export const legoSlice = createSlice({
  name: "lego",
  initialState: {
    pageConfig: [],
    currentDragComponent: null, // 当前拖动的组件

    xLine: 0,
    yLine: 0, // xy辅助线

    // 容器信息
    container: {
      ref: null,
      positionX: 0,
      positionY: 0
    },
  },
  reducers: {
    changeName: (state, action) => {
    },
    addComponent:(state, action)=>{
      console.log('action', action)
      state.pageConfig.push({name: action.payload.name, top: state.yLine, left: state.xLine})
      // this.setShowExt()
    },
    setShowExt: (state,action)=>{
      console.log('action', action)
      // 只允许一个组件显示扩展项
      state.pageConfig.forEach((v, i)=>{
        v.showExt = false;
        if(action.payload.index == i){
          v.showExt = true
        }
      })
    },
    delComponent:(state, action)=>{
      console.log('action', action)
      state.pageConfig.splice(action.payload.index, 1)
    },
    setDragComp:( state, action)=>{
      state.currentDragComponent = action.payload.componentData
    },
    setXYLine: (state, action)=>{
      state.xLine = action.payload.x
      state.yLine = action.payload.y
    },
    setContainer(state, action){
      state.container = action.payload
    }
  }
});
// console.log('legoSlice.actions', legoSlice.actions)
export const { changeName, addComponent,setShowExt, delComponent, setDragComp, setXYLine,setContainer} = legoSlice.actions;

export const selectName = (state) => state.name;
export default legoSlice.reducer;
