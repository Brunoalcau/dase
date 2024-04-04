import { Button } from "../button";




const itemsMockCards = [{
    key: 'imag-q',
    url: 'https://daseimoveis.s3.sa-east-1.amazonaws.com/dase_imoveis/img/RefugiodosCentos.jpg',
    title: 'Casas no Cumbuco de alto padrão - Refúgio dos ventos',
    description: 'Casas em cond. Alto padrão na região do Cumbuco- Caucaia'
},
{
    key: 'imag-w',
    url: 'https://daseimoveis.s3.sa-east-1.amazonaws.com/dase_imoveis/img/casa_vila_recanto.jpg',
    title: 'Casas Cond. Alto padrão - Green Residence',
    description: 'casas com 3 quartos, garagem e demais assuntos eluposrum'
},
{   
    key: 'imag-e',
    url: 'https://daseimoveis.s3.sa-east-1.amazonaws.com/dase_imoveis/img/BeachClass.jpg',
    title: 'Lotes a venda na Região do Cumbuco',
    description: 'Casas em cond. Alto padrão na região do Cumbuco- Caucaia'
},

{
    key: 'imag-r',
    url: 'https://daseimoveis.s3.sa-east-1.amazonaws.com/dase_imoveis/img/TulipaResidence.jpg',
    title: 'Casas Alto padrão Residencial Tulipa',
    description: 'Casas bem projetadas, com garagem, Região Arianopolis -Caucaia'
},

{
    key: 'imag-t',
    url: 'https://daseimoveis.s3.sa-east-1.amazonaws.com/dase_imoveis/img/TulipaResidence.jpg',
    title: 'Residencial Vila Vento  -Região do Cumbuco',
    description: 'Casas em Residencial, com área de lazer, gourmet e playground.'


}]



export default function Product() {
    return (
        <section id="nossos-produto" className="w-screen bg-white p-4">
    <div className="flex flex-wrap">
        {itemsMockCards.map(item => (
            <div key={item.key} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-64 object-cover" src={item.url} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-black text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 text-base">
                            {item.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Button color="primary" size="lg">Ver detalhes</Button>
                        <br></br>
                        <a href="#">
                            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fotos</span>
                            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </a>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>




    );
}