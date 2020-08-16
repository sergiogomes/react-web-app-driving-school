export async function getLocalStorage(key) {
  const data = window.localStorage.getItem(key);
  if (data) {
    return data;
  } else {
    return null;
  }
}

export async function postLocalStorage(key, object) {
  window.localStorage.setItem(key, JSON.stringify(object));
  return `${key} saved!`;
}

export async function putLocalStorage(key, object) {
  window.localStorage.setItem(key, JSON.stringify(object));
  return `${key} edited!`;
}
