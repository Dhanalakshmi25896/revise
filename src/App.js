import logo from './logo.svg';
import './App.css';
import List from './list';
import User from './User';
import FunctionEx from './components/FunctionEx';
import MobileCart from './components/MobileCart';
import WithoutJSX from './components/WithoutJSX';
import BasicClass from './components/BasicClass';
import Basicstate from './components/Basicstate';
import Shoppingcart from './Assignment/Shoppingcart';
import path1 from '../src/components/images/sudi2.jpg';
import path2 from '../src/components/images/sudi4.jfif';
import path3 from '../src/components/images/sudi3.jfif';
import Studentdetail from './Assignment/Studentdetail';
import ConditionalEx from './components/ConditionalEx';
import EventBind from './components/EventBind';
import Aboutus from './Assignment/Header/Aboutus';
import Gallery from './Assignment/Header/Gallery';
import Course from './Assignment/Header/Course';
import Contactus from './components/Contactus';
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Fragement from './components/Fragement';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';
import LifeCycle from './components/LifeCycle';
import BasicApi from './components/BasicApi';
import StudentdataAdd from './components/StudentdataAdd';
import StudentDeleteEdit from './components/StudentDeleteEdit';
import BasicHook from './BasicHook';
import Userdatahook from './Userdatahook';
import UseMemoEx from './UseMemoEx';
import UseRefEx from './UseRefEx';
import DatatablesEx from './components/DatatablesEx';
import ParentComponentEx from './components/ParentComponentEx';
import Parentcomp from './Parentcomp';
function App() {
  const name="Dhana";
  let a=10;
  let b=5;
  return (
    <div >
      <Header />
    {/*<h1 Style="color:red">Learning By {name} {a*b}</h1>
      <hr></hr> */}
    {/* <div>
      <h1>Mobile Store</h1>
  <MobileCart name="iphone13" price="90k" src="https://www.thebignano.com/wp-content/uploads/2018/10/816p2BiOBfcL._SL1500_-1.jpg"/>
  <MobileCart name="iphone14" price="100k" src="https://www.thebignano.com/wp-content/uploads/2018/10/816p2BiOBfcL._SL1500_-1.jpg"/>
  <MobileCart name="iphone15" price="95k" src="https://www.thebignano.com/wp-content/uploads/2018/10/816p2BiOBfcL._SL1500_-1.jpg"/>
  <MobileCart name="iphone16" price="85k" src="https://www.thebignano.com/wp-content/uploads/2018/10/816p2BiOBfcL._SL1500_-1.jpg"/>
  <br /> </div> 
<hr />
<div>
<WithoutJSX /></div>
<hr />
  <Basicstate /> */}
 {/* This is assignment <h1>Shoppingcart</h1>
  <Shoppingcart src={path1} price="500" likes="***"/>
  <Shoppingcart src={path2} price="600" likes="****"/>
  <Shoppingcart src={path3} price="700" likes="****"/>
<Studentdetail /> */ }
{/*<ConditionalEx />
<hr />
<EventBind /> */}
{/*<div className='bg-light'>
<Routing /> 
</div>} */}
{/*<StudentdataAdd />
<hr />
<StudentDeleteEdit /> */}
{/*
<UseMemoEx />
<UseRefEx /> 
<DatatablesEx />
<ParentComponentEx />
<Routing /> <Parentcomp /> */}
<Routing />
<Footer />
    </div>
  );
}

export default App;
