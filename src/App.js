import './App.less';
// import 'antd/dist/antd.css' // 会有less引入问题
// import 'antd/dist/antd.min.css'
import Index from './Layout/Index'
import {Counter} from './features/counter/Counter'
import Lego from './features/lego/Lego'
function App() {
  return (
    <div>
      <Counter></Counter>
      {/* <Index></Index> */}
      this is lego: 
      <Lego></Lego>
    </div>
  );
}

export default App;
