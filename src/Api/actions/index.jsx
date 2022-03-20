const headers = JSON.stringify({ accept: '*/*' });

export const getCategories = {
    method: 'get',
    url: '/categories',
    headers: headers
}

export const getProducts = {
    method: 'get',
    url: '/products',
    headers: headers
}

//categoryName