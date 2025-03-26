import Link from 'next/link'

export default function Research() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg">
          <h1 className="text-3xl font-bold mb-8">Research</h1>
          <p className="mb-6">
            Some topics I&apos;ve explored
          </p>

          <div className="space-y-12">
            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">Zero Knowledge Range Proofs</h2>
              <p>
                We (Novi Crypto Research) published a paper on{' '}
                <a href="https://eprint.iacr.org/2021/297" 
                   className="text-blue-600 hover:text-blue-800" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  range proofs
                </a>. These have loads of applications, from proving income ranges (ZK accreditation) to ZK geolocation.
              </p>
            </div>

            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">Heterogeneous POW Consensus Protocols</h2>
              <p>
                I wrote a paper on how heterogeneous network conditions affect distributed systems with a friend at MIT.
              </p>
              <p>
                As blockchain systems scale, and network parameters are taken to the limit, network conditions may impact consensus protocols.
                I analyzed the impact of heterogeneous network conditions on consensus protocols as block times tend towards their limit.
                By simulating POW protocols in a heterogeneous peer-to-peer networks, I was able to break consensus by performing an attack with less than 50% malicious hash power.
                This research aims to raise awareness about disparate network conditions in systems with short interblock times, and suggests alterations to
                random peering mechanisms such as Bitcoin&apos;s.
              </p>
            </div>

            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">Digital Currency Initiative - MIT Media Lab</h2>
              <p>
                I worked on enabling{' '}
                <a href="https://dci.mit.edu/smart-contracts/" 
                   className="text-blue-600 hover:text-blue-800" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Discreet Log Contracts
                </a> in Lightning, a Bitcoin L2. These can primarily be used as onchain BTC futures contracts.
              </p>
            </div>

            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-center mb-4">Adversarial Infill</h2>
              <p>
                Semantic infilling involves filling in significant portions of corrupted images. I explored adversarial methods of achieving semantic infilling on
                faces. I used a DCGAN (deep convolutional generative adversarial network) trained on facial images to reconstruct portions of images.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 