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
import LearningPath from '../components/LearningPaath';
import AdmissionProcess from '../components/AdmissionProcesss';
import EligibilityPage from '../components/EligibilityPagee';
import FinancingOptions from '../components/FinancingOptionss';
import ApplicationPage from '../components/ApplicationPagee';
import ProgramCohorts from '../components/ProgramCohortss';
import CareerSupport from '../components/CareerSupportt';
import TermAndCondition from '../components/TermAndConditionn';
import Footer from '../components/Footerr';
import CourseList from '../components/CourseListt';
import Sidebar from '../components/ProgrameSidebar';
import PartnerLogos from '../components/PartnerLogoss';
import CourseDetailCard from '../components/CourseDetailCards';
import WhyUs from '../components/WhyUss';
import JobRolesPage from '../components/JobRolesPagee';
import CourseTable from '../components/CourseTablee';















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
