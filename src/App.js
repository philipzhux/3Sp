import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ThreadPage from './threads/containers/ThreadPage';
import MyLayout from './shared/components/layout';
import { Breadcrumb, Layout, Menu, theme, StepForwardOutlined } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  
  return <Router><div className="App">
  <MyLayout>
  <Switch>
          <Route path = "/new-place" >
            <ThreadPage title = "自由广场"/>
            </Route>
          <Route path = "/default" >
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          </Route>
        </Switch>
    </MyLayout>
    </div></Router>
}

export default App;
