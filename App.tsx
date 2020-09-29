import 'reflect-metadata';
import * as SQLite from 'expo-sqlite';
import { createConnection, getConnection } from 'typeorm-expo/browser';
import React, { useEffect, useState } from 'react';

import setSQLiteOnGlobalThis from './src/utils/setSQLiteOnGlobalThis';

import { Appointment } from './src/database/entities/Appointment';

import Routes from './src/routes';

setSQLiteOnGlobalThis(SQLite);

const App: React.FC = () => {
  const [connectionReady, setConnectionReady] = useState(false);

  useEffect(() => {
    if (!connectionReady) {
      try {
        const connection = getConnection();
        console.log('Got connction ', connection.name);
      } catch (error) {
        createConnection({
          type: 'expo',
          database: 'weekly_routine',
          synchronize: true,
          entities: [Appointment],
        })
          .then(() => {
            setConnectionReady(true);
            console.log('Connection created');
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }, []);

  if (!connectionReady) return null;

  return <Routes />;
};

export default App;
