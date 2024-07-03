"use client";
import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from "react";
import { handleSignOut, handleLogin } from "@/utils/auth";
import { UserLoginInterface } from "@/interfaces/user_auth";
import { LoginResponse } from "@/interfaces/api_shapes";

interface GlobalContextType {
  isAuthenticated: boolean;
  signIn: ({ email, password }: UserLoginInterface) => Promise<LoginResponse>;
  signOut: () => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(storedAuth);
  }, []);

  const signIn = useCallback(async (values: UserLoginInterface) => {
    const signInStatus = await handleLogin(values);

    if (signInStatus.success === true) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    }
    return signInStatus;
  }, []);

  const signOut = useCallback(async () => {
    await handleSignOut();
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  }, []);

  const value = React.useMemo<GlobalContextType>(
    () => ({ isAuthenticated, signIn, signOut }),
    [isAuthenticated, signIn, signOut]
  );

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};