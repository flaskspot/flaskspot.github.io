import Head from 'next/head'

export default function Home() {
  return (
    <div className='font-sans antialiased sm:h-screen relative lg:overflow-hidden'>
      <Head>
        <title>FlaskSpot</title>
        <meta name="description" content="FlaskSpot provides starter kits for Flask" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='md:h-5/6'>
        <nav className="flex flex-1 py-8 px-6 md:px-14">
          <h6 className='text-primary font-bold text-xl tracking-widest uppercase'>FlaskSpot</h6>
        </nav>
        <section className="flex flex-col pb-8 md:pb-0 md:flex-row md:h-full">
          <div className='md:w-1/2 px-6 py-3 sm:py-6 md:py-0 md:px-20 flex flex-col justify-center'>
            <h1 className='text-5xl md:text-7xl pt-4 leading-tight'><span className='font-bold block'>Starter Kits for</span> <span className='text-secondaryDarkLight'>Flask Web Framework</span></h1>
            <p className='py-6 text-lg text-secondaryDarkLight'>FlaskSpot provides starter kits for Flask Web Framework. FlaskSpot gives you head start building your new Flask application.</p>
          </div>
          <div className='md:w-1/2'>
            <div className='w-full h-full px-6'>
              <div className="bg-terminalDark h-full rounded-lg">
                {/* Terminal Title bar */}
                <div className='w-full bg-terminalLight h-10 rounded-t-lg pl-4'>
                  <div className="flex space-x-2 items-center h-full">
                    <span className="w-4 h-4 bg-terminalRed inline-block rounded-full"></span>
                    <span className="w-4 h-4 bg-terminalYellow inline-block rounded-full"></span>
                    <span className="w-4 h-4 bg-terminalGreen inline-block rounded-full"></span>
                  </div>
                </div>
                {/* End Terminal Title Bar */}
                {/* Start Terminal Body */}
                <div className="py-2 px-1 text-white font-mono">
                    <p><span className="text-green-400 font-bold">$</span><span className="text-terminalCyan font-bold text-lg px-2">~</span><span className="font-medium tracking-wide inline-block">pip install flaskspot</span></p>
                    <p><span className="font-medium tracking-wide">Successfully installed flaskspot-0.1.0</span></p>
                    <p><span className="text-green-400 font-bold">$</span><span className="text-terminalCyan font-bold text-lg px-2">~</span></p>
                    <p><span className="text-green-400 font-bold">$</span><span className="text-terminalCyan font-bold text-lg px-2">~</span><span className="font-medium tracking-wide">flaskspot --help</span></p>
                    <div>
                      <p>Usage: flaskspot [OPTIONS] COMMAND [ARGS]...</p>
                      <br/>
                      <p>Options:</p>
                      <p className="ml-6"><span className="w-24 inline-block">--version</span> Show the version and exit.</p>
                      <p className="ml-6"><span className="w-24 inline-block">--help</span> Show this message and exit.</p>
                      <br/>
                      <p>Commands:</p>
                      <p className="ml-6"><span className="w-36 inline-block">create-project</span> Creates a new Flask project</p>
                    </div>
                    <p><span className="text-green-400 font-bold">$</span><span className="text-terminalCyan font-bold text-lg px-2">~</span></p>
                    <p><span className="text-green-400 font-bold">$</span><span className="text-terminalCyan font-bold text-lg px-2">~</span><span className="font-medium tracking-wide inline-block">flaskspot create-project project-name</span></p>
                    <p><span className="font-medium tracking-wide text-green-400">Success! Created project-name at /home/youruser/project-name.</span></p>
                    <p><span className="text-green-400 font-bold">$</span><span className="text-terminalCyan font-bold text-lg px-2">~</span></p>

                </div>
                {/* End Terminal Body */}
              </div> 
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
