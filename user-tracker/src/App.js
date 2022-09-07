import React, {useState, Fragment} from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name,age) => {
    setUsersList((prevState) => {
      return [...prevState,{name:name,age:age,id:Math.random().toString()}]
    })
  }

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      { usersList.length !== 0 && <UsersList users={usersList}/>}
    </>
  );
}

export default App;
