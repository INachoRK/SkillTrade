export default function Widget() {
    return (
        <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4">
          <header className="flex items-center justify-between bg-black text-white p-4">
            <div className="flex items-center space-x-4">
              <img src="C:\Users\albee\nacho-skill\image\logo.png" alt="Logo" className="h-8">
              <span>SKILLTRADE</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-zinc-700 p-2 rounded">🔔</button>
              <button className="bg-zinc-700 p-2 rounded">⚙️</button>
              <button className="bg-zinc-700 p-2 rounded">👤</button>
            </div>
          </header>
          <div className="flex mt-4">
            <aside className="w-1/5 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg">
              <nav className="space-y-4">
                <a href="#" className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span>🏠</span>
                  <span>Inicio</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span>📄</span>
                  <span>Mi contenido</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span>📂</span>
                  <span>Biblioteca</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span>➕</span>
                  <span>saber más</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span>💬</span>
                  <span>Teams</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span>📊</span>
                  <span>Excel</span>
                </a>
              </nav>
            </aside>
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">Bienvenido sea a Skill Trade :D</h1>
        
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Recomendados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg">
                <p className="text-zinc-600 dark:text-zinc-400">Lo ha abierto recientemente</p>
                <p className="text-zinc-500 dark:text-zinc-300">lun a las 8:26 p.m.</p>
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold">BIOingenieriaEsteban</p>
                <div className="mt-2">
                  <img src="C:\Users\albee\nacho-skill\image\logo.png" alt="Document" className="w-full h-32 object-cover rounded-lg">
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">TRANSPORTE CELULAR</p>
                  <p className="text-zinc-500 dark:text-zinc-300">Esteban Quintero Mundefined</p>
                  <p className="text-zinc-600 dark:text-zinc-400">El transporte celular es un proceso fundamental...</p>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg">
                <p className="text-zinc-600 dark:text-zinc-400">John Fernando Lopez Velasquez envió esto</p>
                <p className="text-zinc-500 dark:text-zinc-300">14 de may</p>
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold">clase</p>
                <div className="mt-2">
                  <img src="C:\Users\albee\nacho-skill\image\logo.png" alt="PowerPoint" className="w-full h-32 object-cover rounded-lg">
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg">
                <p className="text-zinc-600 dark:text-zinc-400">John Fernando Lopez Velasquez envió esto</p>
                <p className="text-zinc-500 dark:text-zinc-300">30 de abr</p>
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold">clase</p>
                <div className="mt-2">
                  <img src="C:\Users\albee\nacho-skill\image\logo.png" alt="PowerPoint" className="w-full h-32 object-cover rounded-lg">
                </div>
              </div>
            </div>
          </section>
        
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Acceso rápido</h2>
            <div className="flex space-x-4 mt-4">
              <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-lg">Parpinteria</button>
              <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-lg">Pesca</button>
              <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-lg">Artes</button>
              <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-lg">Informática</button>
            </div>
            <div className="mt-4">
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src="C:\Users\albee\nacho-skill\image\logo.png" alt="Document" className="h-12">
                  <div>
                    <p className="text-zinc-800 dark:text-zinc-200">hola soy un mensaje :D</p>
                    <p className="text-zinc-500 dark:text-zinc-300">ayuda, quiero pasar esta materia</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">Alguien lee esto?</p>
              </div>
            </div>
          </section>
        </main>
          </div>
        </div>
    )
}