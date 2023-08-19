/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./index.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MoviesList from "./pages/movies/MoviesList";
import Nav from "./components/Nav";

function App() {
  return (
    <>
            <Nav />

      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
