export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 text-sm py-6 mt-0 border-t border-yellow-600/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <p className="text-white font-semibold tracking-wide">
          © {new Date().getFullYear()} Lunawat Gems. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="/products" className="hover:text-yellow-400 transition">
            Products
          </a>
          <a href="/portfolio" className="hover:text-yellow-400 transition">
            Portfolio
          </a>
          <a href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
