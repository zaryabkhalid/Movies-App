import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import MovieDetail from "./components/MovieDetail"
import PageNotFound from "./components/PageNotFound"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
