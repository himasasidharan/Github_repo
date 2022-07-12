import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";
const Followers =(props)=>{
    console.log("followers")
    const [followers, setFollowers]= useState([]);
    const [name, setname]= useState('')
    //const user = useContext(UserContext);
    useEffect(()=>{
        async function fetchFollowers(){
            let followers =  await axios.get('https://api.github.com/users/brad/followers');
            setFollowers(followers.data);

        }
        fetchFollowers();
    },[])
return followers.map((follower)=>{
    return <Card key={follower.id} name={follower.name} avatar_url ={follower.avatar_url}  onClick ={()=>{setname(follower.name)}}/>
})
}
export default Followers;