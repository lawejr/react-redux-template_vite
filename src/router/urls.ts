export const urls = {
  ROOT: '/',
  LOGIN: '/login',
  POST_DETAILS: (id: string | number = ':postId') => `posts/${id}`,
  POST_CREATE: 'posts/create',
  STATES_EXAMPLE: 'states-example',
};
