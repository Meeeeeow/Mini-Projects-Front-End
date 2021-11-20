import './App.css';
import {Header} from './components/header/header.component';
import {Footer} from './components/footer/footer.component';
import {Body} from './components/body/body.component';
import {Layout} from './components/layout/layout.component';
function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Body/>
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
