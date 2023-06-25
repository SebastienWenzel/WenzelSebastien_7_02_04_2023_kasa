import { Routes, Route } from 'react-router-dom';
import { Layout, Home, About, Accomodation, NotFound} from '../pages'

const RoutePage = () => {
    
    return (
        <Routes>
            {/* route PARENT */}
            <Route element={<Layout/>}>
                {/* route ENFANT */}
                <Route index element={<Home/>} />
                <Route path="/WenzelSebastien_7_02_04_2023_kasa" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/accomodation/:id" element={<Accomodation/>} />
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
    );
};

export default RoutePage;