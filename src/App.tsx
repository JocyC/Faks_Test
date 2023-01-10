import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ShowPage, ErrorPage, CreateClaimPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/claims/:id" element={<ShowPage />} />
        <Route path="/create-claim" element={<CreateClaimPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
