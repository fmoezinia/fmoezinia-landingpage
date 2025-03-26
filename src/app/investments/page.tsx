import Link from 'next/link'

export default function Investments() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg">
          <h1 className="text-3xl font-bold mb-8">Investments</h1>
          <p className="mb-6">
            Some investments I&apos;ve made and companies I&apos;ve advised.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Acki Nacki', url: 'https://www.ackinacki.com/' },
              { name: 'Affiniti Finance', url: 'https://affiniti.finance/' },
              { name: 'Airship', url: 'https://www.shipbyairship.com/' },
              { name: 'Alquist Robotics', url: 'https://www.alquistrobotics.com/' },
              { name: 'Anthropic', url: 'https://www.anthropic.com/' },
              { name: 'Avoca', url: 'https://www.avoca.ai/' },
              { name: 'Bukuwarung', url: 'https://bukuwarung.com/' },
              { name: 'Chai Discovery', url: 'https://chaidiscovery.com/' },
              { name: 'Draftt', url: 'https://draftt.io/' },
              { name: 'Fluidstack', url: 'https://fluidstack.io' },
              { name: 'Forge', url: 'https://withforge.com/' },
              { name: 'Fragmetric', url: 'https://fragmetric.xyz/' },
              { name: 'Gestalt', url: 'https://gestalt.com/' },
              { name: 'Harmonic', url: 'https://harmonic.ai/' },
              { name: 'Haven', url: 'https://www.usehaven.com/' },
              { name: 'Henry', url: 'https://henry.ai/' },
              { name: 'Hyperbolic', url: 'https://hyperbolic.xyz/' },
              { name: 'Kepler', url: 'https://x.com/Keplersavings' },
              { name: 'Kinetic', url: 'https://www.kinetic.xyz/' },
              { name: 'Layer N', url: 'https://www.layern.com/' },
              { name: 'Lit', url: 'https://litprotocol.com/' },
              { name: 'Mandolin', url: 'https://www.withmandolin.com/' },
              { name: 'Mercury', url: 'https://mercury.com/' },
              { name: 'Merit Systems', url: 'https://www.merit.systems/' },
              { name: 'Obviously AI', url: 'https://www.obviously.ai/' },
              { name: 'Ola Click', url: 'https://olaclick.com/en/' },
              { name: 'Phoebe AI', url: 'https://www.phoebe.work/' },
              { name: 'Proven Finance', url: 'https://fortune.com/crypto/2023/03/09/proven-raises-15-million-to-rebuild-trust-crypto-zero-knowledge-proofs/' },
              { name: 'Rain Card', url: 'https://www.raincards.xyz/' },
              { name: 'Ritual', url: 'https://ritual.net/' },
              { name: 'Settle', url: 'https://www.settle.com/' },
              { name: 'Royco', url: 'https://www.royco.org/' },
              { name: 'Waymont', url: 'https://www.waymont.co/' },
              { name: 'Weights', url: 'https://weights.gg/' },
              { name: 'Whitelabel AI', url: 'https://whitelabel.ai/' },
            ].map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold">{company.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 