export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-2xl cursor-pointer">
              🍸 MixTogether
            </a>
          </div>

          {/* Botones de navegación */}
          <nav className="flex items-center space-x-4">
            <a
              href="/cocktails"
              className=""
            >
              Cocktails
            </a>
            
            <a
              href="/mocktails"
              className=""
            >
              Mocktails
            </a>
            
            <a
              href="/mezclas"
              className=""
            >
              Área de mezclas
            </a>
            
            <a
              href="/usuario"
              className=""
            >
              👤
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}