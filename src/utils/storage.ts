class Storage {
  private storage?: globalThis.Storage;

  private static keys = {
    USER_DATA: 'user_data',
    AUTH_TOKEN: 'auth_token',
  };

  constructor(storage?: globalThis.Storage) {
    try {
      this.storage = storage || window.localStorage;
    } catch {
      // eslint-disable-next-line no-alert
      alert(
        'Для корректно работы приложения, пожалуйста, разрешите ему хранить данные в настройках вашего браузера',
      );
    }
  }

  private get storageIsAvailable() {
    try {
      const test = 'test';

      this.storage?.setItem(test, test);
      this.storage?.removeItem(test);

      return true;
    } catch {
      return false;
    }
  }

  private setItem(key: string, value: unknown) {
    if (this.storageIsAvailable) {
      this.storage?.setItem(key, JSON.stringify(value));
    }
  }

  private getItem(key: string) {
    if (this.storageIsAvailable) {
      const savedData = this.storage?.getItem(key);

      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch (_) {
          return savedData;
        }
      }
    }

    return null;
  }

  setAuthToken(data: string) {
    this.setItem(Storage.keys.AUTH_TOKEN, data);
  }

  getAuthToken(): string | null {
    return this.getItem(Storage.keys.AUTH_TOKEN);
  }

  clear() {
    this.storage?.clear();
  }
}

const storage = new Storage();
Object.freeze(storage);

export { storage };
