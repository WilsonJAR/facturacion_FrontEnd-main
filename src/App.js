import './App.css';
import {RoutesApp, LinksRoutesApp} from './routes/Routes';



function App() {
  return (
    <div className='app'>
      <header className="header__app">
            <div>
              
            </div>
        <LinksRoutesApp/>
      </header>

      <main className="main__app">
        <RoutesApp/>
      </main>
    </div>
  );
}

export default App;
