import { FormEvent, InputHTMLAttributes, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateNewPostMutation } from '~/examples/api';
import { PostEntity } from '~/examples/domains/posts/models';
import { urls } from '~/router/urls';

function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="text" {...props} />;
}

export function PostCreatePage() {
  const [createNewPost, { isLoading: isCreating }] = useCreateNewPostMutation();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values: FormEvent<HTMLFormElement>) => {
      const post = PostEntity.fromJSON(values);
      const result = await createNewPost(post.toServer());

      if ('data' in result) {
        navigate(`/${urls.POST_DETAILS(result.data?.id)}`);
      }
    },
    [createNewPost, navigate],
  );

  return (
    <section>
      <h1>Create new post</h1>
      <form onSubmit={handleSubmit}>
        <TextInput />
        <br />
        <br />
        <button type="submit">{isCreating ? 'Creating...' : 'Create'}</button>
        <button type="button">Reset</button>
      </form>
    </section>
  );
}
