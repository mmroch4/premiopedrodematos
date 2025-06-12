export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <p className="mt-2 text-slate-800">
        © {new Date().getFullYear()} •{" "}
        <a
          href="https://www.miguelrocha.dev/pt"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-500"
        >
          Miguel Martins Rocha
        </a>
      </p>
    </footer>
  );
}
