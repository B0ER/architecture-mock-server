import fastifySwagger from 'fastify-swagger';

export const registerFastifySwagger = server => {
  server.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: '/docs',
    openapi: {
      info: {
        title: 'architecture mock server',
        version: '0.0.1',
      },
      // components: {
      //   securitySchemes: {
      //     bearerAuth: {
      //       type: 'http',
      //       scheme: 'bearer',
      //       bearerFormat: 'JWT',
      //     }
      //   },
      // },
    },
  });
};
