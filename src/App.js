import './App.css'
import Nav from './components/nav/nav'
import LandingPage from './components/landingpage/landingPage';
import Footer from './components/footer/footer'
import About from './components/about/about';
import Menu from './components/menu/menu';
import BookingPage from './components/booking/BookingPage';
import OrderOnline from './components/onlineorder/onlineorder';
import Login from './components/login/loginpage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/littlelemonrestaurant' element = {<LandingPage/> }/>
        <Route path='/littlelemonrestaurant/about' element = {<About/> }/>
        <Route path='/littlelemonrestaurant/menu' element = {<Menu/> }/>
        <Route path='/littlelemonrestaurant/booking' element = {<BookingPage /> } />
        <Route path='/littlelemonrestaurant/order-online' element = {<OrderOnline/> }/>
        <Route path='/littlelemonrestaurant/login' element = {<Login/> }/>
      </Routes>
      <Footer />
    </>
  )
}
export default App;
