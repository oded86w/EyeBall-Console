
import { render } from 'preact';
import { useState } from 'preact/hooks';
import { html } from 'htm/preact';

const ShieldIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.944c0-2.226-.55-4.32-1.5-6.084z" />
  </svg>
`;

const DlpIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
`;

const SaasIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m18-10a4 4 0 00-4-4H9a4 4 0 00-4 4v2m14-2a4 4 0 004 4v2m-4-4h-2m-4-4h-2m8-4H9" />
  </svg>
`;

const WebIcon = () => html`
 <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
`;

const ExtensionIcon = () => html`
 <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6.598 4.098l-2.122 2.122M4 12H2m15.098 6.598l-2.122-2.122M12 20v-1m6-11h-2M9.402 7.402L7.28 5.28M14.598 16.598l2.122 2.122M12 8a4 4 0 110 8 4 4 0 010-8z" />
</svg>
`;

const MgmtIcon = () => html`
 <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`;

const BlindSpotIcon = () => html`
<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.122 4.122l-8.244 8.244M4.122 4.122l11.756 11.756" />
</svg>
`;

const LatencyIcon = () => html`
<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
`;

const App = () => {
  const [activeTab, setActiveTab] = useState('Business');

  const heroContent = {
    Personal: {
      headline: 'Reclaim Your Digital Privacy.',
      intro: 'PrivSurf is a powerful browser extension that puts you back in control. Block intrusive ads, trackers, and malicious scripts for a faster, safer, and more private browsing experience. Your data is yours, and we help you keep it that way.'
    },
    Business: {
      headline: 'Your Browser is the New Endpoint. Secure It.',
      intro: `In today's distributed workforce, the web browser has become the primary workspace—and the biggest attack surface. PrivSurf transforms the browser from a point of vulnerability into a secure, managed, and compliant environment, protecting your organization without compromising productivity.`
    }
  };
  
  const content = heroContent[activeTab];

  return html`
    <div class="flex flex-col min-h-screen">
      <header class="bg-brand-dark/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-brand-dark-secondary/50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <div class="flex items-center space-x-3">
              <img src="https://privsurf.com/logo_outline_thick_dark.png" alt="PrivSurf Logo" class="h-10 w-auto" />
              <span class="text-2xl font-bold text-white">PrivSurf</span>
            </div>
            <div class="bg-brand-dark-secondary p-1 rounded-full flex items-center space-x-1">
              <button onClick=${() => setActiveTab('Personal')} class="px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeTab === 'Personal' ? 'bg-brand-blue text-white' : 'text-brand-light-secondary hover:text-white'}">Personal</button>
              <button onClick=${() => setActiveTab('Business')} class="px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeTab === 'Business' ? 'bg-brand-blue text-white' : 'text-brand-light-secondary hover:text-white'}">Business</button>
            </div>
          </div>
        </div>
      </header>
      
      <main class="flex-grow pt-20">
        <section id="hero" class="relative py-20 md:py-32 overflow-hidden">
           <div class="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-secondary to-brand-dark bg-300% animate-gradient-bg -z-10"></div>
           <div class="absolute inset-0 bg-grid-pattern opacity-5 -z-10" style=${{backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'%23161B22\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")'}}></div>
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter mb-6">
              ${content.headline}
            </h1>
            <p class="max-w-3xl mx-auto text-lg md:text-xl text-brand-light-secondary mb-10">
              ${content.intro}
            </p>
            <div class="flex justify-center space-x-4">
              <a href="mailto:info@eyeballsecurity.com" class="bg-brand-blue hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Request a Demo
              </a>
            </div>
          </div>
        </section>

        ${activeTab === 'Business' ? html`<${BusinessFeatures} />` : html`<${PersonalFeatures} />`}

      </main>

      <footer class="bg-brand-dark-secondary border-t border-brand-dark-secondary/50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-brand-light-secondary">
          <p>PrivSurf 2025. All rights reserved.</p>
          <p class="mt-2">Contact us: <a href="mailto:info@eyeballsecurity.com" class="text-brand-blue hover:underline"info@eyeballsecurity.com</a></p>
        </div>
      </footer>
    </div>
  `;
};

