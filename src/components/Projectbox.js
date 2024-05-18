
// import {FaGithub} from "react-icons/fa";
// // import frontend from '../assets/frontend.png';
// // import sidenav from '';
// // import React, { useState } from 'react';
// // import './Projectbox.css';

// // const Projectbox = () => {
// //   const [hovered, setHovered] = useState(false);

// //   const handleHover = () => {
// //     setHovered(true);
// //   };

// //   const handleLeave = () => {
// //     setHovered(false);
// //   };

// //   return (
// //     <div className="projects">
// //       <div
// //         className={hovered ? 'img-frontend-hovered' : 'img-frontend'}
// //         onMouseEnter={handleHover}
// //         onMouseLeave={handleLeave}
// //       >
// //         {hovered ? (
// //            <div className="img-frontend-hovered'">
// //           <>
// //             <h3>Project Source</h3>
// //             <a href="https://github.com/yashikaverma8112/Frontend">
// //               <FaGithub size={25} style={{ color: 'white', marginLeft: '1.5rem' }} />
// //             </a>
// //             <p>HTML5/CSS3</p>
// //             </>
// //            </div>
// //         ) : (
// //            <div className="img-frontend'"> 
// //           <img src={frontend} alt="Frontend" />
// //             </div> 
// //         )}
// //       </div>
// //       <div
// //         className={hovered ? 'sidenav-hovered' : 'sidenav'}
// //         onMouseEnter={handleHover}
// //         onMouseLeave={handleLeave}
// //       >
// //         {hovered ? (
// //          <>
          
// //             <h3>Project Source</h3>
// //             <a href="https://github.com/yashikaverma8112/Side_Navbar-">
// //               <FaGithub size={25} style={{ color: 'white', marginLeft: '1.5rem' }} />
// //             </a>
// //             <p>HTML5/CSS3</p>
// //             </>
// //         ) : (
         
// //           <img src={sidenav} alt="sidenav" />
          
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projectbox;

// import React, { useState } from 'react';
// import './Projectbox.css';
// import img from "../../public/img/img.js";
// const Projectbox = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const images = [
//     { fname: '../assets/frontend.png', title: 'Project 1', link: 'https://github.com/yashikaverma8112/Frontend', content: 'Description for Project 1' },
//     { fname:{}, title: 'Project 2', link: 'https://github.com/yashikaverma8112/Side_Navbar-', content: 'Description for Project 2' },
//     // Add more image objects with unique content for each project
//   ];

//   const handleHover = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div className="projects">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={hoveredIndex === index ? 'img-frontend-hovered' : 'img-frontend'}
//           onMouseEnter={() => handleHover(index)}
//           onMouseLeave={handleLeave}
//         >
//           {hoveredIndex === index ? (
//             <>
//               <h1>{image.title}</h1>
//               <a href={image.link}>
//                 <FaGithub size={25} style={{ color: 'white', marginLeft: '2rem' }} />
//               </a>
//               <p>{image.content}</p>
//             </>
//           ) : (
//             <>
//             <img src= {image.fname} alt={`Project ${index + 1}`} />
      
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projectbox;

