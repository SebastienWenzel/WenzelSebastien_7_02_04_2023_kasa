import { BrowserRouter } from 'react-router-dom';
import RoutePage from '@/pages/RoutePage';
import '@/assets/sass/app.scss'
function App() {
  return (  
        <BrowserRouter>
          <RoutePage/>
        </BrowserRouter>
  );
}

export default App;
