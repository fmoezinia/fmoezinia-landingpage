import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Ricky Moezinia</h1>
        <div className="relative w-60 h-60 mx-auto mb-8">
          <Image
            src="/images/headshot_alone.jpg"
            alt="Ricky Moezinia"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold mb-6">About Me</h2>
          <p className="mb-6">
            Currently working on a new company.
            Previously, I founded <span className="font-semibold">Alta</span>, a next generation cross-border payments platform, 
            worked as a software engineer on <span className="font-semibold">Novi</span> and <span className="font-semibold">Diem (ex Libra)</span> at Facebook, 
            and as a quant at <span className="font-semibold">Point72</span>.
            I advise and invest in early stage companies through my fund, <span className="font-semibold">Leo Capital</span>.
          </p>

          <p className="mb-8">
            I love flying (Piper Cherokee PA-28), and playing poker. You can reach me at{' '}
            <a href="mailto:moeziniaf@gmail.com" className="text-blue-600 hover:text-blue-800">
              moeziniaf [at] gmail.com
            </a>.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Projects & Articles</h2>
              <p>
                Some <Link href="/projects" className="text-blue-600 hover:text-blue-800">projects</Link> I've built, and{' '}
                <a href="https://rickymo.substack.com/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  articles
                </a> I've written.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Research</h2>
              <p>
                A few <Link href="/research" className="text-blue-600 hover:text-blue-800">research</Link> topics.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Investments</h2>
              <p>
                Some <Link href="/investments" className="text-blue-600 hover:text-blue-800">investments</Link> I've made.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
