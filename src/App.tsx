import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChatRoutes } from './features/chat';

const queryClient = new QueryClient();
const routes = {
  Element: <Outlet />,
  children: [{ path: '/chat/*', element: <ChatRoutes /> }],
};

const router = createBrowserRouter([routes]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
