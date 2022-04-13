import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import TrainingPlans from "./components/pages/TrainingPlans";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/training-plans" element={<TrainingPlans />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Layout>
  );
}

export default App;
