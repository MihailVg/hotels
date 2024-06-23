import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutesData } from '../../types/routes.type';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesData.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
