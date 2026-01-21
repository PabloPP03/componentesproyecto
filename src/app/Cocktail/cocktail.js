export default function CocktailGrid({ drinks, title }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Título */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{title}</h1>
      
      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {drinks.map((drink) => (
          <div
            key={drink.id}
            className=""
          >
            {/* Imagen */}
            <div className="">
              <img 
                src={drink.image || ''} 
                alt={drink.name}
                className=""
              />
            </div>
            
            {/* Contenido */}
            <div className="p-4">
              {/* Nombre */}
              <h3 className="">
                {drink.name}
              </h3>
              
              {/* Alcohol */}
              <div className="mb-2">
                <p className="">
                  Alcohol base:
                </p>
                <p className="">
                  {drink.alcohol || 'No especificado'}
                </p>
              </div>
              
              {/* Tipo/Sabor */}
              <div className="mt-3">
                <span className={`inline-block text-xs px-3 py-1 rounded-full font-semibold ${
                  drink.flavor === 'Dulce' 
                    ? 'bg-pink-100 text-pink-800' 
                    : drink.flavor === 'Cítrico'
                    ? 'bg-yellow-100 text-yellow-800'
                    : drink.flavor === 'Café'
                    ? 'bg-amber-100 text-amber-800'
                    : drink.flavor === 'Amargo'
                    ? 'bg-orange-100 text-orange-800'
                    : drink.flavor === 'Refrescante'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {drink.flavor || 'Clásico'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
