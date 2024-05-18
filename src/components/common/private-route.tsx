import { RoutesName } from '../../utils'
import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const navigate = useNavigate()
    if(!localStorage.getItem('accessToken')){
       return <Navigate to={RoutesName.Login}/>
    }
  return <>{children}</>
}

