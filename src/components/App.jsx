import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TourDetailsPage from './pages/TourDetailsPage';
import DeleteTourPage from './pages/DeleteTourPage';
import AddTours from './pages/AddTours';
import AddReservation from './pages/AddReservation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-tour" element={<ProtectedRoute><AddTours /></ProtectedRoute>} />
          <Route path="/tour/:id" element={<TourDetailsPage />} />
          <Route path="/delete-tour" element={<ProtectedRoute><DeleteTourPage /></ProtectedRoute>} />
          <Route path="/delete-tour" element={<DeleteTourPage />} />
          <Route path="/add-reservation/:tourId" element={<ProtectedRoute><AddReservation /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
