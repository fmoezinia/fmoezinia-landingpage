import Link from 'next/link'

export default function Projects() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg">
          <h1 className="text-3xl font-bold mb-8">Projects</h1>
          <p className="mb-6">
            Some projects I&apos;ve worked on
          </p>

          <div className="space-y-12">
            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">Prism</h2>
              <p className="mb-4">
                A friend and I built a decentralized options exchange on Ethereum in 2015.
                We created a order execution exchange for ETH options, binding options in Solidity contracts, 
                using Oraclize for price feeds and IPFS to offload data. Apparently this was the second ETH derivatives exchange built globally.
              </p>
              <div className="space-x-4">
                <a href="https://www.youtube.com/watch?v=VW_OHJ2r4ck&feature=youtu.be" 
                   className="text-blue-600 hover:text-blue-800" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Live demo of the app
                </a>
                <a href="https://courses.csail.mit.edu/6.857/2018/project/Moezinia-Forde-Magendanz-EthExch.pdf" 
                   className="text-blue-600 hover:text-blue-800" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  paper here
                </a>
              </div>
            </div>

            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">Hide</h2>
              <p className="mb-4">
                I built a Chrome extension to harness remote CPU cycles to mine Monero.
              </p>
              <a href="https://medium.com/@fredricmoezinia/the-vulnerability-nobody-wants-to-fix-17d58232ff76" 
                 className="text-blue-600 hover:text-blue-800" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Click here for an article I wrote about my findings
              </a>
            </div>

            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">Cryptotrage</h2>
              <p>
                I used to build market making and taking bots, using simple graph algorithms to find multi hop cross-exchange price arbitrages.
                Assets needed to be distributed across exchanges in the right amounts to execute - forecasting arbitrage windows and relocating
                was more complex than actually finding the mispricings in real-time.
                With market making back in 2015, I was able to consistently represent spreads representing up to ~10% of prices and for half a year, 
                I was the only market maker for two low volume tokens.
              </p>
            </div>

            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">LazyMe</h2>
              <p>
                I built a program to do my Spanish Homework for me. Perdón, Señor Garcia! I had a semesters worth (1000s) of online exercises to do; 
                so I wrote a script to navigate through the exercises and submit all the correct answers for me. I got an A.
              </p>
            </div>

            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">Puma</h2>
              <p>
                I built an iOS application which stores your notes in the cloud encrypted using private keys from the iphone&apos;s secure enclave. 
                (Hybrid encryption for top performance and security.)
                Login with biometrics and a passphrase to decrypt your notes, so noone can see them even if the storage server is hacked.
              </p>
            </div>

            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">Lucky 13</h2>
              <p className="mb-4">
                Joined a robotoics competition to race autonomous vehicles around a ~100m track and to escape an (prior unknown) labyrinth. 
                I worked on localization, mapping, control and path planning.
              </p>
              <a href="https://www.fmoezinia.com/rsswebsite/" 
                 className="text-blue-600 hover:text-blue-800" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Website here
              </a>
            </div>

            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">StyleX</h2>
              <p className="mb-4">
                Although design is not my forte, I tried to create a personalizable website so you can store all your clothes and belogings online. 
                Not only that, but you can try different outfits on a virtual-YOU to see what looks best. Save the outfits that look good.
              </p>
              <a href="https://stylex.herokuapp.com/" 
                 className="text-blue-600 hover:text-blue-800" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Check it out here
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 