import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';
import { UserDto } from '../@types/User';

export interface User {
  id: number;
  name: string;
  email?: string;
  [key: string]: any;
}

type State = UserDto | null;

type Action =
  | { type: 'ADD_USER'; payload: UserDto }
  | { type: 'UPDATE_USER'; payload: UserDto }
  | { type: 'DELETE_USER'; payload: null };


const initialState: State = null;
type DispatchAction = Dispatch<Action>;

const userReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_USER':
      return action.payload;

    case 'UPDATE_USER':
      return action.payload;

    case 'DELETE_USER':
      return null;

    default:
      return state;
  }
};

const UserContext = createContext<[State, DispatchAction] | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): [State, DispatchAction] => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
};

export const addUser = (dispatch: DispatchAction, user: UserDto) => {
  dispatch({ type: 'ADD_USER', payload: user });
};

export const updateUser = (dispatch: DispatchAction, user: UserDto) => {
  dispatch({ type: 'UPDATE_USER', payload: user });
};

export const deleteUser = (dispatch: DispatchAction, user: null) => {
  dispatch({ type: 'DELETE_USER', payload: user });
};
