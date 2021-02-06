const database = require('../database/connection')

class ProdutoController{
    getProdutos(request, response){
        let query = "SELECT p.*, tp.descricao As categoria FROM Produto p JOIN Categoria tp ON p.idCategoria = tp.id"

        database.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            response.json(result)
        });
    }
}

module.exports = new ProdutoController()