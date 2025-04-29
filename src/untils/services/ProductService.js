import axios from 'axios'

const PRODUCT_API_URL = process.env.NEXT_PUBLIC_PRODUCT_API_URL
const ProductApi = API(PRODUCT_API_URL)


const axiosApi = axios.create({
    baseURL,
    headers: {
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})


const ProductService = {

    createProduct: (data) => {
        return ProductApi.post(`/api/products/m`, data, {
            headers: {
              accept: 'application/json',
              'Content-Type': `multipart/form-data;`
            }
          })
      },
}

export default ProductService;