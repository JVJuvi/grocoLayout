import 'swiper/swiper.min.css';
import './sass/index.scss';
import 'font-awesome/css/font-awesome.min.css';
import './assets/boxicons-2.0.9/css/boxicons.min.css';



import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Router from './config/Router';



function App() {
  return (
    <BrowserRouter>
        <Route render={props => (
            <>
                <Header {...props}/>
                <Router />
                <Footer />
            </>
        )}/>
    </BrowserRouter>
  );
}

export default App;
