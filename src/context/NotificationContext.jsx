import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [enabled, setEnabled] = useState(true);

  const addNotification = (msg) => {
    if (!enabled) return;
    setNotifications((prev) => [...prev, msg]);
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, enabled, setEnabled }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification = () => useContext(NotificationContext);