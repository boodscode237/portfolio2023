import {
    BrowserRouter, Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom"

import './App.css';
import Home from "./component/Home/Home";
import About from "./component/AboutMe/About";
import RootLayout from "./component/Layout/RootLayout";
import Education from "./component/Education/Education";
import Experience from "./component/Experience/Experience";
import Projects from "./component/Projects/Projects";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='education' element={<Education />}/>
            <Route path='experience' element={<Experience />}/>
            <Route path='projects' element={<Projects />}/>
        </Route>
    )
)

function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
