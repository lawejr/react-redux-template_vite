import { apiSlice } from './apiSlice';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const postsApi = apiSlice.injectEndpoints({
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPosts: builder.query<Array<Post>, void>({
      // The URL for the request is '/fakeApi/posts'
      query: () => '/posts',
      providesTags: (result = []) =>
        [
          'Post',
          ...result.map(({ id }) => ({ type: 'Post', id })),
        ] as Array<any>,
    }),
    getPost: builder.query<Post, string>({
      query: postId => `/posts/${postId}`,
      providesTags: (result, error, arg) => [{ type: 'Post', id: arg }],
    }),
    createNewPost: builder.mutation<Post, any>({
      query: initialPost => ({
        url: '/posts',
        method: 'POST',
        // Include the entire post object as the body of the request
        body: initialPost,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation({
      query: post => ({
        url: `/posts/${post.id}`,
        method: 'PATCH',
        body: post,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }],
    }),
  }),
});

const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreateNewPostMutation,
  // useEditPostMutation,
} = postsApi;

export {
  useGetPostsQuery,
  useGetPostQuery,
  useCreateNewPostMutation,
  postsApi,
};
