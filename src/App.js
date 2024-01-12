import React,{useState, useEffect , useRef} from 'react';
import { Routes, Route , BrowserRouter } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import OurProjects from "./pages/OurProjects/OurProjects";
import ProjectDetails from "./pages/ProjectDetails";
import CaseStudies from "./pages/CaseStudies";
import CasestudiesDetails from "./pages/CasestudiesDetails";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Startwork from "./pages/Startwork";
import Contact from "./pages/Contact";
import TeamDetails from "./pages/TeamDetails";
import Agency from "./pages/Agency/Agency";
import AnimCursor from "./components/AnimCursor";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Preloader from './pages/Preloader';
import JobApplicationForm from "./pages/JobForm/JobApplicationForm";
import JobsList from "./pages/JobsList/JobsList";
import JobDetails from "./pages/JobDetails/JobDetails";
import Privacy from "./pages/Policies/Privacy";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import GoToTop from './pages/GoToTop';
import { SquareLoader } from 'react-spinners';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (!isLoading) {
        const scrollPosition = {
          x: window.scrollX,
          y: window.scrollY,
        };
        sessionStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
      }
    };

    const handleLoad = () => {
      const storedScrollPosition = sessionStorage.getItem('scrollPosition');
      if (storedScrollPosition) {
        const { x, y } = JSON.parse(storedScrollPosition);
        window.scrollTo(x, y);
        sessionStorage.removeItem('scrollPosition');
      }
      setIsLoading(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, [isLoading]);

  // Simulating data fetching
  useEffect(() => {
    const fetchData = async () => {
      // Simulated delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Set the loading state to false once the data has arrived
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const isNotFoundPage = location.pathname === '*';

  return (
    <div className="App">
    {isLoading ? (
      <div>
      <div className="loading-spinner-center">
      <SquareLoader color={'#27e646'} size={50} />
    </div></div>
    ) : (

        <div>

<AnimCursor />

{!isNotFoundPage && <Navbar />}
  <Routes>
  
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<OurProjects />} />
    <Route path="/project-details/:slugAndId" element={<ProjectDetails />} />
    <Route exact path="/case-studies" element={<CaseStudies />} />
    <Route path="/case-studies/:slugAndId" element={<CasestudiesDetails />} />
    <Route path="/services" element={<Services />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog-details/:slugAndId" element={<BlogDetails />} />
    <Route path="/start-work" element={<Startwork />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/agency" element={<Agency />} />
    <Route path="/privacy-policy" element={<Privacy />} />
    <Route path="/team-details" element={<TeamDetails />} />
    <Route path="/job/:id" element={<JobApplicationForm />} />

    <Route path="/job-list" element={<JobsList />} />
    <Route path="/job-Details/:slugAndId" element={<JobDetails />} />
    {!isNotFoundPage && <Route path="*" element={<NotFoundPage />} />}
  </Routes>
  {!isNotFoundPage && <Footer />}

</div>
)}

    </div>
    
  );
}

export default App;
