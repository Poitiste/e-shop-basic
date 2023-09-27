import axios from "axios";
import Product from "../models/product";

export default class ProductService {
    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");

    static addProduct(product: Product){
        product.created = new Date(product.created);
        if (this.isDev) {
            return fetch(`http://localhost:3001/shop/news`, {
                method: "POST",
                body: JSON.stringify(product),
                headers: { 'content-type': 'application/json' }
            })
                .then(Response => Response.json())
                .catch(error => this.handleError(error));
        }
    }

    static getProducts(category: string = "bestSeller"){
        if (this.isDev) {
            return (
                axios.get(`http://localhost:3001/shop/${category}`)
                    .then(res => res.data)
                    .catch(error => this.handleError(error))
            )
        }
    }

    static getDetailsProduct(name: string){
        if (this.isDev) {
            return (
                axios.get(`http://localhost:3001/shop/detail/${name}`)
                    .then(res => res.data)
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
                axios.put(`http://localhost:3001/shop/detail/${product.id}`)
                    .then(res => res.data)
                    .catch(error => this.handleError(error))
            )
        }
    }

    static deleteProduct(product: Product){
        if (this.isDev) {
            return fetch('http://localhost:3001/shop//json', {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(Response => Response.json())
                .catch(error => this.handleError(error));
        }
    }

    static searchProduct(term: string){
        if (this.isDev) {
            /*
                return fetch(`http://localhost:3001/shop/products?q=${term}`)
                    .then(Response => Response.json())
                    .catch(error => this.handleError(error));
            */
            axios.get(`http://localhost:3001/shop/products?q=${term}`)
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