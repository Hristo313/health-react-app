import { redirect } from 'react-router-dom';
import Home from './home/home';
import Medications from './medications/medications';
import HealthIndicators from './health-indicators/health-indicators';
import Appointments from './appointments/appointments';
import Profile from './profile/profile';
import Emergency from './emergency/emergency';

export const routes = [
  { index: true, loader: () => redirect('home') },
  { path: 'home', element: <Home />, text: 'Home' },
  { path: 'medications', element: <Medications />, text: 'Medications' },
  { path: 'health-indicators', element: <HealthIndicators />, text: 'Health Indicators' },
  { path: 'appointments', element: <Appointments />, text: 'Appointments' },
  { path: 'profile', element: <Profile />, text: 'Profile' },
  { path: 'emergency', element: <Emergency />, text: 'Emergency' }
];
