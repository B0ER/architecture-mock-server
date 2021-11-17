import fastify from 'fastify';
import fastifyResponseValidation from 'fastify-response-validation';
import { ajv } from './libs/ajv';
import { endpointRouter } from './api';
import { graphQLRouter } from './graphql';
import { registerFastifySwagger } from './libs/fastify-swagger';


const PORT = Number(process.env.PORT) || 3000;


const startServer = async () => {
  const server = fastify();

  if (process.env.NODE_ENV !== 'production') {
    registerFastifySwagger(server);
  }

  server.register(fastifyResponseValidation);

  server.setValidatorCompiler(({ schema }) => ajv.compile(schema));

  server.register(endpointRouter);
  server.register(graphQLRouter);
  await server.listen({ port: PORT, host: '0.0.0.0' });

  server.ready(() => {
    const routes = server.printRoutes();
    console.log(`Available Routes:\n${routes}`);
  });
};

export const bootstrap = async () => {
  try {
    await startServer();
  } catch (err) {
    // TODO: LOGGER
    console.error(err);
    process.exit(1);
  }
};
