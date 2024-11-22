const express = require('express');
const path = require('path');
// const {ApolloServer} = require('@apollo/server);
// const {expressMiddleware} =require('@apollo/server/express4')

// const {typeDefs, resolvers} = require('./schemas')
const db = require('./config/connection');

/*  REMOVE line10 */
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({typeDefs,resolvers,});

//WE WRAP THIS WITH startApolloSerever line 16-34
// const startApolloServer = async() => { await server.start();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/graphql',expressMiddleware(server));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  /* app.get('*',(req,res)=> {res.sendFile(path.join(_dirname,'../client/dist/index.html'));}); */
}

/*  REMOVE  line 28 */
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
/* console.log('use graphQL at http://localhost:${PORT}/graphql'); */
});
// }
// startApolloServer();