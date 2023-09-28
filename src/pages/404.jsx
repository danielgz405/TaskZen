import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="flex h-full flex-col">
        <div className="absolute flex flex-grow items-baseline flex-col inset-0 h-screen w-1/2 shadow backdrop-blur-xl bg-slate-500/60 z-10">
          <main className="flex flex-grow flex-col">
            <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 pt-10 sm:pt-16">
                <a href="/" className="inline-flex relative h-20 w-64">
                  <span className="sr-only">Prisma</span>
                </a>
              </div>
              <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                <p className="text-base font-semibold text-teal-400">Error 404</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Página no encontrada.</h1>
                <p className="mt-2 text-base text-slate-300">Lo sentimos, no encontramos la página que buscas.</p>
                <div className="mt-6">
                  <Link href="./">
                    <>
                      <p className="text-base font-medium text-teal-400 hover:text-teal-300 cursor-pointer">Regresa a la página principal</p>
                    </>
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <footer className="flex-shrink-0 w-full">
            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              {/* <nav className="flex space-x-4">
                <Link href="#" className="text-sm font-medium text-slate-500 hover:text-slate-600">
                  Contact Support
                </Link>
                <span className="inline-block border-l border-slate-300" aria-hidden="true" />
                <Link href="#" className="text-sm font-medium text-slate-500 hover:text-slate-600">
                  Status
                </Link>
                <span className="inline-block border-l border-slate-300" aria-hidden="true" />
                <Link href="#" className="text-sm font-medium text-slate-500 hover:text-slate-600">
                  Twitter
                </Link>
              </nav> */}
            </div>
          </footer>
        </div>
        <div className="relative h-screen w-screen">
          <Image
            src="https://images.unsplash.com/photo-1544994837-20fbd55bb957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="bgImage"
            layout="fill"
            quality={100}
          />
        </div>
      </div>
    </>
  );
}
