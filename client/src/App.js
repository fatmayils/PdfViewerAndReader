import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import "./index.css";
import SigninUser from './pages/Signin/SigninUser';
import UploadFile from './pages/UploadFile/UploadFile';
import AdminPanel from './pages/Admin/AdminPanel';
import SidebarAdmin from './Components/Sidebar/SidebarAdmin';
import AllUsers from './pages/Admin/AllUsers';
import AddUser from './pages/Admin/AddUser';
import AllFiles from './pages/Admin/AllFiles';
import AllFilesAndDetails from './pages/Admin/AllFilesAndDetails';
import MyAllFiles from './pages/Signin/MyAllFiles';
import WriterQuery from './pages/Admin/WriterQuery';
import LessonQuery from './pages/Admin/LessonQuery';
import ProjectTitleQuery from './pages/Admin/ProjectTitleQuery';
import KeywordsQuery from './pages/Admin/KeywordsQuery';
import PeriodQuery from './pages/Admin/PeriodQuery';
import PeriodWriterLessonQuery from './pages/Admin/PeriodWriterLessonQuery';

import WriterQueryUser from './pages/Signin/WriterQueryUser';
import LessonQueryUser from './pages/Signin/LessonQueryUser';
import ProjectTitleQueryUser from './pages/Signin/ProjectTitleQueryUser';
import KeywordsQueryUser from './pages/Signin/KeywordsQueryUser';
import PeriodQueryUser from './pages/Signin/PeriodQueryUser';
import PeriodWriterLessonQueryUser from './pages/Signin/PeriodWriterLessonQueryUser';
import MyFileDetails from './pages/Signin/MyFileDetails';
const App = () => {
  return (
    <div className="starting ">
   <Router >
    <Navbar  />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/testimonial" exact>
          <Testimonial/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/signinUser" exact>
          <SigninUser/>
        </Route>
        <Route path="/uploadfile" exact>
          <UploadFile/>
        </Route>
        <Route path="/adminPanel" exact>
          <AdminPanel/>
        </Route>
        <Route path="/adminsidepanel" exact>
          <SidebarAdmin/>
        </Route>
        <Route path="/allUsers" exact>
          <AllUsers/>
        </Route>
        <Route path="/addUser" exact>
          <AddUser/>
        </Route>
        <Route path="/allFiles" exact>
          <AllFiles/>
        </Route>
        <Route path="/filesAndDetails" exact>
          <AllFilesAndDetails />
        </Route>
        <Route path="/myFilesAndDetails" exact>
          <MyFileDetails />
        </Route>
        <Route path="/myAllFiles" exact>
          <MyAllFiles/>
        </Route>
        <Route path="/writerQuery" exact>
         <WriterQuery/>
        </Route>
        <Route path="/lessonQuery" exact>
         <LessonQuery/>
        </Route>
        <Route path="/projectTitleQuery" exact>
         <ProjectTitleQuery/>
        </Route>
        <Route path="/keywordsQuery" exact>
         <KeywordsQuery/>
        </Route>
        <Route path="/periodQuery" exact>
         <PeriodQuery/>
        </Route>
        <Route path="/periodWriterLessonQuery" exact>
         <PeriodWriterLessonQuery/>
        </Route>
        <Route path="/writerQueryUser" exact>
         <WriterQueryUser/>
        </Route>
        <Route path="/lessonQueryUser" exact>
         <LessonQueryUser/>
        </Route>
        <Route path="/projectTitleQueryUser" exact>
         <ProjectTitleQueryUser/>
        </Route>
        <Route path="/keywordsQueryUser" exact>
         <KeywordsQueryUser/>
        </Route>
        <Route path="/periodQueryUser" exact>
         <PeriodQueryUser/>
        </Route>
        <Route path="/periodWriterLessonQueryUser" exact>
         <PeriodWriterLessonQueryUser/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router></div>
  );
}

export default App;
