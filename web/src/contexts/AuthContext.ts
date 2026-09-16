import { createContext } from 'react';
import type { User } from '@vocabpal/shared/';
export const AuthContext = createContext<
  { currentUser: User | null; isLoading: boolean } | undefined
>(undefined);
