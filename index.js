const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolver');
require('dotenv').config({ path: '.env' });

console.log(process.env.BBDD);
mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
    retryWrites: true,
  },
  (err, _) => {
    if (err) {
      console.log(err);
      console.log('Error de conexion');
    } else {
      console.log('conexion correcta');
      server();
    }
  },
);

function server () {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
    // context: ({ req }) => {
    //   const token = req.headers.authorization;

    //   if (token) {
    //     try {
    //       const user = jwt.verify(
    //         token.replace('Bearer ', ''),
    //         process.env.SECRET_KEY,
    //       );
    //       return {
    //         user,
    //       };
    //     } catch (error) {
    //       console.log('#### ERROR ####');
    //       console.log(error);
    //       throw new Error('Token invalido');
    //     }
    //   }
    // },
  });

  serverApollo.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log('###############################');
    console.log(`Servidor listo en la url ${url}`);
    console.log('###############################');
  });
};
