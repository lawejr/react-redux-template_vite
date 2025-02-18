import { PostEntity } from './models/PostEntity';

export function sortedByTitleLength(posts: Array<PostEntity>) {
  const result = posts.slice();

  result.sort((a: PostEntity, b: PostEntity) => {
    if (a.title.length < b.title.length) {
      return -1;
    }

    if (a.title.length > b.title.length) {
      return 1;
    }

    return 0;
  });

  return result;
}
