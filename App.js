import './App.css';
import axios from 'axios';
import Card from './Card';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Followers from './Followers';
import Details from './Details';
import { Provider, useSelector } from 'react-redux';

const App = () => {
  const [repos, setRepo] = useState([]);
  const [username, setUserName] = useState('');
  const [error, setError] = useState('');
  const user = useSelector(state=>state.userName)


  const searchRepo = async (e) => {
    if (username === '') {
      setError('Input box cannot be blank');
      return;
    }
    let repos = await axios.get(`https://api.github.com/users/${username}/repos`);
    setRepo(repos.data);
    setError('');
  }

  return (
    <BrowserRouter>
      <Route exact path="/" render={(props) => (
        
        <div className="form-container">
          <div className='search-container'>
            <div className='search-box'>
              <input type="text" className='input-box' placeholder='Search Repositories here..' onChange={(e) => { setUserName(e.target.value) }} />
              <button className="repo-btn" onClick={searchRepo}>Go</button>
            </div>
            <div className='error'>{error}</div>
          </div>
          <div className='display-container'>
            {username && repos?.length > 0 ? repos.map((repo) => {
              return <Card key={repo.id} avatar_url={repo.owner.avatar_url}  name = {repo.name}/>
            }) : <div>No repositories found!</div>}
          </div>
        </div>
      )} />
      <Switch>
        <Route exact path="/Details" render = {()=>{return <Details />}} />
        <Route exact path="/Followers" render={()=>{return <Followers/>}} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
