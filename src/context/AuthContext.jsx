import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "Faizan Khan",
    email: "faizankhan123@gmail.com",
    bio: "Passionate BCA student | Lover of coding and technology.",
    className: "BCA - Semester 6",
    image: ""
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);