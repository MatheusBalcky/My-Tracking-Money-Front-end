import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './App'
import './styles/index.css'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <AppRoutes />
    </QueryClientProvider>
  </React.StrictMode>
);
