import { useState, useEffect } from 'react';
import { onAuthStateChange, type User } from '@vocabpal/shared';
import { AuthContext } from '@/contexts/AuthContext';
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ currentUser, isLoading }}>{children}</AuthContext.Provider>;
}
