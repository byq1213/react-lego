import './App.less';
// import 'antd/dist/antd.css' // 会有less引入问题
// import 'antd/dist/antd.min.css'
import Index from './Layout/Index'
import {Counter} from './features/counter/Counter'
function App() {
  return (
    <div>
      <Counter></Counter>
      <Index></Index>
    </div>
  );
}

export default App;
