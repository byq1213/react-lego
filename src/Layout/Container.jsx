import React, {Component} from 'react'
import Loading from './components/Loading'

export default class Container extends Component{
    state = {
        components: new Map() // 缓存已经加载的组件,name来区分
    }
    // 加载新组件或者复用已经加载的
    createNewComponent = (name)=>{
        const {components}= this.state
        if(components.has(name)){
            let MyComponent = components.get( name)
            return MyComponent
        }
        let MyComponent = React.lazy(()=> import('../Components/'+ name +'/index.jsx'))
        components.set(name, MyComponent)
        return MyComponent
    }
     render(){
        return (
            <div className='container'>{
                this.props.pageConfig.map((v, i)=>{
                    // let MyComponent = React.lazy(()=> import('../Components/'+v)) // 每次的变更组件都会重进加载
                    let MyComponent = this.createNewComponent(v)
                    return (
                        <React.Suspense key={i} fallback={<Loading/>}>
                            <MyComponent></MyComponent>
                        </React.Suspense>
                    )
                })
            }</div>
        )
    }
}