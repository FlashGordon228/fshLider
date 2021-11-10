import './App.css';
import Header from './components/Header/Header';
import Block1 from './components/Block1/block1';
import Block2 from './components/Block2/block2';
import Block3 from './components/Block3/block3';
import About from './components/About/About'
import Adresses from './components/Adresses/Adresses'
import Camps from './components/Camps/Camps'
import News from './components/News/News'
import Contacts from './components/Contacts/Contacts'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App" >
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/adresses' element={<Adresses />} />
                    <Route path='/camps' element={<Camps />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

const Main = () => {
    return (
        <div>
            <Block1 />
            <Block2 />
            <Block3 />
        </div>
    )
}

export default App;