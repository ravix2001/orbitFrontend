// import { useEffect, useState } from 'react';

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Check if user already has a preference
//     return localStorage.getItem('theme') === 'dark' || 
//       (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       root.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   return (
//     <button
//       onClick={() => setDarkMode(!darkMode)}
//       className=" w-4 hover:text-rose-400 transition-all duration-300"
//     >
//       <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-xl`} />
//     </button>
//   );
// };

// export default DarkModeToggle;
