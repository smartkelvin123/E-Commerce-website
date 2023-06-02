const Base_url = "http://localhost:3001";

export const fetcher = async (url) => {
  let responseObject = { errorMessage: "", data: [] };
  try {
    const response = await fetch(Base_url + url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    responseObject.errorMessage = "";
    responseObject.data = data;
    return responseObject;
  } catch (error) {
    responseObject.errorMessage = error.message;
    return responseObject;
  }
};

export const getCategories = () => {
  return fetcher("/categories");
};
// export const getProducts = (id) => {
//   return fetcher(`/products?catid=` + id);
// };

export const getProducts = (id) => {
  return fetcher(`/products?catid=${id}`);
};

export const getProductById = (id) => {
  return fetcher("/products/" + id);
};

// export const getProducts = (category) => fetcher(`/products?catid=${category}`);

// export const getProducts = (category) => {
//   return fetcher(`/products?catid=` + id);
// };
