import EmployeesContainer from '../containers/EmployeesContainer/EmployeesContainer';
import EmailContainer from '../containers/EmailContainer/EmailContainer';

export const MainRoutes = [
  {
    path: "/",
    exact: true,
    component: EmployeesContainer,
  },
  {
    path: "/employees/",
    component: EmployeesContainer,
  },
  {
    path: "/email/",
    component: EmailContainer,
  }
];
