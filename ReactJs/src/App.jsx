import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyRoute from './pages/MyRoute';
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// function Hello({name}){
//   return <div>
//     <h1>{name}</h1>
//   </div>
// }


// function App() {
//   return (
//     <>
//       <Header />
//       <Hello name="Đào Xuân Hải" />
//           <MyRoute path="/myroute" element={<HomePage/>} />
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/Home" element={<Navigate to="/"/>} />
//           <Route path="/About" element={<AboutPage />} />
//           <Route path="/Login" element={<LoginPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   )
// }


function App(){
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
export default App
