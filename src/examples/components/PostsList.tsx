import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from '~src/examples/api';
import { useDeserialized } from '~src/hooks';
import { sortedByTitleLength } from '~src/examples/domains/posts';
import { PostEntity } from '~src/examples/domains/posts/models';

export function PostsList() {
  const {
    data: postsData = [],
    isLoading,
    isSuccess,
    isError,
    error,
    // refetch // функция для перезапроса данных с сервера
  } = useGetPostsQuery();

  const posts = useDeserialized(PostEntity, postsData);
  const sortedPosts = useMemo(() => sortedByTitleLength(posts), [posts]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <ul>
        {sortedPosts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>#{post.id}</Link>
          </li>
        ))}
      </ul>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <section>
      <h3>Posts example</h3>
      {content}
    </section>
  );
}
