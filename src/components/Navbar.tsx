export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="text-2xl font-black text-emerald-500 tracking-tighter">
          LAPSHIFT
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#how" className="hover:text-emerald-400">
            How it Works
          </a>
          <a href="#gear" className="hover:text-emerald-400">
            Browse Gear
          </a>
          <a href="#security" className="hover:text-emerald-400">
            Security
          </a>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all">
          Start Swapping
        </button>
      </div>
    </nav>
  );
}
