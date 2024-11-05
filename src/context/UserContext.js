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
      { username: 'user1', password: 'password1', name: 'User One', role: 'Admin', designation: 'Manager' },
      { username: 'user2', password: 'password2', name: 'User Two', role: 'User', designation: 'Developer' },
      { username: 'user3', password: 'password3', name: 'User Three', role: 'User', designation: 'Designer' },
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
