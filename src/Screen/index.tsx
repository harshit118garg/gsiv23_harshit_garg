import { Route, Routes } from "react-router-dom";
import { SingleMovie } from "../components/SingleMovie";
import { HomePage } from "../pages/HomePage";

export const Screen = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage navProp={true}/>} />
      <Route path="movie/:id" element={<SingleMovie navProp={false} />} />
    </Routes>
  );
};
