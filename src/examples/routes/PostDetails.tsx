import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '~/examples/api/postsApi';
import { PostEntity } from '~/examples/domains/posts/models/PostEntity';
import { useDeserialized } from '~/hooks/useDeserialized';

export function PostDetailsPage() {
  const { postId = '' } = useParams();

  const {
    data: postData = {},
    isFetching,
    isSuccess,
  } = useGetPostQuery(postId);
  const post = useDeserialized(PostEntity, postData);

  let content;
  if (isFetching) {
    content = <h1>Loading...</h1>;
  } else if (isSuccess) {
    content = (
      <article>
        <p>#{post.id}</p>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
        <p>by user #{post.userId}</p>
      </article>
    );
  }

  return <section>{content}</section>;
}