const BusinessFeatures = () => {
    const features = [
        {
            icon: html`<${ShieldIcon} />`,
            title: 'Comprehensive Threat & Content Defense',
            description: 'Protect users and data from the full spectrum of web-based threats.',
            points: [
                'Proactively block phishing, malware, and clickjacking.',
                'Enforce acceptable use policies with intelligent web filtering.',
                'Control file downloads and block uploads to unauthorized sites.',
                '<strong>Zero-Day Exploit Prevention:</strong> Neutralize malicious components on websites in real-time.'
            ]
        },
        {
            icon: html`<${DlpIcon} />`,
            title: 'Next-Generation Data Loss Prevention (DLP)',
            description: 'Gain full control over sensitive data with a context-aware, browser-native DLP engine.',
            points: [
                'Monitor and prevent data exfiltration (copy/paste, uploads, etc).',
                'Detect PII, financial data, or custom-defined proprietary info.',
                'Apply policies based on destination (e.g., social media, personal webmail, GenAI).',
                'Choose to alert, block, or redact sensitive data in real-time.'
            ]
        },
        {
            icon: html`<${SaasIcon} />`,
            title: 'Secure SaaS & AI Adoption',
            description: 'Empower your teams to use modern tools safely and securely.',
            points: [
                'Discover and manage all SaaS applications, identifying shadow IT.',
                'Prevent sensitive data from being pasted into public generative AI prompts.',
                'Enforce tenant restrictions for M365, Google Workspace, and more.'
            ]
        },
        {
            icon: html`<${WebIcon} />`,
            title: 'Protect Company Websites',
            description: 'Apply zero-trust principles directly within the browser for your most sensitive web applications.',
            points: [
                'Mask sensitive data on-screen and apply user-specific watermarks.',
                'Selectively disable printing, downloads, and copy/paste per-app.',
                'Harden browser by disabling developer tools on critical pages.',
                'Encrypt sensitive session cookies to prevent hijacking.'
            ]
        },
        {
            icon: html`<${ExtensionIcon} />`,
            title: 'Total Extension & Privacy Control',
            description: 'Manage the browser environment to reduce risk and protect user privacy.',
            points: [
                'Discover and assess all browser extensions in your environment.',
                'Enforce allowlists or blocklists to prevent risky add-ons.',
                'Block trackers, ads, and advanced fingerprinting techniques.'
            ]
        },
        {
            icon: html`<${MgmtIcon} />`,
            title: 'Centralized Management & Visibility',
            description: "Manage your entire browser fleet with a refreshingly simple portal. We believe in reducing admin overhead, not adding another complex system to learn.",
            points: [
                'Unified policy management for easy, consistent enforcement across all users.',
                'Insightful dashboards and alerts that give you clarity, not complexity.',
                'Designed for speed and simplicity, making browser security effortless.',
                'Free your IT team from the burden of managing another complicated tool.'
            ]
        }
    ];

  return html`
    <section id="business-features" class="py-20 bg-brand-dark">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate-fade-in-up">
                <h2 class="text-3xl md:text-4xl font-extrabold text-white">Why PrivSurf for Business?</h2>
                <p class="mt-4 text-lg text-brand-light-secondary max-w-2xl mx-auto">Our on-device, zero-latency solution provides security that traditional SASE and SSE proxies can't match.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <!-- EDR Blind Spot Card -->
                <div class="bg-brand-dark-secondary border border-brand-light/10 rounded-lg p-8 animate-fade-in-up" style=${{animationDelay: '0.2s'}}>
                    <div class="flex items-start">
                        <${BlindSpotIcon} />
                        <div class="ml-4">
                            <h3 class="text-xl font-bold text-white mb-2">Eliminate the EDR Blind Spot</h3>
                            <p class="text-brand-light-secondary">Endpoint Detection and Response (EDR) tools are blind to encrypted browser activity. PrivSurf operates directly within the browser, providing deep visibility and control over web traffic and user actions that EDRs completely miss, closing a critical security gap.</p>
                        </div>
                    </div>
                </div>

                <!-- Zero Latency Card -->
                <div class="bg-brand-dark-secondary border border-brand-light/10 rounded-lg p-8 animate-fade-in-up" style=${{animationDelay: '0.4s'}}>
                    <div class="flex items-start">
                         <${LatencyIcon} />
                        <div class="ml-4 flex-grow">
                            <h3 class="text-xl font-bold text-white mb-2">Zero Latency, Maximum Productivity</h3>
                            <p class="text-brand-light-secondary mb-4">Unlike cloud proxies that route traffic through stopovers, creating lag, PrivSurf works on-device. Security is instant, seamless, and never slows your team down.</p>
                             <div class="mt-4 h-24 relative">
                                <svg class="w-full h-full" viewBox="0 0 200 65">
                                    <path id="directPath" d="M 10 20 H 190" stroke="none" fill="none" />
                                    <path id="proxyPath" d="M 10 50 C 35 50, 35 30, 60 30 L 120 30 C 145 30, 145 50, 190 50" stroke="none" fill="none" />
                                    
                                    <!-- Direct Path -->
                                    <text x="10" y="12" fill="#8B949E" font-size="6">PrivSurf (On-Device)</text>
                                    <path d="M 10 20 H 190" stroke="#2AAA8A" stroke-width="1.5" stroke-dasharray="3 3" />
                                    <circle cx="0" cy="0" r="3" fill="#2AAA8A">
                                        <animateMotion dur="2s" repeatCount="indefinite" path="M 10 20 H 190" />
                                    </circle>
                                    
                                    <!-- Proxy Path -->
                                    <text x="10" y="64" fill="#8B949E" font-size="6">SASE/SSE (Cloud Proxy)</text>
                                    <path d="M 10 50 C 35 50, 35 30, 60 30 L 120 30 C 145 30, 145 50, 190 50" stroke="#8B949E" stroke-width="1.5" stroke-dasharray="3 3" />
                                    
                                    <!-- Stopovers -->
                                    <circle cx="60" cy="30" r="3" fill="#8B949E" />
                                    <text x="50" y="25" fill="#8B949E" font-size="6">Stop 1</text>
                                    <circle cx="120" cy="30" r="3" fill="#8B949E" />
                                    <text x="110" y="25" fill="#8B949E" font-size="6">Stop 2</text>
                                    
                                    <!-- Animating Circle -->
                                    <circle cx="0" cy="0" r="3" fill="#8B949E">
                                        <animateMotion 
                                            dur="8s" 
                                            repeatCount="indefinite" 
                                            path="M 10 50 C 35 50, 35 30, 60 30 L 120 30 C 145 30, 145 50, 190 50"
                                            keyPoints="0; 0.3; 0.3; 0.6; 0.6; 1"
                                            keyTimes="0; 0.25; 0.375; 0.625; 0.75; 1"
                                            calcMode="linear"
                                        />
                                    </circle>

                                    <!-- Start and End Points -->
                                    <text x="5" y="38" fill="white" font-size="6">User</text>
                                    <circle cx="10" cy="20" r="4" fill="#388BFD" />
                                    <circle cx="10" cy="50" r="4" fill="#388BFD" />

                                    <text x="175" y="38" fill="white" font-size="6">Website</text>
                                    <circle cx="190" cy="20" r="4" fill="#A371F7" />
                                    <circle cx="190" cy="50" r="4" fill="#A371F7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mb-12 animate-fade-in-up" style=${{animationDelay: '0.5s'}}>
                 <h3 class="text-3xl font-extrabold text-white">Key Features & Capabilities</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${features.map((feature, index) => html`
                    <div class="bg-brand-dark-secondary border border-brand-light/10 rounded-lg p-6 flex flex-col animate-fade-in-up" style=${{animationDelay: `${0.6 + index * 0.1}s`}}>
                        ${feature.icon}
                        <h3 class="text-xl font-bold text-white mb-2">${feature.title}</h3>
                        <p class="text-brand-light-secondary mb-4 flex-grow">${feature.description}</p>
                        <ul class="space-y-2 text-sm text-brand-light">
                            ${feature.points.map(point => html`
                                <li class="flex items-start">
                                    <svg class="w-4 h-4 mr-2 mt-1 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span dangerouslySetInnerHTML=${{__html: point}}></span>
                                </li>
                            `)}
                        </ul>
                    </div>
                `)}
            </div>
        </div>
    </section>
  `;
};

