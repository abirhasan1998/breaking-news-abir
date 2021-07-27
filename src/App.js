//import logo from './logo.svg';
import './App.css';
//import { } from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
function App() {
  const titleStyle =  {height:'100px',width:'1600px',border:'5px solid red', margin: '10px', padding: '10px', textAlign:'center', backgroundColor:'pink'};
  return (
    <div>
     <h2 style ={titleStyle}>Breaking News Site</h2>
      <TopHeadline>  </TopHeadline>
      <Header>  </Header>
      <News> </News>

    </div>
  );
}

export default App;
