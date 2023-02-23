import Footer from './Footer';
import Header from './Header';
import Profile from './ProfilePage/Profile';
import Admin from './ProfilePage/admin';
import Catalog from '../components/Catalog';
import Home from '../components/HomePage';
import SignIn from '../components/Form/signIn';
import SignUp from '../components/Form/signUp';
import OneContent from './OneContent';
import Page404 from './404';

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { accountService } from './Services';

import axios from 'axios'



function App() {
  let { isLogged, saveToken }= accountService;
  const[datas, setDatas] = useState([]);
  const [formData, setFormdata] = useState({
    email: '',
    password: '',
  });
  const[categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState([])

  const callAPI = () => {
    return (
      axios({
        method: 'POST',
        url: 'http://localhost:2000/api/users/login',
        data: {
          email: formData.email,
          password: formData.password 
        }
      })
      .then( response => {
        console.log('API',response.data.result);
        const user = response.data.result;
        setFormdata(user);
        saveToken(response.data.token);
      }).catch(err => {
        console.log(err)
      })
    )
  }
  
  useEffect(() => {
    callAPI()
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:2000/api/teachers/`)
    .then(response => {
      const data = response.data.result;
      setDatas(data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:2000/api/categories/`)
    .then(response => {
      const result = response.data.result;
      setCategories(result);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <main className='main w-100 min-vh-100 d-flex justify-content-center'>
          <Routes>
            <Route path="/" element={<Home />} />
            {isLogged &&(
            <Route path="/profile" element={<Profile formData={formData} setFavorite={setFavorite} />} />
            )}
            
            <Route path="/admin" element={<Admin datas={datas}/>} />
            <Route path="/catalogue" element={<Catalog datas={datas} categories={categories} />} />
            <Route path="/catalogue/:courseId/:courseLabel" element={<OneContent datas={datas} formData={formData} favorite={favorite} setFavorite={setFavorite} setFormdata={setFormdata}/>} />
            <Route path="/connexion" element={<SignIn formData={formData} callAPI={callAPI} setFormdata={setFormdata} isLogged={isLogged}/>} />
            <Route path="/inscription" element={<SignUp />} />
            <Route path='/*' element={<Page404 />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
