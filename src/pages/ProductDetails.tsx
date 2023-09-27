import React, { useState, useEffect } from 'react';
import Product from '../models/product';
//import { PRODUCTS } from '../models/products';
import { useParams } from 'react-router-dom';
//import ProductService from '../services/ProductService';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        /*
        PRODUCTS.forEach(produit => {
            if (Number(id) === produit.id) {
                setProduct(produit);
            }
        })
        */
    }, [id]);

    return (
        <div className='container'>
            {
                product ? (
                    <div className='row'>
                        <div>
                            <div className='col s10 offset-s2 m6 offset-m3 l4 offset-l2' style={{ marginTop: '10px' }}>
                                <div className="card-image">
                                    <img src={product.picture}
                                        alt={product.name}
                                        style={{ width: '200px', maxWidth: '500px', margin: '0 auto' }}
                                    />
                                </div>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <table className='bordered striped col s12 m12 l6 offset-l3'>
                                        <th className='right'>
                                            <td style={{ fontWeight: 'bold' }}>Quantité</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    max={product.quantity}
                                                    min={1} step={1}
                                                    defaultValue={1}
                                                    maxLength={2}
                                                    style={{ width: '70px' }}
                                                    id='qte'
                                                />
                                            </td>
                                            <td>
                                                <button style={{ padding: '10px 5px', backgroundColor: '#0288d1', color: 'white', borderRadius: '5px', border: 'none' }}>Ajouter au panier</button>
                                            </td>
                                        </th>
                                        <tbody>
                                            <tr className='hoverable'>
                                                <td style={{ fontWeight: 'bold' }} className='col s2 offset-s2 l3 offset-l2'>Nom</td>
                                                <td className='col offset-s1 l4'>{product.name}</td>
                                            </tr>
                                            <tr className='hoverable'>
                                                <td style={{ fontWeight: 'bold' }} className='col s2 offset-s2 l3 offset-l2'>Marque</td>
                                                <td className='col offset-s1 l4'>{product.brand}</td>
                                            </tr>
                                            <tr className='hoverable'>
                                                <td style={{ fontWeight: 'bold' }} className='col s2 offset-s2 l3 offset-l2'>Prix</td>
                                                <td className='col offset-s1 l4'>{product.price}€</td>
                                            </tr>
                                            <tr className='hoverable'>
                                                <td style={{ fontWeight: 'bold' }} className='col s2 offset-s2 l3 offset-l2'>État</td>
                                                <td className='col offset-s1 l4'>{product.state}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className='section col s12 m12 l6 offset-l3'>
                                        <h4>Description</h4>
                                        {product.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h4 className="center">Aucun article à afficher.</h4>
                )
            }
        </div >
    );
};

export default ProductDetail;