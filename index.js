
import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { html } from 'htm/preact';

const Logo = ({ className = "h-10 w-auto" }) => html`
  <svg class=${className} viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#00B4D8;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0077B6;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#48CAE4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#00B4D8;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M60 40H290V130C290 230 175 300 175 300C175 300 60 230 60 130V40Z" stroke="url(#logoGradient)" stroke-width="12" fill="none" stroke-linejoin="round"/>
    <path d="M66 46H284V80H66V46Z" fill="url(#logoGradient)"/>
    <circle cx="90" cy="63" r="6" fill="white"/>
    <circle cx="115" cy="63" r="6" fill="white"/>
    <circle cx="140" cy="63" r="6" fill="white"/>
    <circle cx="175" cy="170" r="60" stroke="url(#innerGradient)" stroke-width="15" fill="none"/>
    <circle cx="175" cy="170" r="30" fill="url(#logoGradient)"/>
    <circle cx="190" cy="155" r="10" fill="white"/>
    <path d="M85 210C100 240 180 270 240 200" stroke="url(#logoGradient)" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M230 215L245 195L265 215" stroke="url(#logoGradient)" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const TeaserView = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    country: '',
    phone: '',
    userCount: '',
    message: 'Waitlist Request'
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const FORM_ID = '1FAIpQLScYi-BZpQhljVCBqYnBE6kSKd_jzfoc3e2nW6X3uXdqjSqD5w'; 
    const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
    
    const entryMap = {
      name: 'entry.574550258', 
      email: 'entry.1872030215',
      company: 'entry.1461556309',
      jobTitle: 'entry.175529297',
      country: 'entry.1264833653',
      phone: 'entry.480554394',
      userCount: 'entry.1043238434',
      message: 'entry.1871175189'
    };

    const urlParams = new URLSearchParams();
    urlParams.append(entryMap.name, formData.name);
    urlParams.append(entryMap.email, formData.email);
    urlParams.append(entryMap.company, formData.company);
    urlParams.append(entryMap.jobTitle, formData.jobTitle);
    urlParams.append(entryMap.country, formData.country);
    urlParams.append(entryMap.phone, formData.phone);
    urlParams.append(entryMap.userCount, formData.userCount);
    urlParams.append(entryMap.message, formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlParams.toString()
      });
      setStatus('success');
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('success'); // Assume success for UX in no-cors
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return html`
    <section class="min-h-[85vh] flex flex-col items-center justify-center py-20 px-6 text-center animate-fade-in-up">
      <div class="relative mb-12">
        <div class="absolute -inset-10 bg-brand-blue/20 rounded-full blur-[80px] animate-pulse-soft"></div>
        <img src="https://console.eyeballsecurity.com/web-app-manifest-512x512.png" alt="EyeBall Logo" class="relative h-48 md:h-64 w-auto transform hover:scale-105 transition-transform duration-700" />
      </div>

      <div class="max-w-4xl mx-auto w-full">
        <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 rounded-full border border-brand-blue/20">
          Stay Tuned • The Future of Browser Security
        </span>
        
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
          Something Big Is Coming.
        </h1>
        
        <p class="text-xl md:text-2xl text-brand-light-secondary mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
          Yes, soon there will be a management system that will <span class="text-brand-cyan">change the way you protect</span> the browser and browsing in your organization.
        </p>

        ${status === 'success' ? html`
          <div class="bg-brand-green/10 border border-brand-green/20 rounded-2xl p-8 text-brand-green animate-fade-in-up max-w-xl mx-auto">
            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="font-bold text-2xl mb-2">You're on the list!</p>
            <p class="opacity-80">Our team will notify you as soon as the platform launches.</p>
          </div>
        ` : html`
          <div class="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm max-w-3xl mx-auto shadow-2xl text-left">
            <div class="mb-8 text-center">
              <h3 class="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
              <p class="text-brand-light-secondary text-sm">Secure your early access to the EyeBall Management Console.</p>
            </div>
            
            <form onSubmit=${handleSubmit} class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-[10px] font-bold text-brand-light-secondary uppercase tracking-widest mb-2 ml-1">Full Name</label>
                  <input required name="name" value=${formData.name} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="John Doe" />
                </div>
                <div>
                  <label class="block text-[10px] font-bold text-brand-light-secondary uppercase tracking-widest mb-2 ml-1">Work Email</label>
                  <input required type="email" name="email" value=${formData.email} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="john@company.com" />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-[10px] font-bold text-brand-light-secondary uppercase tracking-widest mb-2 ml-1">Company</label>
                  <input required name="company" value=${formData.company} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="Acme Corp" />
                </div>
                <div>
                  <label class="block text-[10px] font-bold text-brand-light-secondary uppercase tracking-widest mb-2 ml-1">Job Title</label>
                  <input required name="jobTitle" value=${formData.jobTitle} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="CISO / IT Manager" />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-[10px] font-bold text-brand-light-secondary uppercase tracking-widest mb-2 ml-1">Country</label>
                  <input required name="country" value=${formData.country} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="e.g. United States" />
                </div>
                <div>
                  <label class="block text-[10px] font-bold text-brand-light-secondary uppercase tracking-widest mb-2 ml-1">Mobile Phone</label>
                  <input required type="tel" name="phone" value=${formData.phone} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label class="block text-[10px] font-bold text-brand-light-secondary uppercase tracking-widest mb-2 ml-1">Number of Users</label>
                <select required name="userCount" value=${formData.userCount} onChange=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition appearance-none">
                  <option value="" disabled selected>Select user range...</option>
                  <option value="1-50">1-50 Users</option>
                  <option value="51-250">51-250 Users</option>
                  <option value="251-1000">251-1,000 Users</option>
                  <option value="1000+">1,000+ Users</option>
                </select>
              </div>

              <button disabled=${status === 'sending'} type="submit" class="w-full bg-brand-blue hover:bg-brand-cyan text-brand-dark font-black py-4 rounded-xl transition shadow-xl shadow-brand-blue/20 flex items-center justify-center space-x-2 text-lg">
                ${status === 'sending' ? html`
                  <svg class="animate-spin h-6 w-6 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Adding to list...</span>
                ` : 'Notify Me'}
              </button>
            </form>
          </div>
        `}
        
        <p class="mt-12 text-brand-light-secondary font-mono text-sm tracking-widest animate-pulse-soft">
          KEEP FOLLOWING
        </p>
      </div>
    </section>
  `;
};

const PrivacyPolicyView = () => html`
  <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up text-left">
    <div class="mb-16 text-center border-b border-white/10 pb-12">
      <h1 class="text-5xl font-black text-white mb-4">Privacy Policy</h1>
      <p class="text-brand-blue font-mono text-sm tracking-widest uppercase">Version 2.1 | Effective: May 2025</p>
    </div>
    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-12">
      <section>
        <h2 class="text-2xl font-bold text-white mb-6">1. Commitment to Privacy</h2>
        <p>At EyeBall Security, we understand that our mission—protecting your organization’s data—is inextricably linked to protecting user privacy. This policy outlines our rigorous standards for data handling, built on the principle of <strong>Privacy by Design</strong>.</p>
      </section>
      <section>
        <h2 class="text-2xl font-bold text-white mb-6">2. Waitlist Information</h2>
        <p>For our coming soon phase, we collect contact information (Name, Email, Company, Job Title, Country, Phone, User Count) exclusively to provide updates regarding our launch and to better understand the needs of interested organizations. This data is handled securely and is never sold to third parties.</p>
      </section>
    </div>
  </section>
