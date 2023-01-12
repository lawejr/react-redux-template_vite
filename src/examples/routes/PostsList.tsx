import { Link } from 'react-router-dom';
import { Article } from '~/examples/UIKit/Article';
import { PostsList } from '~/examples/UIKit/PostsList';
import { urls } from '~/router/urls';

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
