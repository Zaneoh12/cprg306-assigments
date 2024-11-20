import { AuthContextProvider } from "./_Utils/auth-context";
 
const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
 
export default Layout;