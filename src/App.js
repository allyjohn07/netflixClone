import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './app/firebase';
import { useDispatch } from 'react-redux';
import { logout, login, selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import Profile from './components/Profile';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged( (userAuth) => {
      if( userAuth) {
        //logged in
        console.log(userAuth)
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        //logged out
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) :
        (
        <Routes>
          <Route  path='/login' element={<Login/>}/>
          <Route exact path='/' element={<HomeScreen/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
