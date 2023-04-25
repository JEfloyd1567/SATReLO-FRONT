import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const AuthRouter = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/*" element={<Home />} />
    </Routes>
  )
}