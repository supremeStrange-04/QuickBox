'use client';
import Image from "next/image";
import Link from 'next/link';
import Header from "./_components/Header";
import { Upload, Share2, Shield, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        <div className="relative overflow-hidden h-[90vh]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient"
              >
                Share Files Instantly,
                <br className="hidden sm:block" />
                Without Complications
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Upload, share, and manage your files with ease. QuickBox makes
                file sharing simple and secure.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Link
                  href="/sign-up"
                  className="group relative px-8 py-3 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:scale-105"></div>
                  <span className="relative flex items-center justify-center space-x-2 cursor-pointer">
                    <Upload className="h-5 w-5" />
                    <span className="font-semibold">Get Started</span>
                  </span>
                </Link>
                <button className="group cursor-pointer relative px-8 py-3 rounded-lg overflow-hidden bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 border border-gray-700">
                  <span className="font-semibold text-gray-300 group-hover:text-white">
                    Learn More
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 sm:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 sm:mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose QuickBox?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group glass-card p-8"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Upload className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-white">
                  Easy Upload
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Drag and drop your files or click to upload. It's that simple.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group glass-card p-8"
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Share2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-white">
                  Quick Share
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Generate shareable links instantly and share with anyone.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group glass-card p-8"
              >
                <div className="bg-gradient-to-br from-pink-600 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-white">
                  Secure Storage
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Your files are encrypted and stored securely in the cloud.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
                Join thousands of users who trust QuickBox for their file
                sharing needs.
              </p>
              <Link
                href="/sign-up"
                className="inline-block group relative px-8 py-4 rounded-lg overflow-hidden bg-white text-gray-900 hover:scale-105 transition-transform duration-300"
              >
                <span className="font-semibold text-lg">
                  Create Free Account
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer bg-gray-800/50 backdrop-blur-lg border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Upload className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  QuickBox
                </span>
              </div>
              <p className="text-gray-400">
                Simple, secure file sharing for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/supremeStrange-04"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 QuickBox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
