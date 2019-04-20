import LandingPage from "../routes/LandingPage";
import ExperimentPage from "../routes/ExperimentPage";
import LogInPage from "../routes/LogInPage";
import LogoutPage from "../routes/LogoutPage";
import InitialSetupPage from "../routes/InitialSetupPage";
import AboutPage from "../routes/AboutPage";
import UseCasesPage from "../routes/UseCasesPage";
import EvaluationsPage from "../routes/EvaluationsPage";
import UserPage from "../routes/UserPage";
import ConferencePage from "../routes/ConferencePage";
import NewsPage from "../routes/NewsPage";
import SignupPage from "../routes/SignupPage";
import { Signup } from "../swagger";

const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/usecases",
    component: UseCasesPage,
  },
  {
    path: "/evaluations",
    component: EvaluationsPage,
  },
  {
    path: "/playground",
    component: ExperimentPage,
  },
  {
    path: "/login",
    component: LogInPage,
  },
  {
    path: "/logout",
    component: LogoutPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
  {
    path: "/initsetup",
    component: InitialSetupPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/my",
    component: UserPage,
  },
  {
    path: "/conference",
    component: ConferencePage,
    exact: false,
  },
  {
    path: "/news",
    component: NewsPage,
    exact: false,
  },
];

export default routes;
