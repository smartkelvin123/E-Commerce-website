const Base_url = "http://localhost:3001";

export const fetcher = async (url) => {
  const response = await fetch(Base_url + url);
  const data = await response.json();
  return data;
};

// export const fetcher = url => {
//   return fetch(Base_url + url).
//   then(response => response.json());

// }
