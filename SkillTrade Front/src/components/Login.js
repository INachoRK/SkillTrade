export default function Widget() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 w-full max-w-sm">
            <div className="flex justify-center mb-6">
              <img src="https://placehold.co/100x100" alt="heart icon" className="w-16 h-16" />
            </div>
            <h2 className="text-center text-zinc-600 dark:text-zinc-300 mb-4">Flirt and meet new people</h2>
            <form>
              <div className="mb-4">
                <label className="block text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="username">Username</label>
                <input className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-300" type="text" id="username" />
              </div>
              <div className="mb-4">
                <label className="block text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-300" type="password" id="password" />
              </div>
              <div className="mb-4">
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Login</button>
              </div>
              <div className="text-center mb-4">
                <a href="#" className="text-zinc-500 dark:text-zinc-400">Forgot password?</a>
              </div>
              <div className="text-center">
                <span className="text-zinc-500 dark:text-zinc-400">Don't have an account?</span>
                <a href="#" className="ml-2 bg-pink-500 text-white py-2 px-4 rounded-lg">Create</a>
              </div>
            </form>
          </div>
        </div>
    )
}