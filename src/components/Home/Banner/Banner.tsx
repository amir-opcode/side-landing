export default function Banner() {
  return (
    <section className="bg-primary-main p-6 md:py-2">
      <p className="mx-auto max-w-4xl text-center text-sm font-light text-white-main md:text-base">
        Side.xyz Social Layer is now on{" "}
        <a
          rel="noopener"
          href="http://hub.xyz/"
          referrerPolicy="no-referrer"
          target="_blank"
          className="underline"
        >
          Hub.xyz
        </a>{" "}
        . All the accounts, pages and links have been migrated.
      </p>
    </section>
  );
}
