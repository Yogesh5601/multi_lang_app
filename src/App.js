
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from './RootLayout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashbord from './Dashbord';
import Home from './components/home/Home';
import About from './components/about/About';


function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashbord />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);


  return (
    <>
      <RouterProvider router = {router}/>
    </>
  );
}

export default App;
