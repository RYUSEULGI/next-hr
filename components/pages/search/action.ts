export function getCurrentSearchList(key: string): string[] {
  try {
    const result = localStorage.getItem(key);

    if (!result) {
      return [];
    }

    return JSON.parse(result).reverse();
  } catch (error) {
    return [];
  }
}

export function setCurrentSearch(key: string, value: string) {
  try {
    const items = getCurrentSearchList(key);
    const find = items.find((item) => item === value);

    if (find) {
      return true;
    }

    const copy = items.slice();
    copy.push(value);

    localStorage.setItem(key, JSON.stringify(copy));

    return true;
  } catch (error) {
    return false;
  }
}

export function deleteCurrentSearch(key: string, value: string) {
  try {
    const items = getCurrentSearchList(key);
    const find = items.find((item) => item === value);

    if (!find) {
      return false;
    }

    const newItems = items.slice().filter((item) => item !== value);
    localStorage.setItem(key, JSON.stringify(newItems));

    return true;
  } catch (error) {
    return false;
  }
}

export function deleteAllCurrentSearch(key: string) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}
