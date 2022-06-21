import {Component} from 'react';
import {Button, Input} from 'antd'
export default class BtnLink extends Component{
    render(){
        return (
            <div>
                <p>this is a BtnLink component</p>
                <Input></Input>
                <Button type='primary' loading={false}>Button</Button>
            </div>
        )
    }
}