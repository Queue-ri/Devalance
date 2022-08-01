import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DevPage from './pages/DevPage';
import SelfPage from './pages/SelfPage';
import NewPage from './pages/NewPage';
import PlayPage from './pages/PlayPage';
import PopularPage from './pages/PopularPage';


function App() {
    useEffect(() => { document.body.style.backgroundColor = '#f0f1f6' }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/popular" element={<PopularPage />} />
                    <Route path="/dev" element={<DevPage />} />
                    <Route path="/self" element={<SelfPage />} />
                    <Route exact path="/new" element={<NewPage />} />
                    <Route path="/play/*" element={<PlayPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
