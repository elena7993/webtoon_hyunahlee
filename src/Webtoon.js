import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Background from "./components/Backgound";

const Webtoon = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/sub01/:id" element={<Sub01 />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
        {/* <Background /> */}
      </HashRouter>
    </>
  );
};

export default Webtoon;
