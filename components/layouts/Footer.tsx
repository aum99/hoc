// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4">HOUSE OF CGI</h2>
          <p className="text-gray-200 text-xl">
            Crafting digital experiences that inspire & convert.
          </p>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">GET IN TOUCH</h3>
          <ul className="text-gray-200 text-xl space-y-2">
            <li>MON–FRIDAY</li>
            <li>10AM–4PM EST</li>

            <li>
              <Link
                href="https://instagram.com/wilda"
                className="hover:underline"
              >
                INSTAGRAM
              </Link>
            </li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">CONNECT WITH US</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="FIRST NAME"
              className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 text-sm py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 text-sm py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-transparent border border-white rounded-full my-3 py-2 text-xl hover:bg-white hover:text-black transition"
            >
              ENQUIRE
            </button>
          </form>
        </div>

        {/* Navigation Links Section */}
        <div className="lg:ml-30">
          <h3 className="text-2xl font-semibold mb-4">EXPLORE</h3>
          <ul className="text-gray-200 text-xl space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/our-story" className="hover:underline">
                OUR STORY
              </Link>
            </li>
            <li>
              <Link href="/works" className="hover:underline">
                WORKS
              </Link>
            </li>
            <li>
              <Link href="/glossary" className="hover:underline">
                GLOSSARY
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal Links Section */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
        <div className="text-gray-600 text-lg space-x-4">
          <Link href="/terms" className="hover:underline">
            TERMS OF SERVICE
          </Link>
          <Link href="/privacy" className="hover:underline">
            PRIVACY POLICY
          </Link>
        </div>
        <div className="text-gray-600 text-lg mt-4 md:mt-0">
          <Link
            href="https://instagram.com/wilda"
            className="hover:underline text-blue-400"
          >
            INSTAGRAM
          </Link>
          <Link
            href="https://pinterest.com/wilda"
            className="hover:underline text-blue-400 ml-4"
          >
            LINKED IN
          </Link>
        </div>
      </div>
    </footer>
  );
}
