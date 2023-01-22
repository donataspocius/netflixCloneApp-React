import { AuthProvider } from "./AuthContext";
import { ContentProvider } from "./ContentContext";

const ContextProvider = ({ children }) => {
  return (
    <ContentProvider>
      <AuthProvider>{children}</AuthProvider>
    </ContentProvider>
  );
};

export { ContextProvider };
