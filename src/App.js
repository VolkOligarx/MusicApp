import './App.css';
import { AppRoutes } from './AppRoutes'

function App() {

  const user = localStorage.getItem('token')

  return (
    <div className="App">
        <div className="container">
          <div className="wrapper">
            <AppRoutes user={user} />
          </div>
        </div>
    </div>
  );
}

export default App;
