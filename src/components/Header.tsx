import { Search, Bell, HelpCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 w-full z-50 flex items-center justify-between px-8 h-16 bg-white/80 backdrop-blur-lg border-b border-outline-variant/10 font-sans antialiased">
      <div className="flex items-center space-x-12">
        <span className="text-xl font-bold tracking-tight text-primary">ITSM Scout</span>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Overview</a>
          <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1">Readiness</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Resources</a>
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative group">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search migration assets..." 
            className="pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary/20 w-64 text-sm transition-all focus:bg-white"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container/50 rounded-full transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container/50 rounded-full transition-colors">
            <HelpCircle size={20} />
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-primary/10">
            <img 
              alt="Profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv9XkzoBP1qCaACQOVagk_oDv3q0eWHopAh1Kd3khs9CLRUUW3VTRHOTk8m4ScEpB9CPDxGltssQIKcmETh9xnx0Qi_2MnyzWaaPuppB0GKVESidR7msku9WCQYg8QpGQI2Z9oYYywcK-TaBDON2vZrQFTK9ZRkzAxSNlqw3nLngjFrtql_z_AoSnvdZHgRFcmZcfn82WhYqqmy03QR6dUpGJV1Tt5gz4zS2BzZl5jUVyHewnk3YIWon4ZJnx8qGFr0aXxe7jxILQb" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
