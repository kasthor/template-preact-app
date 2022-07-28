import Router from "preact-router";
import { Home } from "../pages/Home";
import { UIComponents } from "../pages/UIComponents";

export const Routes = () => {
  return (
    <Router>
      <UIComponents path="ui-components"/>
      <Home default />
    </Router>
  );
};
