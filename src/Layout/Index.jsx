import {Component} from 'react';
import List from './List'
import Container from './Container'
import './index.less'
import {Layout} from 'antd'
class Index extends Component{
    pageConfig = ['ImgText', 'BtnLink'];
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
            <Layout className='main'>
                <List  onAddCompnent={onAddCompnent}></List>
                <Container pageConfig={pageConfig}></Container>
            </Layout>
        )
    }
}
export default Index