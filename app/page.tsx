export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Privacy Protection
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Scan if Your Salary Data<br />
          <span className="text-[#58a6ff]">Is Being Sold</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Salary Leak Scanner monitors data broker sites and dark web sources for leaked employee salary information. Get instant alerts before it damages your career or negotiating power.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Monitoring — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">Broker Monitoring</h3>
            <p className="text-sm text-[#8b949e]">Automated scans across 200+ data broker sites for your salary records.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🌑</div>
            <h3 className="font-semibold text-white mb-1">Dark Web Alerts</h3>
            <p className="text-sm text-[#8b949e]">Real-time detection when your employment data surfaces on dark web forums.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📧</div>
            <h3 className="font-semibold text-white mb-1">Instant Notifications</h3>
            <p className="text-sm text-[#8b949e]">Email and dashboard alerts the moment a breach is detected.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Professional</p>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Monitor up to 5 employee profiles",
              "200+ data broker scans",
              "Dark web surveillance",
              "Email & dashboard alerts",
              "Breach source tracking",
              "Monthly PDF reports"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does Salary Leak Scanner find my data?</h3>
            <p className="text-sm text-[#8b949e]">We use automated scrapers and APIs to continuously monitor 200+ data broker websites and dark web sources. When your name, employer, or salary details appear, you get an immediate alert.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Who is this for?</h3>
            <p className="text-sm text-[#8b949e]">HR departments protecting employee privacy, executives guarding compensation data, and privacy-conscious professionals who don't want their salary used against them in negotiations.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel your subscription at any time with no penalties. You'll retain access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-xs text-[#6e7681] border-t border-[#21262d]">
        © {new Date().getFullYear()} Salary Leak Scanner. All rights reserved.
      </footer>
    </main>
  );
}
