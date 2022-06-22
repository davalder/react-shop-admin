const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
    allProducts: `${API}/api/${VERSION}/products/`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/${VERSION}/products`,
    updateProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
    postAvailableUsers: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories/`,
    addCategory: `${API}/api/${VERSION}/categories`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}/`,
    getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products/`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload`,
    getFileName: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
