import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import PageNotFound from "./pages/PageNotFound";

const Webtoon = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/sub01/:id" element={<Sub01 />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default Webtoon;
