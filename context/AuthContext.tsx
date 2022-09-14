import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { api } from './../services/api';

interface IAuthParams {
     part: string;
     q: string;
     key: string;
   }

   interface IProps {
     children: React.ReactElement;
   }

    export const AuthContext: React.FunctionComponent<IProps> = ({ children }) => {
     const [data, setData] = React.useState<IAuthParams>({} as IAuthParams);
     const [loading, setLoading] = React.useState(false);

     const handleApi = (params: IAuthParams) => {
          const data = {
            part: params.part,
            q: params.q,
            key: params.key
          };
          console.log(data);

          try {
               await api.get('search', data);
               console.log(data);
    }
