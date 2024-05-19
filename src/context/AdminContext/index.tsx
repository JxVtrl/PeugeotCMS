'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';

import { useRouter } from 'next/router';
import { AdminProps } from '@/interfaces/Admin.interface';
import { admins_mock } from '@/data/admins';

type AdminContextProps = {
  adminList: AdminProps[];
  setAdminList: React.Dispatch<React.SetStateAction<AdminProps[]>>;
  
};

const AdminContext = createContext({} as AdminContextProps);

export function AdminProvider({ children }: any) {
const [adminList, setAdminList] = useState<AdminProps[]>(admins_mock);

  const value = {
    adminList,
    setAdminList,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  return useContext(AdminContext);
}
