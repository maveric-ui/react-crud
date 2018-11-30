import EmployeesContainer from '../containers/EmployeesContainer/EmployeesContainer';
import EmailContainer from '../containers/EmailContainer/EmailContainer';

export const MainRoutes = [
  {
    path: "/employees/",
    exact: true,
    component: EmployeesContainer,
  },
  {
    path: "/email/",
    exact: true,
    component: EmailContainer,
  }
];