`;

const TermsOfServiceView = () => html`
  <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up text-left">
    <div class="mb-16 text-center border-b border-white/10 pb-12">
      <h1 class="text-5xl font-black text-white mb-4">Terms of Service</h1>
      <p class="text-brand-cyan font-mono text-sm tracking-widest uppercase">Master Subscription Agreement | May 2025</p>
    </div>
    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-12">
      <section>
        <h2 class="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
        <p>This Master Subscription Agreement ("Agreement") is between EyeBall Security Inc. ("EyeBall") and the organization or individual ("Customer") accessing our services. By joining our waitlist, you agree to be contacted with news and updates about EyeBall.</p>
      </section>
    </div>
  </section>
`;

const App = () => {
  const [view, setView] = useState('landing');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'landing';
      const validViews = ['landing', 'privacy', 'terms'];
      if (validViews.includes(hash)) {
        setView(hash);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (newView) => {
    window.location.hash = newView;
  };

  return html`
    <div class="flex flex-col min-h-screen">
      <header class="bg-brand-dark/90 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <button onClick=${() => handleNavigate('landing')} class="flex items-center space-x-3 focus:outline-none group">
              <div class="relative">
                 <div class="absolute -inset-1 bg-brand-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                 <${Logo} className="relative h-12 w-auto" />
              </div>
              <span class="text-2xl font-bold text-white tracking-tight">EyeBall</span>
            </button>
            <div class="flex items-center">
              <span class="text-xs font-mono text-brand-blue/60 uppercase tracking-widest hidden sm:block">Advanced Browser Governance</span>
            </div>
          </div>
        </div>
      </header>
      
      <main class="flex-grow pt-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-secondary to-brand-dark bg-300% animate-gradient-bg -z-10"></div>
        <div class="absolute inset-0 bg-grid-pattern opacity-10 -z-10"></div>
        
        ${view === 'privacy' ? html`<${PrivacyPolicyView} />` : 
          view === 'terms' ? html`<${TermsOfServiceView} />` : html`<${TeaserView} />`}
      </main>

      <footer class="bg-brand-dark-secondary border-t border-white/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div class="flex items-center justify-center space-x-3 mb-6">
             <${Logo} className="h-10 w-auto grayscale opacity-50" />
             <span class="text-xl font-bold text-brand-light-secondary">EyeBall</span>
          </div>
          <p class="text-brand-light-secondary text-sm">EyeBall 2025. Secure the Web. All rights reserved.</p>
          
          <div class="mt-10 flex justify-center space-x-8 text-[10px] text-brand-light-secondary font-bold uppercase tracking-[0.2em]">
             <a href="https://eyeballsecurity.com/#privacy" target="_blank" rel="noopener noreferrer" class="hover:text-white transition decoration-white/10 underline underline-offset-4">Privacy</a>
             <a href="https://eyeballsecurity.com/#terms" target="_blank" rel="noopener noreferrer" class="hover:text-white transition decoration-white/10 underline underline-offset-4">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  `;
};

render(html`<${App} />`, document.getElementById('root'));
