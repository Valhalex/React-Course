import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout'

// App.js acts as our controller/router. Commanding what pages shall be loaded based on the url
function App() {
  return (
    // Navbar component will wrap our routing
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage/>}/>
        <Route path='/new-meetup' element={<NewMeetupPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;