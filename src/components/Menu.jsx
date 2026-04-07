import { Link } from "react-router-dom";

export default function Menu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="popmenu">
      {/* Overlay (very light) */}
      <div
        onClick={onClose}
        className="">close</div>

      {/* Menu panel */}
      <div className="fixed inset-0 z-50 flex">
        
        {/* Left content */}
        <div className="w-full max-w-md bg-white p-10 flex flex-col justify-between">
          
          {/* Top: Close */}
          <button
            onClick={onClose}
            className="text-xs tracking-widest uppercase opacity-60 hover:opacity-100"
          >
            Close
          </button>

          {/* Middle: Navigation */}
          <nav className="flex flex-col gap-6 text-2xl font-light tracking-wide">
            <Link to="/" onClick={onClose}>Home</Link>
            <Link to="/product/1" onClick={onClose}>Product 1</Link>
            <Link to="/product/2" onClick={onClose}>Product 2</Link>
            <Link to="/about" onClick={onClose}>About</Link>
          </nav>

          {/* Bottom: small footer */}
          <div className="text-xs opacity-50">
            © 1OFF
          </div>
        </div>

        {/* Right empty space (for breathing room) */}
        <div className="flex-1" onClick={onClose} />
      </div>
    </div>
  );
}