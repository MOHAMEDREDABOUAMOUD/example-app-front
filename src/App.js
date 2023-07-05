import * as React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import EditProduct from './components/EditComponent'
import CreateProduct from './components/CreateComponent'
import ProductList from './components/ListComponent'

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link className='navbar-brand' to={"/"}>Products</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link active" to={"/"}>Products</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link active" to={"/product/create"}>Create</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
       <Route path='/product/create' element={<CreateProduct/>}></Route>
       <Route path='/product/edit/:id' element={<EditProduct/>}></Route>
       <Route path='/' element={<ProductList/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
