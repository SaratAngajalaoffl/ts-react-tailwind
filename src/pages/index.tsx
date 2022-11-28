import { Route, Routes } from "react-router-dom";

import HomePage from "pages/home";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default MainRouter;