const PersonalFeatures = () => {
    const features = [
        { title: 'Ad & Tracker Blocking', description: 'Enjoy a cleaner, faster web by eliminating intrusive ads and third-party trackers that compromise your privacy.' },
        { title: 'Malware & Phishing Protection', description: 'Stay safe from malicious websites, phishing scams, and unwanted scripts that try to steal your information.' },
        { title: 'Privacy Enhancement', description: 'Prevent advanced tracking techniques like browser fingerprinting, ensuring your online identity remains anonymous.' },
        { title: 'Lightweight & Fast', description: 'PrivSurf is built for performance. It secures your browsing without slowing you down, using minimal system resources.' },
    ];

    return html`
    <section id="personal-features" class="py-20 bg-brand-dark">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 animate-fade-in-up">
                <h2 class="text-3xl md:text-4xl font-extrabold text-white">Your Personal Security Shield</h2>
                <p class="mt-4 text-lg text-brand-light-secondary">Essential tools for a secure and private browsing experience.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                ${features.map((feature, index) => html`
                    <div class="bg-brand-dark-secondary border border-brand-light/10 rounded-lg p-8 text-center animate-fade-in-up" style=${{animationDelay: `${0.2 + index * 0.1}s`}}>
                        <h3 class="text-xl font-bold text-white mb-3">${feature.title}</h3>
                        <p class="text-brand-light-secondary">${feature.description}</p>
                    </div>
                `)}
            </div>
        </div>
    </section>
    `;
};


render(html`<${App} />`, document.getElementById('root'));
