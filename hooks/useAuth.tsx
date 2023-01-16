import axios from 'axios';
import { useState, useEffect } from 'react';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current user from the server
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/user/status', {
          withCredentials: true,
        });
        console.log(res.data);
        if (res.data.isAuthenticated) {
          setUser(res.data);
        }
        setLoading(false);
      } catch (err) {
        console.log('Error fetching user: ', err);
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { user, loading };
};

export { useAuth };
