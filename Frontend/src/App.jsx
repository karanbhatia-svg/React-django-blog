import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import Form from './components/Form';
import './App.css';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() =>{
    fetch('http://127.0.0.1:8000/api/articles/', {
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'a2a76bcaca32becedbd9fc8542dc293f9c98b92b'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))

  }, [])


  

  return (
    <div className="App">
      <NavBar />
   <br />

   <div className="row">
     <div className="col">
       <button className="btn btn-primary">Create Post</button>

     </div>

   </div>

    
    <ArticleList articles={articles} />
    <Form />
    
    </div>
  );
}
export default App
