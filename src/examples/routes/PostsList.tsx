import { Link } from 'react-router-dom';
import { urls } from '~src/router/urls';
import { PostsList } from '~src/examples/components/PostsList';
import { Article } from '~src/examples/components/Article';

export function PostsListPage() {
  return (
    <>
      <Link to={urls.POST_CREATE}>Create new post</Link>
      <br />
      ==============================================================================================
      <br />
      <Article />
      ==============================================================================================
      <br />
      <br />
      <br />
      <PostsList />
    </>
  );
}
