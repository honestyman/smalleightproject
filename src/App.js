import logo from './logo.svg';
import React from 'react';

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Top from './pages/Top';
import News from './pages/News';
import Column from './pages/Column';
import BusinessOverview from './pages/BusinessOverview';
import Inquery from './pages/Inquery';
import Mitsuke from './pages/Mitsuke.jsx';
import ColumnDetail from './pages/ColumnDetail.jsx';
import CompanyInquery from './pages/CompanyInquery.jsx';
import Login from './admin/Login.jsx';
import Manage from './admin/Manage.jsx';
import ClientManage from './admin/admincomponent/clientmange/ClientManage.jsx';
import MultifuleCompanysInquery from './pages/MultifuleCompanysInquery.jsx';
import Policy from './pages/Policy.jsx';
import Terms from './pages/Terms.jsx';
import NewsDetail from './pages/NewsDetail.jsx';
import ClientDetail from './admin/admincomponent/clientmange/ClientDetail.jsx';
import InqueryThanks from './pages/InqueryThanks.jsx';
import CompanyManage from './admin/admincomponent/comanymanage/CompanyManage.jsx';
import CompanyDetail from './admin/admincomponent/comanymanage/CompanyDetail.jsx';
import CompanyAddPage from './admin/admincomponent/comanymanage/CompanyAddPage.jsx';
import MitsukePartner from './pages/MitsukePartner.jsx';
import MitsukePartnerThanks from './pages/MitsukePartnerThanks.jsx';
import CompanyUpdatePage from './admin/admincomponent/comanymanage/CompanyUpdatePage.jsx';
import ColumnManage from './admin/admincomponent/columnmanage/ColumnManage.jsx';
import ColumnManageDetail from './admin/admincomponent/columnmanage/ColumnManageDetail.jsx';
import ColumnAddPage from './admin/admincomponent/columnmanage/ColumnAddPage.jsx';
import ColumnUpdatePage from './admin/admincomponent/columnmanage/ColumnUpdatePage.jsx';
import NewsManage from './admin/admincomponent/newsmanage/NewsManage.jsx';
import NewsManageDetail from './admin/admincomponent/newsmanage/NewsManageDetail.jsx';
import NewsAddPage from './admin/admincomponent/newsmanage/NewsAddPage.jsx';
import Tools from './pages/Tools.jsx';
import ToolsContent from './component/tools/ToolsContent.jsx';
import CreateUTMTool from './component/tools/CreateUTMTool.jsx';
import NewsUpdatePage from './admin/admincomponent/newsmanage/NewsUpdatePage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/:service' element={<Top/>}/>
          <Route path='/' element={<Top/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/column' element={<Column/>}/>
          <Route path='/business' element={<BusinessOverview/>}/>
          <Route path='/policy' element={<Policy/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/inquery' element={<Inquery/>}/>
          <Route path='/inquerythanks' element={<InqueryThanks/>}/>
          <Route path='/companyinquery/:id' element={<CompanyInquery/>}/>
          <Route path='/multiful_companyinquery/:ids' element={<MultifuleCompanysInquery/>}/>
          <Route path='/mitsuke' element={<Mitsuke/>}/>
          <Route path='/mitsuke/partner' element={<MitsukePartner/>}/>
          <Route path='/mitsukepartnerthanks' element={<MitsukePartnerThanks/>}/>
          <Route path='/columndetail/:id' element={<ColumnDetail/>}/>
          <Route path='/newsdetail/:id' element={<NewsDetail/>}/>
          <Route path='/admin' element={<Login/>}/>
          <Route path='/manage' element={<Manage/>}>
            <Route index element={<ClientManage/>}/>
            <Route path='client_detail/:id' element={<ClientDetail/>}/>
            <Route path='companymanage' element={<CompanyManage/>}/>
            <Route path='companymanage/company_detail/:id' element={<CompanyDetail/>}/>
            <Route path='companymanage/company_add' element={<CompanyAddPage/>}/>
            <Route path='companymanage/company_update/:id' element={<CompanyUpdatePage/>}/>
            <Route path='columnmanage' element={<ColumnManage/>}/>
            <Route path='columnmanage/column_detail/:id' element={<ColumnManageDetail/>}/>
            <Route path='columnmanage/column_update/:id' element={<ColumnUpdatePage/>}/>
            <Route path='columnmanage/column_add' element={<ColumnAddPage/>}/>
            <Route path='newsmanage' element={<NewsManage/>}/>
            <Route path='newsmanage/news_detail/:id' element={<NewsManageDetail/>}/>
            <Route path='newsmanage/news_add' element={<NewsAddPage/>}/>
            <Route path='newsmanage/news_update/:id' element={<NewsUpdatePage/>}/>

          </Route> 
          <Route path='/tools' element={<Tools/>}>
            <Route index element={<ToolsContent/>}/>
            <Route path='create_param' element={<CreateUTMTool/>}/>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
