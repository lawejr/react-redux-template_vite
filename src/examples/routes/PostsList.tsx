import { Link } from 'react-router-dom';
import { urls } from '~/router/urls';
import { PostsList } from '~/examples/components/PostsList';
import { Article } from '~/examples/components/Article';

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
