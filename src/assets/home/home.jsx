import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">¡Bienvenido a la Tienda de Camisetas!</h1>
        <p className="lead">Explora las mejores camisetas de fútbol y demuestra tu pasión.</p>
        <a href="/products" className="btn btn-primary btn-lg">Ver Productos</a>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <img src="/path/to/image1.jpg" alt="Camiseta 1" className="img-fluid rounded" />
          <h3 className="text-center mt-2">Camiseta 1</h3>
        </div>
        <div className="col-md-4">
          <img src="/path/to/image2.jpg" alt="Camiseta 2" className="img-fluid rounded" />
          <h3 className="text-center mt-2">Camiseta 2</h3>
        </div>
        <div className="col-md-4">
          <img src="/path/to/image3.jpg" alt="Camiseta 3" className="img-fluid rounded" />
          <h3 className="text-center mt-2">Camiseta 3</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
