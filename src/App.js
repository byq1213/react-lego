import './App.less';
// import 'antd/dist/antd.css' // 会有less引入问题
// import 'antd/dist/antd.min.css'
import Index from './Layout/Index'
import {Counter} from './features/counter/Counter'
import Lego from './features/lego/Lego'
function App(props) {
  
  console.log('APP props', props)
  return (
    <>
      {/* <Counter></Counter> */}
      <Index></Index>
      {/* <Lego></Lego> */}
    </>
  );
}

export default App;
