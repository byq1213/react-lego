import { createSlice } from "@reduxjs/toolkit";

export const legoSlice = createSlice({
  name: "lego",
  initialState: {
    pageConfig: []
  },
  reducers: {
    changeName: (state, action) => {
    },
    addComponent:(state, action)=>{
      console.log('action', action)
      state.pageConfig.push({name: action.payload.name })
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
    }
  }
});
export const { changeName, addComponent,setShowExt, delComponent} = legoSlice.actions;

export const selectName = (state) => state.name;
export default legoSlice.reducer;
