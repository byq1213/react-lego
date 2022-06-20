import {Component} from 'react'
export default class Container extends Component{
     render(){
        console.log('container render', this.props.pageConfig)
        return (
            <div>{
                this.props.pageConfig.map(v=>{
                    return <div>
                        {
                            import('../Component/img-text').then(res=>{
                                    console.log(res);
                            })
                        }
                    </div>
                })
            }</div>
        )
    }
}