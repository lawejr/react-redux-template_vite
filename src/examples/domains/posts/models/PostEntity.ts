import { alias, serializable } from 'serializr';
import { BaseEntity } from '~/domains/common/BaseEntity';

export class PostEntity extends BaseEntity {
  @serializable
  id: number = 0;

  @serializable
  title: string = '';

  @serializable(alias('body'))
  text: string = '';

  @serializable
  userId: number = 0;

  static fromJSON(json: anyObject) {
    const post = new PostEntity();

    Object.keys(post).forEach(key => {
      if (json[key] !== undefined) {
        Object.defineProperty(post, key, { value: json[key] });
      }
    });

    return post;
  }
}
