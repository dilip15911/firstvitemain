import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CustomNavbarWrapper from '../components/Navbar'; // Import Navbar
import MyCustomCarousel from '../components/Carousel'; // Import Carousel
import ProgramCard from '../components/ProgramCard'; // Import renamed Card component
// import CourseCard from '../components/CourseCard';

const App = () => {
  return (
    <div>
      <CustomNavbarWrapper />
      <MyCustomCarousel />
      <ProgramCard />
      {/* <CourseCard/> Using the renamed Card component */}
    </div>
  );
};

export default App;
