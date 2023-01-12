import { useGetPostQuery } from '~/examples/api';

export function Article() {
  // Берём данные с сервера
  const { data: post, isFetching, isSuccess } = useGetPostQuery('9');
  // Если в сторе уже есть данные в массиве, можно достать конкретный объект без запроса к серверу
  // const {
  //   data: posts = [],
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetPostsQuery(undefined, {
  //   selectFromResult: ({ data }) => ({
  //     post: data?.find(post => post.id === 111),
  //   }),
  // });

  let content;

  if (isFetching) {
    content = <p>fetching post...</p>;
  } else if (isSuccess) {
    content = (
      <>
        <p>Exact post #{post.id}</p>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </>
    );
  }

  return <article>{content}</article>;
}
