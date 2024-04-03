import { Button } from "../button";




const itemsMockCards = [{
    key: 'imag-x',
    url: 'https://daseimoveis.s3.sa-east-1.amazonaws.com/dase_imoveis/img/RefugiodosCentos.jpg',
    title: 'Casas no Cumbuco de alto padrão - Refúgio dos ventos',
    description: 'Casas em cond. Alto padrão na região do Cumbuco- Caucaia'
},
{
    key: 'imag-t',
    url: 'https://daseimoveis.s3.sa-east-1.amazonaws.com/dase_imoveis/img/BeachClass.jpg',
    title: 'Casas n Cumbuco de alto padrão - Refúgio dos ventos',
    description: 'Casas em cond. Alto padrão na região do Cumbuco- Caucaia'
}]



export default function Product() {
    return (
        <section id="nossos-produto" className="w-screen h-30 mb-6 w-screen bg-white p-4">
            {itemsMockCards.map( item => (
                <div key={item.key} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={item.url} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold  text-black text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700 text-base">
                                {item.description}
                            </p>
                        </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            ))}
            
          <Button color="secondary" size="lg" >Teste</Button>
        </section>
    );
}