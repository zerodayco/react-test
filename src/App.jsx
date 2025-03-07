import './App.css';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import RestrictedRoute from './routes/RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader/Loader';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import PrivateRoute from './routes/PrivateRoute';
import TrackerPage from './pages/TrackerPage/TrackerPage';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="signup"
            element={<RestrictedRoute component={SignUpPage} />}
          />
        </Route>
        <Route
          path="signin"
          element={<RestrictedRoute component={SignInPage} />}
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute>
              <TrackerPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
