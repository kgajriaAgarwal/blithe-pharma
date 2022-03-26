const headers = JSON.stringify({ accept: '*/*' });

export const getCategories = {
    method: 'get',
    url: '/api/categories',
    headers: headers
}

export const getProducts = {
    method: 'get',
    url: '/api/products',
    headers: headers
}

export const signup = {
    url: '/auth/signup',
    method: 'POST',
    data: {},
    headers: {
      'Content-Type': 'application/json'
    }, 
    showResultMessage: false,
    showErrorMessage: true,
}