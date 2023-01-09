import { serialize } from 'serializr';

export abstract class BaseEntity {
  private static clear = ({ _uid, _type, ...retVal }: any) => retVal;

  toServer(): object {
    return BaseEntity.clear(serialize(this));
  }

  toServerWithMeta(): object {
    return serialize(this);
  }
}
