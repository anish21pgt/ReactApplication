import { Route, Navigate } from 'react-router-dom';

const GuardedRoute = ({ element: Element, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      element={auth === true ? <Element /> : <Navigate to="/" replace />}
    />
  );
};

export default GuardedRoute;
