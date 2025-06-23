// Contact.jsx
function Contact({id}) {
  return (
    <section  id={id} className="bg-blue-900 text-white px-6 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Helpful Resources */}
        <div>
          <h3 className="text-xl font-semibold text-blue-200 mb-4">Helpful Resources</h3>
          <div className="flex gap-10">
            <ul className="space-y-2 text-sm">
              <li className="cursor-default">Careers</li>
              <li className="cursor-default">Lost & Stolen Cards</li>
              <li className="cursor-default">Bank Holidays</li>
              <li className="cursor-default">Money Smart for Adults</li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="cursor-default">Newsroom</li>
              <li className="cursor-default">Fraud & Security</li>
              <li className="cursor-default">Money Smart for Small Businesses</li>
              <li className="cursor-default text-blue-300">Bank Employee Login</li>
            </ul>
          </div>
        </div>

        {/* Client Services */}
        <div>
          <h3 className="text-xl font-semibold text-blue-200 mb-4">Client Services</h3>
          <p className="text-lg font-bold mb-2 text-white">XXX-XXX-XXXX</p>
          <p className="text-sm leading-relaxed text-gray-300">
            River Bank is a local community bank. We offer valuable personal and business banking solutions including <span className="font-bold text-white">checking accounts, savings accounts, commercial loans</span>, and more. <span className="font-bold text-white">Bank online</span> or visit us across India.
          </p>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-xl font-semibold text-blue-200 mb-4">Download App</h3>
          <div className="mb-4">
            <p className="font-semibold">Business Banking</p>
            <div className="flex gap-2 mt-1">
              <img src="/path/to/appstore.png" alt="App Store" className="h-10 cursor-default" />
              <img src="/path/to/playstore.png" alt="Google Play" className="h-10 cursor-default" />
            </div>
          </div>
          <div>
            <p className="font-semibold">Personal Banking</p>
            <div className="flex gap-2 mt-1">
              <img src="/path/to/appstore.png" alt="App Store" className="h-10 cursor-default" />
              <img src="/path/to/playstore.png" alt="Google Play" className="h-10 cursor-default" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 my-8"></div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2025 River Bank, N.A.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="cursor-default">Agreements & Disclosures</span>
          <span className="cursor-default">Accessibility</span>
          <span className="cursor-default">Sitemap</span>
          <span className="cursor-default">Website by Rajat Mathur</span>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;
