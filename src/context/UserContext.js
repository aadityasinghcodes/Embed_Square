import React, { createContext, useReducer } from 'react';

const initialState = {
  user: null,
};

const UserContext = createContext(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const authenticateUser = (username, password) => {
    const users = [
      { username: 'Aaditya', password: 'Aaditya23', name: 'Aaditya', role: 'Admin', designation: 'Manager' },
      { username: 'Subrato', password: 'Subaru1', name: 'Subrato', role: 'User', designation: 'Developer' },
      { username: 'Ravi', password: 'Ravi12', name: 'RaVi', role: 'User', designation: 'Designer' },
    ];
    
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
    return user;
  };

  return (
    <UserContext.Provider value={{ user: state.user, authenticateUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
