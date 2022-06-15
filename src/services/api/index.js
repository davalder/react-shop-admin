const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: `${API}/api/${VERSION}/products`,
    postProducts: `${API}/api/${VERSION}/products`,
    putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
    postAvailableUsers: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategories: `${API}/api/${VERSION}/categories`,
    postCategories: `${API}/api/${VERSION}/categories`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategoriesProducts: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    upload: `${API}/api/${VERSION}/files/upload`,
    getFileName: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
