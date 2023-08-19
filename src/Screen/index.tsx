import { Route, Routes } from "react-router-dom";
import { ScreenBody } from "../components/ScreenBody";
import { SingleMovie } from "../components/SingleMovie";

export const Screen = () => {
  return (
    <Routes>
      <Route path="/" element={<ScreenBody navProp={true}/>} />
      <Route path="movie/:id" element={<SingleMovie navProp={false} />} />
    </Routes>
  );
};
