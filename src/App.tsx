import SidebarWithHeader from "./components/Sidebar/sidebar";
import Dashboard from "./components/Dashboard/dashboard";
import UsersCreate from "./pages/CreateUser";

export const App = () => (
  <>
    <SidebarWithHeader>
      <UsersCreate />
    </SidebarWithHeader>
  </>
);
