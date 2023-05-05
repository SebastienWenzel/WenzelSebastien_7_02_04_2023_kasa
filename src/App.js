import { BrowserRouter } from 'react-router-dom';
import RoutePage from '@/Pages/RoutePage';
import '@/assets/sass/app.scss'
function App() {
  return (  
        <BrowserRouter>
          <RoutePage/>
        </BrowserRouter>
  );
}

export default App;
