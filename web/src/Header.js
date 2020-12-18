function Header(){
    return (
        <header className="App-header">
            <div className="Top-header">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="#">Mundo Doce</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Página Inicial <span className="sr-only"></span></a>
                        <a className="nav-item nav-link" href="#">Categoria</a>
                        <a className="nav-item nav-link" href="#">Login</a>
                        <a className="nav-item nav-link" href="#">Contato</a>
                        </div>
                    </div>
                </nav>                      
            </div>
            <div className="Sub-header">
                Sua loja favorita para adoçar seu mundo!
            </div>
    </header>
    )
}

export default Header;