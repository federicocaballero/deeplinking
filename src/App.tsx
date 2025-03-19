import { Link } from "@mui/material";

function App() {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    const appLink = "AgroCarteiraApp://(deposit-money)/";
    const webLink = "https://dev.agrocarteira.com.br";

    // Intenta abrir la app
    window.location.href = appLink;

    // Si la app no está instalada, redirige a la web después de 1 segundo
    setTimeout(() => {
      window.location.href = webLink;
    }, 1000);
  };

  return (
    <div>
      <h5>Deeplinking</h5>
      <p>Enlaces de prueba para deep linking:</p>
      <ul>
        <li>
          <a
            href="AgroCarteiraApp://(app)/home/blocked-balance"
            onClick={handleClick}
          >
            Abrir blockedBalance en la app utilizando etiqueta &lt; a &gt;
            nativa con handleClick y href
          </a>
        </li>
        <li>
          <Link
            href="AgroCarteiraApp://(app)/home/blocked-balance"
            onClick={handleClick}
            underline="none"
          >
            Abrir en la App utilizando componente &lt;Link&gt; de MUI
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
