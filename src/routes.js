import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

export default {
  REGISTER: {
    path: '/register',
    component: RegisterPage,
  },
  LOGIN: {
    path: '/login',
    component: LoginPage,
  },
  DASHBOARD: {
    path: '/',
    component: DashboardPage,
  },
};
