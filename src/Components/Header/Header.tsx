export default function Example() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <a href="#" className="flex items-center justify-center">
        <span className="sr-only">IT Services Company</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Services
        </a>
        <a
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </a>
        <a
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
