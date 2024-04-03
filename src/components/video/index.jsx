export default function Video() {
    return (
        <section id="videos" className="w-screen h-30 mb-6 w-screen bg-white">
          <div className="max-w-2xl p-6 rounded-lg">
             <h1 className="text-lg  text-gray-600">Implementa layout de Video</h1>
            <h2 className="text-3xl font-bold mb-4">Depoimentos</h2>
            <div className="mb-4">
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                faucibus nisl vitae turpis pharetra vehicula.
              </p>
              <p className="text-sm text-gray-600 mt-2">- Cliente satisfeito</p>
            </div>
            <div>
              <p className="text-lg">
                Fusce consequat justo non purus tincidunt placerat.
              </p>
              <p className="text-sm text-gray-600 mt-2">- Outro cliente feliz</p>
            </div>
          </div>
        </section>
    );
}