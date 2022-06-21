import React from 'react'
import Loading from './Loading'

export default class Extender extends React.Component{
    state = {
        isShowExtender: false
    }
    render(){
        const {component: MyComponent} = this.props
        const {isShowExtender} = this.state
        return (
            <div>
                <div onClick={()=> this.setState({isShowExtender: true})}>
                    <React.Suspense fallback={<Loading/>}>
                        <MyComponent ></MyComponent>
                    </React.Suspense>
                </div>
                
                {
                    isShowExtender && (
                        <div className='extender'>
                            this is extender
                        </div>)
                }
            </div>
        )
    }
}