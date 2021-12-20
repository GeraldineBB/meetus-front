import "./style.scss";

function NotFound() {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>
            4<span></span>4
          </h1>
        </div>
        <h2>Oops!</h2>
        <p>
          Désolé mais la page que vous recherchez n'existe pas, elle a été
          supprimée. le nom a changé ou est temporairement indisponible
        </p>
        <a href="/">Retour a la page d'accueil</a>
      </div>
    </div>
  );
}

export default NotFound;
