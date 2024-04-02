import logo from './logo.svg';
import React from 'react';

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Top from './pages/Top';
import News from './pages/News';
import Column from './pages/Column';
import BusinessOverview from './pages/BusinessOverview';
import Inquery from './pages/Inquery';
import WebMaru from './pages/WebMaru';
import ColumnDetail from './pages/ColumnDetail.jsx';
import CompanyInquery from './pages/CompanyInquery.jsx';
import Login from './admin/Login.jsx';
import Manage from './admin/Manage.jsx';
import ClientManage from './admin/admincomponent/clientmange/ClientManage.jsx';
import MultifuleCompanysInquery from './pages/MultifuleCompanysInquery.jsx';
import Policy from './pages/Policy.jsx';
import Terms from './pages/Terms.jsx';
import NewsDetail from './pages/NewsDetail.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Top/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/column' element={<Column/>}/>
          <Route path='/business' element={<BusinessOverview/>}/>
          <Route path='/policy' element={<Policy/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/inquery' element={<Inquery/>}/>
          <Route path='/companyinquery/:id' element={<CompanyInquery/>}/>
          <Route path='/multiful_companyinquery/:ids' element={<MultifuleCompanysInquery/>}/>
          <Route path='/webmaru' element={<WebMaru/>}/>
          <Route path='/columndetail/:id' element={<ColumnDetail/>}/>
          <Route path='/newsdetail/:id' element={<NewsDetail/>}/>
          <Route path='/admin' element={<Login/>}/>
          <Route path='/manage' element={<Manage/>}>
          {/* { <Route path='/manage' element={<Admin/>}> */}
            <Route index element={<ClientManage/>}/>
            {/* <Route path='user_detail/:id' element={<UserDetail/>}/>
            <Route path='subscription' element={<SubscriptionManage/>}/>
            <Route path='video' element={<VideoManage/>}/>
            <Route path='add_video' element={<AddVideo/>}/>
            <Route path='update_video/:id' element={<UpdateVideo/>}/>
            <Route path='sound' element={<SoundManage/>}/>
            <Route path='add_sound' element={<AddSound/>}/>
            <Route path='update_sound/:id' element={<UpdateSound/>}/>
            <Route path='coin' element={<CoinManage/>}/>
            <Route path='tag' element={<TagManage/>}/>
            <Route path='add_tag' element={<AddTag/>}/>
            <Route path='update_tag/:id' element={<UpdateTag/>}/>
            <Route path='notification' element={<NotificationManage/>}/>
            <Route path='add_notification' element={<AddNotification/>}/>
            <Route path='update_notification/:id' element={<UpdateNotification/>}/> */}
          </Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
