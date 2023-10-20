import axios from "axios";
import Product from "../classes/product";

export default class ProductService {
    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");

    static addProduct(product: Product){
        product.created = new Date(product.created);
        if (this.isDev) {
            /*
            return fetch(`http://localhost:3001/shop/news`, {
                method: "POST",
                body: JSON.stringify(product),
                headers: { 'content-type': 'application/json' }
            })
                .then(Response => Response.json())
                .catch(error => this.handleError(error));
            */
           return axios.post(`http://localhost:3001/shop/news`)
           .then(res => res.data)
           .catch(error => this.handleError(error));
        }
    }

    static getProductsByCategory(category: string){
        if (this.isDev) {
            return (
                axios.get(`http://localhost:3001/products?q=${category}`)
                    .then(res => {
                        if (res.data.length > 0) {
                            let products: Array<Product> = [];

                            res.data.forEach((product: Product) => {
                                for (const key in product) {
                                    if ((key === "categories") && (product["categories"].includes(category))) {
                                        products.push(product)
                                    }
                                }
                            });
                            return products;
                        }
                    })
                    .catch(error => this.handleError(error))
            )
        }
    }

    static getProductById(id: string){
        if (this.isDev) {
            return (
                axios.get(`http://localhost:3001/products?id=${id}`)
                    .then(res => {return res.data[0]} )
                    .catch(error => this.handleError(error))
            )
        }
    }

    static updateProduct(product: Product){
        if (this.isDev) {
            /*
            return (
                fetch(`http://localhost:3001/shop/detail/${product.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(product),
                    headers: { 'content-type': 'application/json' }
                })
                    .then(Response => Response.json())
                    .catch(error => this.handleError(error))
            );
            */
            return (
                axios.put(`http://localhost:3001/products?id=${product.id}`)
                    .then(res => res.data)
                    .catch(error => this.handleError(error))
            )
        }
    }

    static deleteProduct(product: Product){
        if (this.isDev) {
            /*
            return fetch('http://localhost:3001/shop//json', {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(Response => Response.json())
                .catch(error => this.handleError(error));
                */
            axios.delete(`http://localhost:3001/products?id=${product.id}`)
        }
    }

    static searchProduct(term: string){
        if (this.isDev) {
            /*
                return fetch(`http://localhost:3001/shop/products?q=${term}`)
                    .then(Response => Response.json())
                    .catch(error => this.handleError(error));
            */
            axios.get(`http://localhost:3001/products?q=${term}`)
                .then(response => response.data)
                .catch(error => this.handleError(error));
        }
    }

    static handleError(error: Error): void {
        console.error(error);
    }

    static getCheckout(userId: number){
        if (this.isDev) {
            return (
                fetch(`http://localhost:3001/checkout}`)
                    .then(Response => Response.json())
                    .catch(error => this.handleError(error))
            );
        }
    }
}