import { Link } from "@mui/material";

function App() {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    const appLink = "myapp://(app)/home";
    const webLink = "https://midominio.com/(app)/home";

    // Intenta abrir la app
    window.location.href = appLink;

    // Si la app no está instalada, redirige a la web después de 1.5 segundos
    setTimeout(() => {
      window.location.href = webLink;
    }, 1500);
  };

  return (
    <div>
      <h5>Deeplinking</h5>
      <p>Enlaces de prueba para deep linking:</p>
      <ul>
        <li>
          <a
            href="myapp://(app)/home/blocked-balance"
            // onclick="window.location.href='https://midominio.com/(app)/home';
            // setTimeout(() => { window.location.href = 'https://midominio.com/(app)/home'; }, 1500);"
          >
            Abrir blockedBalance en la app
          </a>
        </li>
        <li>
          <Link
            href="myapp://(app)/home/blocked-balance"
            onClick={handleClick}
            underline="none"
          >
            Abrir en la App
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
