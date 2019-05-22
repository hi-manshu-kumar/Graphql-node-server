import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';


const startServer = async () => {
    const app = express();
    
    mongoose.connect('mongodb://localhost:27017/qraphqltest', {useNewUrlParser: true});

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
      
    server.applyMiddleware({ app }); // app is from an existing express app
      
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
};

startServer();