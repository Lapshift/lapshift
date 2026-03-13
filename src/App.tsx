import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

import { StepCard } from "./components/StepCard";

// --- Main Page ---
export default function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-6xl font-extrabold mb-6">
          Upgrade your career, <br />
          <span className="text-emerald-500 text-gradient">
            Shift your hardware.
          </span>
        </h2>
        <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
          Swap your old laptop and pay the balance small-small. Zero interest,
          100% Pro-gear.
        </p>

        {/* Instant Quote Widget */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-md mx-auto shadow-2xl">
          <h3 className="text-lg font-semibold mb-4 text-left">
            Instant Swap Valuation
          </h3>
          <select className="w-full bg-slate-950 border border-slate-700 p-3 rounded-xl mb-4">
            <option>Select your current device...</option>
            <option>MacBook Pro 2019 (16-inch)</option>
            <option>HP EliteBook 840 G5</option>
          </select>
          <div className="flex justify-between items-center bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 mb-6">
            <span className="text-emerald-400 text-sm">Estimated Value:</span>
            <span className="text-2xl font-bold text-emerald-400">
              ₦340,000
            </span>
          </div>
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 transition-all p-4 rounded-xl font-bold flex justify-center items-center gap-2">
            Start My Upgrade <Icon icon="lucide:arrow-right" />
          </button>
        </div>
      </div>

      {/* <div className="container mx-auto px-4 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Own Your Workstation. Pay Small Small.
          </h1>
          <p className="text-lg mb-6">
            Professional laptops and gadgets for developers, creators, and
            students.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/products" className="btn btn-primary">
              Browse Laptops
            </Link>
            <Link to="/bundle-builder" className="btn btn-secondary">
              Build Your Setup
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded shadow text-center">
              1. Select Laptop
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              2. Add Gadgets
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              3. Choose Installment
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              4. Get Your Workstation
            </div>
          </div>
        </section>
      </div> */}

      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-24 md:py-32">
          <section className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Flexible Tech Financing
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Own Your Workstation. <br />
              <span className="text-blue-600">Pay Small Small.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Professional laptops and gadgets for developers, creators, and
              students. Start working today, pay at your own pace.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/products"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
              >
                Browse Laptops
                <Icon icon="lucide:arrow-right" />
              </Link>
              <Link
                to="/bundle-builder"
                className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Icon icon="lucide:cpu" className="text-blue-600" />
                Build Your Setup
              </Link>
            </div>
          </section>

          {/* Features / How it works */}
          <section className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How it works</h2>
              <p className="text-slate-500">
                Your dream setup is just four steps away
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StepCard
                step={1}
                title="Select Laptop"
                desc="Choose from MacBooks, ThinkPads, and more."
                icon="lucide:laptop"
              />
              <StepCard
                step={2}
                title="Add Gadgets"
                desc="Pair with monitors, keyboards, and mice."
                icon="lucide:zap"
              />
              <StepCard
                step={3}
                title="Pay Monthly"
                desc="Flexible plans that fit your budget."
                icon="lucide:wallet"
              />
              <StepCard
                step={4}
                title="Ship & Work"
                desc="Fast delivery to your doorstep."
                icon="lucide:shield-check"
              />
            </div>
          </section>
        </div>
      </div>

      <div className="bg-slate-950 text-slate-50">
        <Navbar />

        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-400 text-sm font-bold">
              <Icon icon="lucide:zap" width={16} /> Now Live: M3 MacBook Pro
              Upgrades
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Shift Your Gear. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                Own the Future.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Trade in your current laptop for instant credit. Save the rest
              &quot; small &#34; small &ldquo; and get your new workstation
              delivered at 50% progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-all">
                Check Swap Value <Icon icon="lucide:arrow-right" width={20} />
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 border border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all">
                View Catalog
              </button>
            </div>
          </div>

          {/* Hero Widget: Instant Valuation */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl relative">
            <div className="absolute -top-6 -right-6 bg-emerald-500 text-slate-950 p-4 rounded-2xl font-black rotate-12 shadow-xl">
              NO INTEREST
            </div>
            <h3 className="text-xl font-bold mb-6">Valuation Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Current Device
                </label>
                <select className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl mt-1 focus:border-emerald-500 outline-none transition-all">
                  <option>MacBook Pro 2019 (Core i7)</option>
                  <option>HP Elitebook 840 G5</option>
                  <option>Dell XPS 13 (2020)</option>
                </select>
              </div>
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Estimated Credit:</span>
                  <span className="text-3xl font-black text-emerald-400">
                    ₦340,000
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 text-center italic">
                Calculated based on real-time market data.
              </p>
            </div>
          </div>
        </section>

        {/* 2. HOW IT WORKS */}
        <section id="how" className="py-24 ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                How LapShift Works
              </h2>
              <p className="text-slate-400">
                Designed for the Nigerian tech professional.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Icon icon="lucide:refresh-cw" width={32} />,
                  title: "Instant Swap",
                  desc: "Lock in a fair value for your old device. We accept all major brands.",
                },
                {
                  icon: <Icon icon="lucide:wallet" width={32} />,
                  title: "Save Small-Small",
                  desc: "Automate your savings weekly or monthly. No collateral required.",
                },
                {
                  icon: <Icon icon="lucide:laptop" width={32} />,
                  title: "Shift at 50%",
                  desc: "We deliver your new gear as soon as you hit the halfway mark.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative p-8 bg-slate-950 border border-slate-800 rounded-3xl"
                >
                  <div className="text-emerald-500 mb-6">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TRUST & SECURITY */}
        <section
          id="security"
          className="py-24 bg-slate-900/30 border-y border-slate-800"
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8">
                We take your <br />
                <span className="text-emerald-500">Security</span> seriously.
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "DoD Standard Data Wipe",
                    desc: "We securely erase your old laptop's data before resale.",
                  },
                  {
                    title: "Bank-Grade Payments",
                    desc: "Your savings are held securely via Paystack-licensed partners.",
                  },
                  {
                    title: "MDM Protection",
                    desc: "Every device is insured and secured via remote-lock tech.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <Icon
                      icon="lucide:check-circle-2"
                      className="text-emerald-500 shrink-0"
                    />
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-linear-to-br from-emerald-500/20 to-cyan-500/20 aspect-square rounded-[3rem] border border-emerald-500/20 flex items-center justify-center">
              <Icon
                icon="lucide:shield-check"
                width={160}
                className="text-emerald-500 animate-pulse"
              />
            </div>
          </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Icon icon="lucide:cpu" width={200} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">
              Ready to upgrade <br /> your workstation?
            </h2>
            <p className="text-emerald-100 text-lg mb-12 max-w-xl mx-auto relative z-10">
              Join 500+ developers shifting to better gear today. Start your
              valuation and see how much your old device is worth.
            </p>
            <button className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform relative z-10 shadow-xl">
              Start My Swap Now
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>
            © 2026 LapShift Technologies. Built for the African Tech Ecosystem.
          </p>
        </footer>
      </div>
    </>
  );
}
