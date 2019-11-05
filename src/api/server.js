const serverUrl = 'https://vdziubak.com/kaleidoscopeServer';

export const getTrail = (id) => {
  return window.fetch(`${serverUrl}/trails/${id}`, {
    method: 'get',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json());
};
