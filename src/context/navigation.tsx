"use client"

import { useState, useContext, createContext } from 'react';

export interface Context {
  isActive: boolean;
  onChange: (incoming?: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void
}

const Context = createContext<Context>({
  isActive: false,
  onChange: (_incoming?: boolean) => void 0,
  activeTab: "/",
  setActiveTab: (_tab: string) => void 0
});

export interface Props {
  children: React.ReactNode;
}

export default function ProvideNavigation({ children }: Props) {
  const context = useProvideNavigation();
  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

export const useNavigation = (): Context => {
  return useContext(Context);
};

function useProvideNavigation(): Context {
  const [isActive, setIsActive] = useState(false)
  const [activeTab, setActiveTab] = useState('/')

  return {
    isActive,
    onChange: (incoming?: boolean) => {
      if (incoming !== undefined) setIsActive(incoming)
      else setIsActive(previous => !previous)
    },
    activeTab,
    setActiveTab
  };
}
