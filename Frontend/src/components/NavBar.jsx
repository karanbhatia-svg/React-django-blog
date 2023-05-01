import React from 'react'
import {useCookies} from 'react-cookie';
import { useState, useEffect } from 'react';
import APIService from './APIService'

function NavBar() {
const [username, setUsername] = useState('');
const [cookies, setCookie] = useCookies(['mytoken'])
const [token, SetToken, removeToken] = useCookies(['mytoken'])
const logoutBtn = () => {
    removeToken(['mytoken'])

  }

useEffect(() => {
    const token = cookies['mytoken'];
    console.log('Login User token is', token);
    console.log('Data type', typeof token);

    if (String(token) === 'undefined') {
      navigate('/');
    } else {
      // Fetch the current user's username using the token
      APIService.GetCurrentUser(token)
        .then(resp => setUsername(resp.username))
        .catch(error => console.log(error));
    }
  }, [username]);

 return (
   <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Learn Python Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" onClick={logoutBtn}>Log out</a>
        </li>
        <li className="nav-item">
          Welcome {username}
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
  )
}

export default NavBar
