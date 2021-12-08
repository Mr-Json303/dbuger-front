// *React Imports
import React from "react";
import axios from 'axios';
// *Local Imports
import AxiosManager from "../components/config/axios";

// *Context definitions
var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.token,
        email: action.email,
        id: action.id,
      };
    case "LOGOUT":
      return {
        ...state,
        token: undefined,
        email: undefined,
        id: undefined,
      };
    default: {
      throw new Error(`Acción no encontrada, tipo: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {

  const storagedToken = localStorage.getItem('token')

  var [state, dispatch] = React.useReducer(userReducer, {
    token: storagedToken,
    email: undefined,
    id: undefined,
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

// **** codigo para procesar las acciones
function loginUser(dispatch, token, email, id, history) {

  dispatch({
    type: 'LOGIN',
    token: token,
    email: email,
    id: id,
  });
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
  

  history.push("/app");

}

async function verifyToken(dispatch, token, history) {

  const data = {
    token: token
  }

  await AxiosManager.post("/verifyToken", data).then((res) => {

    dispatch({
      type: 'LOGIN',
      token: res.data.data.token,
      email: res.data.data.email,
      id: res.data.data.id,
    });
    axios.defaults.headers.common.Authorization = `Bearer ${res.data.data.token}`;
    localStorage.setItem('token', token);
    localStorage.removeItem('verifyProcess');
    history.push("/app");

  });
}

function logout(dispatch, history) {
  dispatch({
    type: 'LOGOUT',
    token: undefined,
    email: undefined,
    id: 0,
  });

  delete axios.defaults.headers.common.Authorization;
  localStorage.removeItem('token');
  localStorage.removeItem('verifyProcess');
  history.push("/login");

}
//************************
//* List selected context*
//************************
// *<>
const CustomContext = React.createContext(null);
const SetCustomContext = React.createContext(null);

export function useCustomContext() {

  var context = React.useContext(CustomContext);
  if (context === undefined) {
    throw new Error("useListSelected must be used within a UserProvider");
  }
  return context;
}

export function useSetCustomContext() {

  var context = React.useContext(SetCustomContext);
  if (context === undefined) {
    throw new Error("useSetListSelected must be used within a UserProvider");
  }
  return context;
}

function CustomContextReducer(state, {type, payload}) {
  switch (type) {
    case 'main': {
      return {...state, listSelected: payload}
    }
    case 'secondary': {
      return {...state, listSelected: payload}
    }
    case 'currentProject':{
      return {...state, currentProject: payload}
    }

    case 'CPxSecondary':{
      return {
        ...state,
        currentProject: payload.currentProject,
        listSelected: payload.listSelected
      }
    }

    // TODO case 'logout': sets custom context to null

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export function CustomContexProvider({ children }) {

  const [state, dispatch] = React.useReducer(CustomContextReducer, 
    {
      currentProject: {
        id: undefined,
        name: undefined,
      },
      listSelected: 'main',
    })


  return (
    <CustomContext.Provider value={state}>
      <SetCustomContext.Provider value={dispatch}>
        {children}
      </SetCustomContext.Provider>
    </CustomContext.Provider>
  )

}

// *</>
//*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export { UserProvider, useUserState, useUserDispatch, loginUser, logout, verifyToken }