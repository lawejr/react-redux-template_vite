import { InputHTMLAttributes, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form as FinalForm, Field, FieldRenderProps } from 'react-final-form';
import { useCreateNewPostMutation } from '~/examples/api';
import { PostEntity } from '~/examples/domains/posts/models';
import { urls } from '~/router/urls';

interface FormValues {
  title: string;
  text: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  FieldRenderProps<string, any>;

function TextInput({ input, ...rest }: InputProps) {
  return <input type="text" {...input} {...rest} />;
}

export function PostCreatePage() {
  const [createNewPost, { isLoading: isCreating }] = useCreateNewPostMutation();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      const post = PostEntity.fromJSON(values);
      const result = await createNewPost(post.toServer());

      if ('data' in result) {
        navigate(`/${urls.POST_DETAILS(result.data.id)}`);
      }
    },
    [createNewPost, navigate],
  );

  return (
    <section>
      <h1>Create new post</h1>
      <FinalForm onSubmit={handleSubmit}>
        {({ handleSubmit: onSubmit, form, submitting, pristine }) => (
          <form onSubmit={onSubmit}>
            <Field<string>
              name="title"
              component={TextInput}
              placeholder="title"
            />
            <br />
            <Field<string>
              name="text"
              component={TextInput}
              placeholder="text"
            />
            <br />
            <br />
            <button type="submit" disabled={submitting || pristine}>
              {isCreating ? 'Creating...' : 'Create'}
            </button>
            <button
              type="button"
              onClick={form.reset as any}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </form>
        )}
      </FinalForm>
    </section>
  );
}
