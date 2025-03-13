import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h5>Deeplinking</h5>
      <p>Enlaces de prueba para deep linking:</p>
      <ul>
        <li>
          {/* Enlace usando el scheme personalizado */}
          <a href="myapp://home" target="_blank">
            Abrir Home con esquema personalizado
          </a>
        </li>
        <li>
          {/* Enlace a la ruta "/profile" de tu SPA */}
          <Link to="/profile">Ir a la página de Perfil (SPA)</Link>
        </li>
        <li>
          {/* Enlace a la ruta "/profile" de tu SPA */}
          <Link to="/products">
            Ir a la página de productos usando LINK (SPA)
          </Link>
        </li>
        <li>
          {/* Enlace usando el scheme personalizado */}
          <a href="myapp://products" target="_blank">
            Abrir Products con esquema personalizado
          </a>
        </li>
        <li>
          {/* Enlace usando el scheme personalizado */}
          <a href="myapp://profile" target="_blank">
            Abrir Profile con esquema personalizado
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
