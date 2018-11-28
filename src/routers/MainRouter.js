import EmployeesContainer from '../containers/EmployeesContainer/EmployeesContainer';
import EmailContainer from '../containers/EmailContainer/EmailContainer';

export const MainRoutes = [
  {
    path: "/",
    exact: true,
  },
  {
    path: "/employees/",
    exact: false,
    component: EmployeesContainer,
  },
  {
    path: "/email/",
    exact: false,
    component: EmailContainer,
  }
];
