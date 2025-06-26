import React from 'react'
import Logo from "../assets/Logo.png"
import Header from "../assets/Header.png"
import chart from "../assets/chart.png"
import prompt from "../assets/prompt.png"
import summary from "../assets/summary.png"
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    // <div>LandingPage</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 bg-[#f6f2ea]">
     

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                AI-Powered Emotional Wellness
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
                {/* NeuroNote: Your AI-powered */}
                <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                  
                  NeuroNote: <br />
                  Your AI-powered <br />
                  Emotional journal
                </span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Transform your mental wellness journey through mindful journaling, AI-guided reflection, and
                personalized insights that help you understand your emotions better.
              </p>
              <div className="text-lg text-slate-500 font-medium">Reflect. Heal. Grow. One entry at a time.</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={"/login"}>
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Start Journaling
                  </button>
              </Link>
              
            </div>
           
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-125 h-125 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={Header}
                  alt="Person journaling peacefully in a serene environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-600 font-medium">Mood: Peaceful</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Why Journaling Matters */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Why Journaling Transforms Lives</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the science-backed benefits of reflective writing and how it can reshape your relationship with
            your emotions, thoughts, and daily experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/60 backdrop-blur-sm border border-slate-100 shadow-lg hover:shadow-xl transition-all rounded-3xl p-8 text-center group hover:-translate-y-2">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Reduces Anxiety & Stress</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Studies show that expressive writing can reduce cortisol levels by up to 23%, helping you process
              difficult emotions and find inner calm.
            </p>
            <div className="text-sm text-indigo-600 font-medium">Backed by 200+ studies</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-slate-100 shadow-lg hover:shadow-xl transition-all rounded-3xl p-8 text-center group hover:-translate-y-2">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Deepens Emotional Intelligence</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Regular reflection helps you identify emotional patterns, understand triggers, and develop healthier
              responses to life's challenges.
            </p>
            <div className="text-sm text-purple-600 font-medium">Improve EQ by 40%</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-slate-100 shadow-lg hover:shadow-xl transition-all rounded-3xl p-8 text-center group hover:-translate-y-2">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Accelerates Personal Growth</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Track your progress, celebrate wins, and learn from setbacks. Journaling creates a roadmap of your
              personal evolution and achievements.
            </p>
            <div className="text-sm text-green-600 font-medium">3x faster growth</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='about' className="container mx-auto px-6 py-20 bg-gradient-to-r from-slate-50/50 to-blue-50/30 rounded-3xl my-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Features That Support Your Journey</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform combines cutting-edge technology with proven therapeutic techniques to create a
            personalized wellness experience.
          </p>
        </div>
        <div className="space-y-12">
          <div className="bg-white/70 backdrop-blur-sm border border-slate-100 shadow-lg hover:shadow-xl transition-all rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800">Personalized AI Prompts</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  NeuroNote analyzes your writing patterns, emotional state, and personal goals to generate
                  thoughtful prompts that guide you toward meaningful self-discovery. Each prompt is crafted to help you
                  explore different aspects of your inner world.
                </p>
                
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
                <img
                  src={prompt}
                  alt="AI prompt interface"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-slate-100 shadow-lg hover:shadow-xl transition-all rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <img
                    src={chart}
                    alt="Mood tracking charts and analytics"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800">Visual Mood Analytics</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Transform your emotional data into beautiful, insightful visualizations. Track mood patterns, identify
                  triggers, and celebrate your progress with interactive charts that make your mental health journey
                  tangible and rewarding.
                </p>
             
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-slate-100 shadow-lg hover:shadow-xl transition-all rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800">Intelligent Weekly Insights</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Receive personalized weekly summaries that highlight your emotional growth, identify recurring themes,
                  and provide actionable recommendations. NeuroNote helps you connect the dots between your
                  experiences and emotions.
                </p>
             
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
                <img
                  src={summary}
                  alt="Weekly insights dashboard"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 md:p-20 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your Mental Wellness?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
           
Let NeuroNote support your growth. Start your journal today.



          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/login"}>
                <button className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all transform hover:-translate-y-1 shadow-lg">
                  Begin Now
                </button>
            </Link>
            
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              
                 <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shadow">
                                  <img
                                      src={Logo}
                                      alt="NeuroNote Logo"
                                      className="w-8 h-8 object-contain"
                                    />
                                </div>
                                <span className="text-2xl font-bold text-slate-700">NeuroNote</span>
                              </div>
              
             
            </div>
            <p className="text-slate-600 leading-relaxed">
              Empowering your mental wellness journey through AI-powered journaling and emotional intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Product</h4>
            <div className="space-y-3">
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                Features
              </a>
             
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                Security
              </a>
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                API
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Company</h4>
            <div className="space-y-3">
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                About
              </a>
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                Blog
              </a>
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                Careers
              </a>
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Support</h4>
            <div className="space-y-3">
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-slate-600 hover:text-indigo-600 transition-colors">
                Status
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500">
              © 2025 NeuroNote. All rights reserved. Your journey to emotional wellness starts here.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage