import React, { useState, useContext, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookie from 'js-cookie';
import endPoints from '../services/api';

export let fetchedToken = null;

const AuthContext = createContext({});

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = Cookie.get('token');
    
    if (token && window.location.pathname !== '/') {
      try {
        console.log(Cookie.get('token'))
        axios.defaults.headers.common['Authorization'] = `${token}`;
        fetchedToken = token;
        const { data: user } = await axios.get(endPoints.users.profile);
        setUser(user);
        console.log(user);
      } catch (error) {
        if (error.response === 401) {
          Cookie.remove('token');
          delete axios.defaults.headers.common['Authorization'];
          window.location.href = '/login';
        }
      }
    } else if (window.location.pathname === '/' || window.location.pathname.includes('/signUp')) {
      setUser(null);
    } else {
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
  };
  const router = useRouter();
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  const login = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(endPoints.auth.login, { email, password }, options);
    if (data.token) {
      const token = data.token;
      Cookie.set('token', token, { expires: 5 });

      axios.defaults.headers.common['Authorization'] = `${token}`;
      const { data: user } = await axios.get(endPoints.users.profile);
      setUser(user);
    }
  };

  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    window.location.href = '/login';
  };

  return {
    user,
    login,
    logout,
  };
}
