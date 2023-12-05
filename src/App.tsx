import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShareLayout from "./layouts/ShareLayout";
import { HomePage, UpComing, WhatNew } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout></ShareLayout>}>
          <Route index element={<HomePage></HomePage>}></Route>

          <Route path="/about-us" element={<UpComing></UpComing>}></Route>

          <Route path="/products" element={<UpComing></UpComing>}></Route>

          <Route path="/services" element={<UpComing></UpComing>}></Route>

          <Route path="/upcoming" element={<UpComing></UpComing>}></Route>

          <Route path="/about-us" element={<UpComing></UpComing>}></Route>

          <Route path="/support" element={<UpComing></UpComing>}></Route>

          <Route path="/what-new" element={<WhatNew></WhatNew>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
