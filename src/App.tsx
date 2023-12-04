import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShareLayout from "./layouts/ShareLayout";
import { AboutUs, HomePage, WhatNew } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout></ShareLayout>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/what-new" element={<WhatNew></WhatNew>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
