import { useEffect, useState } from 'react';

//const php = "http://localhost/server/getProdutos.php"
const node = "http://localhost:4000"

const urlServer = node

async function getDataFetch(){    
    const response = await fetch(`${urlServer}`,
        { headers: {'Content-Type': 'application/json'}})

    return response.json();
}

function MainPage(){
    const [produtos, setProdutos] = useState([])
    
    useEffect(() => {
        getDataFetch().then(response => {            
            //setProdutos(response.produtos) //PHP
            setProdutos(response) //Node
        })
    }, [])

    const todosProdutos = produtos?.map(item => (
        <div className="card" key={item.id}>
            {/* <img src={`${urlServer}/imgs/${item.imagem}.png`} className="card-img-top text-center" alt={item.nome} /> PHP */}
            <img src={`imgs/${item.imagem}.png`} className="card-img-top text-center" alt={item.nome} /> {/* Node */}
            <div className="card-body">
                <h6 className="card-title">{item.nome}</h6>
                <p className="card-subtitle mb-2 text-muted">{item.categoria}</p>
                <p className="card-text">R$ {parseFloat(item.preco).toFixed(2)}</p>                             
            </div>
        </div>
    ));
        
    return (
        <main className="main">            
            {todosProdutos}
        </main>
    )
}
    
export default MainPage;