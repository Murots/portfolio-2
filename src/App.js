import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RepoCard from "./components/repo-card/RepoCard";
import HolidazeSs from "./images/Holidaze_ss-compressed.jpg";
import EcomStoreSs from "./images/Ecom_ss-compressed.jpg";
import OldSchoolSs from "./images/OldSchool_ss-compressed.jpg";
import BugsBackSs from "./images/BugsBack_ss-compressed.jpg";
import CmsSs from "./images/CMS_ss-compressed.jpg";
import GameHubSs from "./images/GameHub_ss-compressed.jpg";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  const [showOlderProjects, setShowOlderProjects] = useState(false);

  const toggleOlderProjects = () => {
    setShowOlderProjects(!showOlderProjects);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
        <RepoCard
          title="Holidaze"
          description="Holidaze is a venue site developed for the Semester 2 exam at Noroff, enabling users to explore, book, and manage venues. Besides viewing and searching venue details and availability via an interactive calendar, registered users can book venues, view their bookings, and update their profiles. Users registered as venue managers gain additional capabilities to create and oversee their own venues, making it a comprehensive tool for both venue seekers and providers."
          skills="React, JavaScript, Styled components"
          backgroundColor="#a74755"
          imageUrl={HolidazeSs}
          repoUrl="https://github.com/Murots/project-exam-2-holidaze"
          liveUrl="https://singular-melba-972a25.netlify.app"
        />
        <RepoCard
          title="Ecom Store"
          description="This e-commerce site is my first React development project, featuring a product list page where users can view items and access detailed pages with a single click. Users can easily add products to their shopping cart, which dynamically updates with a numerical icon. The cart page provides a summary and automatically calculates the total price. The site also includes a contact form for user inquiries. This project serves as a practical application of React components, state management, and basic web functionalities."
          skills="React, JavaScript, Styled components"
          backgroundColor="#6DA99F"
          imageUrl={EcomStoreSs}
          repoUrl="https://github.com/Murots/my-ecom-store_CA"
          liveUrl="https://classy-semolina-7803dd.netlify.app"
        />
        <RepoCard
          title="Old School Auctions"
          description="Old School Auctions is a niche e-commerce platform focused on the buying and selling of retro LPs, designed with a distinct 70's styling to match its theme. Users can browse, search, and place bids on LP records. Additionally, registered users can list their own records for auction and track incoming bids. This site merges a passion for vintage music with modern web functionality, creating a vibrant marketplace for vinyl enthusiasts."
          skills="Module JavaScript, Bootstrap, Sass"
          backgroundColor="#dc915a"
          imageUrl={OldSchoolSs}
          repoUrl="https://github.com/Murots/Semester-project2"
          liveUrl="https://darling-travesseiro-24dde6.netlify.app/"
        />
        {showOlderProjects && (
          <>
            <RepoCard
              title="Bring the bugs back"
              description="This blog aims to uphold, educate, and motivate readers about the critical significance of fostering robust species diversity, both within local communities and on a global scale. The webpage showcases a series of posts centered around a specific garden, designed and utilized to serve this very purpose."
              skills="HTML, CSS, JavaScript, Wordpress REST API (headless)"
              backgroundColor="#3bbf82"
              imageUrl={BugsBackSs}
              repoUrl="https://github.com/Noroff-FEU-Assignments/project-exam-1-Murots"
              liveUrl="https://beamish-marzipan-bd51ea.netlify.app/"
            />
            <RepoCard
              title="CSM - Explore with us"
              description="CSM shows the concept of a technology and research museum aimed at children and young people in particular. The website wants to invite play and exploration, without underestimating its users."
              skills="HTML, CSS"
              backgroundColor="#5d53c2;"
              imageUrl={CmsSs}
              repoUrl="https://github.com/Murots/CSM_semester-project1"
              liveUrl="https://brilliant-pudding-770786.netlify.app/"
            />
            <RepoCard
              title="Gamehub"
              description="This website has been created as an imaginary online store for buying and selling used games for console and PC. The page shows all the steps in a potential sales process."
              skills="HTML, CSS, JavaScript, Wordpress REST API"
              backgroundColor="#b74f8f"
              imageUrl={GameHubSs}
              repoUrl="https://github.com/Murots/Gamehub"
              liveUrl="https://regal-khapse-ee253a.netlify.app/"
            />
          </>
        )}
        <button onClick={toggleOlderProjects} style={{ margin: "20px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          {showOlderProjects ? "Hide Older Projects" : "Show Older Projects"}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default App;
