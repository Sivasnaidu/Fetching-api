import React, {useState, useEffect} from 'react'
;import './App.css';

function App() {
  const [user, setUser] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async ()=> {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUser(data);
        setLoading(false);
      }
      catch (error) {
        console.log("error", error)
      }
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      <table className="table">
        
        <thead>
<tr>
<th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
    
  
  
</tr>

        </thead>
        <tbody>
          { user.map ((item)=> (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.street}, {item.address.city}, {item.address.zipcode}</td>
              </tr>
          ))
        
}
        </tbody>
      </table>
     
    </div>
  );
}

export default App;
