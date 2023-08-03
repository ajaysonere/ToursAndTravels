import {Routes , Route , Navigate} from 'react-router-dom';

import Home from "../pages/Home.js";
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';



function Routers(){
    return (
        <>
          <Routes>
             <Route path= "/" element={<Navigate to='/home' />}  />
             <Route path='/home' element={<Home/>} />
             <Route path='/tours' element={<Tour/>}/>
             <Route path='/tours/:id' element={<TourDetails/> } />
             <Route path='/login' element={<Login/>} />
             <Route path='/register' element={<Register/>} />
             <Route path='/tours/search' element={<SearchResultList/>} />

          </Routes>
        </>
    );
}

export default  Routers;