import React from "react";
import { useHistory, Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Details from './Details';
import './Card.css';

const Repos = ({ avatar_url, name  }) => {
    const history = useHistory();
    const onClickHandler =(e)=>{
        e.stopPropagation();
        e.preventDefault();

        // let path = `/Details`; 
        // history.push(path);
        // console.log("hi")
    }
    return <div className="card" onClick ={onClickHandler}>
    <img src={`${avatar_url}`} style={{ width: '30px', height: '30px' }} />
    <br></br>{name}<br></br>
    <Link to="/Followers">Followers..</Link>
    </div>
}

export default Repos;