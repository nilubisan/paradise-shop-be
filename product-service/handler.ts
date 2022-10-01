import productService from './services/productService.js'
import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

  export const getProductsList = async (_event: APIGatewayEvent, _context: Context) => {
    const products = await productService.getAllProducts()
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  }

  export const getProductsById = async (event: APIGatewayEvent, _context: Context) => {
    let productId = event?.pathParameters?.productId
    if(typeof productId !== 'undefined') {
      let product = await productService.getProductsById(+productId)
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    }
  }