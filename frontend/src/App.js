import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DevPage from './pages/DevPage';
// import NewPage from './pages/NewPage';


function App() {
    useEffect(() => { document.body.style.backgroundColor = '#f0f1f6' }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/dev" element={<DevPage />} />
                    {/* <Route exact path="/new" element={<NewPage />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
