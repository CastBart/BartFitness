import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import TrainingPlansPage from "./components/pages/TrainingPlansPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to='/home'/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/training-plans" element={<TrainingPlansPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Layout>
  );
}

export default App;
