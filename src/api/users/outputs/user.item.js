export const userItemOutputSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      example: '63269cc6 - ebed - 526f- a7c1 - b422e66794b5'
    },
    fullName: {
      type: 'string',
      example: 'Vernon Frank',
    },
    firstName: {
      type: 'string',
      example: 'Vernon',
    },
    lastName: {
      type: 'string',
      example: 'Frank',
    },
    gender: {
      type: 'string',
      example: 'Female',
    },
    birthday: {
      type: 'string',
      example: 'Jun 20th, 1979',
    },
    age: {
      type: 'number',
      example: 42,
    },
    avatar: {
      type: 'string',
      example: 'https://api.adorable.io/avatars/200/Vernon-Frank',
    },
    address: {
      type: 'string',
      example: '543 Grand Ave., New Windsor, NY 12553',
    },
    zip: {
      type: 'string',
      example: '12553',
    },
    state: {
      type: 'string',
      example: 'NY',
    },
    phone: {
      type: 'string',
      example: '(630) 667-6994',
    },
    email: {
      type: 'string',
      example: 'jicce@weec.ng',
    },
    twitter: {
      type: 'string',
      example: '@ciwid',
    },
    ssn: {
      type: 'string',
      example: '621-69-3398',
    },
  }
};
