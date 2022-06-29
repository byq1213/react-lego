import {
  createSlice
} from "@reduxjs/toolkit";

export const legoSlice = createSlice({
  name: "lego",
  initialState: {
    pageConfig: [],
    currentDragComponent: null, // 当前拖动的组件
    dragType: 'add', // 当前拖拽类型,是新增还是移动

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
    changeName: (state, action) => {},
    addComponent: (state, action) => {
      console.log('action', action)
      state.pageConfig.push({
        name: action.payload.name,
        top: state.yLine,
        left: state.xLine,
        index: state.pageConfig.length
      })
      // this.setShowExt()
    },
    setShowExt: (state, action) => {
      console.log('action', action)
      // 只允许一个组件显示扩展项
      state.pageConfig.forEach((v, i) => {
        v.showExt = false;
        if (action.payload.index == i) {
          v.showExt = true
        }
      })
    },
    delComponent: (state, action) => {
      console.log('action', action)
      state.pageConfig.splice(action.payload.index, 1)
    },
    setDragComp: (state, action) => {
      state.currentDragComponent = action.payload.componentData
      state.dragType = action.payload.dragType
    },
    setXYLine: (state, action) => {
      state.xLine = action.payload.x
      state.yLine = action.payload.y
    },
    setContainer(state, action) {
      state.container = action.payload
    },
    updateComponentPosition(state, action) {
      if (state.currentDragComponent) {
        if (state.dragType === 'move') {
          const {top, left} = action.payload
          // const {offsetX, offsetY} = action.payload; // 鼠标在在组件的偏移量,拖动时的初始位置
          // state.currentDragComponent.top = state.yLine
          // state.currentDragComponent.left = state.xLine
          state.pageConfig[state.currentDragComponent.index].top = top|| state.yLine
          state.pageConfig[state.currentDragComponent.index].left = left || state.xLine
        }
        setDragComp({
          componentData: null,
          dragType: null
        })
      }
    }
  }
});
// console.log('legoSlice.actions', legoSlice.actions)
export const {
  changeName,
  addComponent,
  setShowExt,
  delComponent,
  setDragComp,
  setXYLine,
  setContainer,
  updateComponentPosition
} = legoSlice.actions;

export const selectName = (state) => state.name;
export default legoSlice.reducer;