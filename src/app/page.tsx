"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import CustomNavbarWrapper from '../components/Navbar'; // Import Navbar
// import MyCustomCarousel from '../components/Carousel'; // Import Carousel
// import ProgramCard from '../components/ProgramCard'; // Import renamed Card component
import Login from '../login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../login/Register';

import Admin from '../../admin/adminUI';
import Signup from '../login/Signup';
import AdminLogin from '../../admin/adminLogin';
import GenerativeAICourses from '../components/GenerativeAiPage';
import MyCustomCarousel from '../components/Carousel';
import CustomNavbarWrapper from '../components/Navbar';
import CourseCard from '../components/GenerativeAiCard';
import CourseDetail from '../components/GenerativeAipageDetails';
import ProgramSyllabusForm from '../components/ProgrameSyllabusForm';
import ProgramPage from '../components/GenerativeAiProgramePage';
import GenAICoursePage from '../components/GenAICoursePages';
import LearningPath from '../components/LearningPath';
import AdmissionProcess from '../components/AdmissionProcess';
import EligibilityPage from '../components/EligibilityPage';
import FinancingOptions from '../components/FinancingOptions';
import ApplicationPage from '../components/ApplicationPage';
import ProgramCohorts from '../components/ProgramCohorts';
import CareerSupport from '../components/CareerSupport';
import TermAndCondition from '../components/TermAndCondition';
import Footer from '../components/Footer';
import CourseList from '../components/CourseList';
import Sidebar from '../components/ProgramSidebar';
import PartnerLogos from '../components/PartnerLogos';
import CourseDetailCard from '../components/CourseDetailCard';
import WhyUs from '../components/WhyUs';
import JobRolesPage from '../components/JobRolesPage';
import CourseTable from '../components/CourseTable';
// import ForBusiness from '../components/ForBusinesss';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CustomNavbarWrapper />
        <MyCustomCarousel />
       
        {/* <Admin /> */}
        {/* <Signup/> */}
        {/* <AdminLogin/> */}
        {/* <PartnerLogos /> */}
        {/* <WhyUs/> */}
        {/* <Sidebar/> */}
        {/* <CourseDetailCard/> */}
        {/* <ProgramCard /> */}
        {/* <CourseCard /> */}
        {/* <CourseDetail/> */}
        {/* <ProgramSyllabusForm/> */}

        {/* Generative AI page Starts from Here*/}
        <GenerativeAICourses/>
        <ProgramPage/>
        <GenAICoursePage/>
        <JobRolesPage/>
        <CourseTable/>
        <ProgramCohorts/>
        {/*Generative AI page Ends Here  */}

        {/* <ForBusiness/> */}

        {/* <LearningPath/> */}
        {/* <AdmissionProcess/> */}
        {/* <EligibilityPage/> */}
        {/* <ApplicationPage/> */}
        {/* <FinancingOptions/> */}
        {/* <CareerSupport/> */}
        <Footer/>
        <TermAndCondition/>
        {/* <CourseList/> */}
        
        

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />


          {/* अन्य रूट्स */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
