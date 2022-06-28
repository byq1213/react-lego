import './App.less';
// import 'antd/dist/antd.css' // 会有less引入问题
// import 'antd/dist/antd.min.css'
import Index from './Layout/Index'
import {useSelector, useDispatch} from 'react-redux'
function App(props) {

  return (
    <div className='app'>
      {/* <Counter></Counter> */}
      <Index></Index>
      {/* <Lego></Lego> */}

    </div>
  );
}

export default App;
