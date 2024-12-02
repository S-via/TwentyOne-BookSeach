import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// created apollo provider to make request work with the apollo server
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
