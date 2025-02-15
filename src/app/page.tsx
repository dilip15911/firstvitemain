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
import ProgramCohorts from '../components/ProgramCohortss';
import CareerSupport from '../components/CareerSupport';
import TermAndCondition from '../components/TermAndConditionn';
import Footer from '../components/Footerr';
import CourseList from '../components/CourseListt';
import Sidebar from '../components/ProgrameSidebar';
import PartnerLogos from '../components/PartnerLogoss';
import CourseDetailCard from '../components/CourseDetailCards';
import WhyUs from '../components/WhyUss';
import JobRolesPage from '../components/JobRolesPagee';
import CourseTable from '../components/CourseTablee';
// import ForBusiness from '../components/ForBusinesss';
import CorporateTraining from '../components/CorporateTrainingg';
import FAQPageTrainer from '../components/FAQPageTrainerr';
import CorporateLanding from '../components/CorporateLandingg';
import WorkForceTraining from '../components/WorkForceTrainingg';
import SkillCoverage from '../components/SkillCoveragee';
import AcademySolutions from '../components/AcademySolutionss';
import TrainerSignup from '../components/TrainerSignupp';
import FAQPageCorporate from '../components/FAQPageCorporatee';
import FAQPageHome from '../components/FAQPageHomee';
import HomePageBanner from '../components/HomePageBannerr';
import ProgramCard from '../components/ProgramCardd';





const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CustomNavbarWrapper />
        <MyCustomCarousel />
        <HomePageBanner/>
       
        {/* <Admin /> */}
        {/* <Signup/> */}
        {/* <AdminLogin/> */}
        <PartnerLogos />
        <WhyUs/>
        <Sidebar/>
        {/* <CourseDetailCard/> */}
        {/* <ProgramCard /> */}
        {/* <CourseCard /> */}
        {/* <CourseDetail/> */}
        {/* <ProgramSyllabusForm/> */}
          <FAQPageHome/>

        {/* Generative AI page Starts from Here*/}
        {/* <GenerativeAICourses/>
        <ProgramPage/>
        <GenAICoursePage/>
        <JobRolesPage/>
        <CourseTable/>
        <ProgramCohorts/> */}
        {/*Generative AI page Ends Here  */}


        {/* Trainer page */}
        {/* <TrainerSignup/> */}
        {/* <FAQPageTrainer/> */}




        {/* <ForBusiness/> */}

        {/* <CorporateLanding/> */}
        {/* <SkillCoverage/> */}
        {/* <FAQPage/> */}
        {/* <AcademySolutions/> */}
        {/* <CorporateTraining/> */}
        {/* <WorkForceTraining/> */}
        {/* <FAQPageCorporate/> */}

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
