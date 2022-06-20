import {Component} from 'react';
import List from './List'
import Container from './Container'
class Index extends Component{

    pageConfig = [];
    onAddCompnent = (component)=>{
        console.log(component)
        console.log('component.name :>> ', component.name);
        this.setState({
            pageConfig: this.pageConfig.push(component.name)
        })
    }
    render(){
        const {onAddCompnent, pageConfig} = this;
        return (
            <div>
                <List  onAddCompnent={onAddCompnent}></List>
                <Container pageConfig={pageConfig}></Container>
            </div>
        )
    }
}
export default Index