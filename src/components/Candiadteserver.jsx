/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './css/Candidate.css';

function Candiadteserver() {
 
    

    const[data,setData]=useState([])
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(()=>{



        axios.get('http://localhost:3001/user')
       .then(res =>{
        
        setData(res.data)
      
    })
       .catch(err=>console.log(err))



    },
    
    
    
    [])
    const handleSearch = e => {
        setSearchQuery(e.target.value);
      };
    const filteredData = data.filter(
        candidate =>
          candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
  return (
    <>   

  
    <div className='p-8 BG-light'>
    
        <div className='bg-white shadow-border'>
 

 <br>
    
 </br>


 <h1 className=" list text-center" >CANDIDATE LIST</h1>

 <div className='search-container'>

        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <br></br>
    <table className='table'>
      <thead>
        <tr>
        <th className='profile'>Profile</th>
          <th>
            Name
          </th>
          <th>Role</th>
          <th>Email</th>
          <th>Skill</th>

          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      
      {filteredData.map((d, i) => (
       
            <tr key={i}>
            <td>
                <img src={d.profile} alt="avatar " className="avatar"  />
              </td>
              <td>{d.name}</td>
              <td>{d.role}</td>
              <td>{d.email}</td>
              <td>{d.skill}</td>
             
              <td  className="status-active">
                {d.status}
                
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
  </div>
  <br></br>
  </>

)
}

export default Candiadteserver;
