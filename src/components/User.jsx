
import { use, useEffect, useState } from "react";

const Users = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //       .then((data) => {   
  //           setUsers(data);
  //           setLoading(false);
  //       });
  //   }, []);
  useEffect(() => {
async function fetchData() {
    try {
      
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        setUsers(data);
        console.log(response)
      }
     catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }
    fetchData();
    console.log("run...");
  }, []);
    
   


  return (
    <ol className="list-disc mx-6">
      {users.map((user) => (
          <li key ={user.id}>{user.name}</li>
      ))}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
    </ol>
  );
};

export default Users;
