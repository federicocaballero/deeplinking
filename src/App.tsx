import { Link } from "@mui/material";

function App() {
  // Detecta si el usuario está en un dispositivo móvil
  const isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (isMobile) {
      console.log("Estás en un dispositivo móvil");
    } else {
      console.log("Estás en un escritorio");
    }
    event.preventDefault();

    const appLink = "myapp://(app)/home";
    const webLink = "https://dev.agrocarteira.com.br";
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    // Escucha cambios en la visibilidad del documento
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timeout); // Si el usuario salió, se abrió la app, así que cancelamos el fallback
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Intenta abrir la app
    window.location.href = appLink;

    // Si la app no está instalada, redirige a la web después de 1 segundo
    timeout = setTimeout(() => {
      window.location.href = webLink;
    }, 1000);
  };

  return (
    <div>
      <h5>Deeplinking</h5>
      <p>Enlaces de prueba para deep linking:</p>
      <ul>
        <li>
          <a href="#" onClick={handleClick}>
            Abrir app utilizando etiqueta &lt; a &gt;
          </a>
        </li>
        <li>
          <Link href="#" onClick={handleClick} underline="none">
            Abrir en la App utilizando componente &lt;Link&gt; de MUI
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
