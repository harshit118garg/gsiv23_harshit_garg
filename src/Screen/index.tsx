import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SingleMoviePage } from "../pages/SingleMoviePage";

export const Screen = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage navProp={true}/>} />
      <Route path="movie/:id" element={<SingleMoviePage  navProp={false} />} />
    </Routes>
  );
};
