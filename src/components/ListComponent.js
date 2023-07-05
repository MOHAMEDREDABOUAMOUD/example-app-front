import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        await axios.get("http://127.0.0.1:8000/api/products").then(({data})=>{
            setProducts(data);
        })
    }

    const deleteProduct = async (id) => {
        await axios.delete("http://127.0.0.1:8000/api/products"+id).then(({data})=>{
            console.log(data.message);
            fetchProducts();
        }).catch(({response: {data}})=>{
            console.log(data.message);
        })
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='conl-12'>
                    <Link className="btn btn-primary nb-2 float-end" to={"/product/create"}>Create</Link>
                    <div className='col-12'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Image</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 && (
                                    products.map((row, key)=>(
                                        <tr key={key}>
                                            <td>{row.title}</td>
                                            <td>{row.description}</td>
                                            <td>
                                                <img width="100px" src={`http://127.0.0.1:8000/product/image/${row.image}`} alt="" />
                                            </td>
                                            <td>
                                                <button className="btn btn-primary" onClick={()=>deleteProduct(row.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
