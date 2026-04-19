import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Report Illegal/Unregistered SIMs in Pakistan 2026",
  description:
    "Learn how to report illegal or unregistered SIMs registered against your CNIC in Pakistan. Step-by-step guide for PTA complaints, CPLC, and FIA cybercrime reporting.",
  keywords: [
    "report illegal sim pakistan",
    "unregistered sim complaint",
    "pta complaint sim fraud",
    "fia cybercrime sim",
    "cplc sim report",
    "block unauthorized sim cnic",
    "peca 2016 sim penalty",
    "sim fraud report pakistan",
    "how to report fake sim",
    "unauthorized sim on cnic",
    "pta helpline complaint",
    "fir sim fraud pakistan",
  ],
  alternates: {
    canonical:
      "https://paksiminfo-gules.vercel.app/blog/report-illegal-sim-pakistan",
  },
  openGraph: {
    title: "How to Report Illegal/Unregistered SIMs in Pakistan 2026",
    description:
      "Learn how to report illegal or unregistered SIMs registered against your CNIC in Pakistan. Step-by-step guide for PTA complaints, CPLC, and FIA cybercrime reporting.",
    url: "https://paksiminfo-gules.vercel.app/blog/report-illegal-sim-pakistan",
    type: "article",
  },
};

const faqs = [
  {
    q: "How do I report an illegal SIM registered against my CNIC?",
    a: "To report an illegal SIM registered against your CNIC, follow a three-step process. First, send your CNIC number to PTA's 668 SMS service to confirm the unauthorized SIM and note the carrier. Second, visit the nearest franchise of that carrier with your original CNIC and request immediate blocking of the unauthorized SIM after biometric verification. Third, file a formal complaint with PTA through their helpline (0800-55056), online complaint portal, or by visiting a PTA zonal office. For serious cases involving criminal activity, also file an FIR at your local police station and report the matter to FIA Cybercrime Wing.",
  },
  {
    q: "What is the penalty for registering a SIM on someone else's CNIC without consent?",
    a: "Under the Prevention of Electronic Crimes Act (PECA) 2016, unauthorized registration of a SIM on another person's CNIC is a criminal offense punishable by up to three years of imprisonment and/or a fine of up to PKR 5 million (approximately USD 18,000). Additionally, PTA regulations impose administrative penalties on the responsible franchise or agent, which can include revocation of their sales license and financial penalties ranging from PKR 50,000 to PKR 500,000 per violation. Both the individual who fraudulently registered the SIM and any complicit franchise employee can face prosecution.",
  },
  {
    q: "Can I file a complaint with FIA Cybercrime Wing for SIM fraud?",
    a: "Yes, the FIA Cybercrime Wing has jurisdiction over SIM-related cybercrimes under PECA 2016. You can file a complaint by visiting the nearest FIA Cybercrime Reporting Center, calling their helpline (1991), or submitting a complaint through the FIA's online portal. When filing, bring your original CNIC, the 668 SMS response showing unauthorized SIMs, carrier complaint reference numbers, and a copy of any FIR you have filed. The FIA can investigate the origin of the fraudulent SIM registration, trace the person who activated it, and prosecute offenders under Section 3 of PECA 2016.",
  },
  {
    q: "How long does it take for PTA to block an unauthorized SIM after a complaint?",
    a: "PTA typically processes SIM blocking complaints within 24 to 72 hours of receiving a valid complaint with supporting documentation. When you file a complaint through a carrier franchise, the carrier is required to block the SIM within 24 hours. Complaints filed directly with PTA through their helpline or online portal may take 48 to 72 hours for processing. In cases involving FIA investigation or ongoing criminal proceedings, the timeline may extend to 7 to 14 days. You should verify the SIM has been removed by sending your CNIC to 668 again after 72 hours.",
  },
  {
    q: "Should I file an FIR if I find unknown SIMs registered on my CNIC?",
    a: "Yes, filing an FIR (First Information Report) is strongly recommended if you discover unknown SIMs on your CNIC. The FIR creates an official legal record that you reported the unauthorized SIMs and took prompt action, which protects you from potential criminal liability if those SIMs were used for illegal activities before discovery. To file the FIR, visit your local police station with your original CNIC, a printout of your PTA 668 response, carrier complaint reference numbers, and any evidence of when or how your CNIC may have been compromised. The police are obligated to register the FIR under PECA 2016 and Pakistani criminal law.",
  },
  {
    q: "What information do I need to provide when reporting an illegal SIM?",
    a: "When reporting an illegal SIM, you should prepare the following documents and information: your original CNIC and a photocopy, the PTA 668 SMS response showing the unauthorized SIM count, the carrier complaint reference number (if you have already contacted the carrier), a written statement describing how and when you discovered the unauthorized SIM, details of any suspicious activity (such as receiving unexpected OTP codes or calls), and any evidence of who might have had access to your CNIC. For FIA complaints, also bring any FIR copies and digital evidence such as screenshots of threatening messages received from the unauthorized number.",
  },
];

export default function ReportIllegalSimPakistanPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Report Illegal/Unregistered SIMs in Pakistan 2026",
    description:
      "Learn how to report illegal or unregistered SIMs registered against your CNIC in Pakistan. Step-by-step guide for PTA complaints, CPLC, and FIA cybercrime reporting.",
    author: {
      "@type": "Person",
      name: "Muhammad Aoun Yousaf Naul",
      jobTitle: "Telecom Analyst & Tech Strategist",
    },
    publisher: {
      "@type": "Organization",
      name: "PakSimInfo",
      url: "https://paksiminfo-gules.vercel.app",
    },
    datePublished: "2025-02-01",
    dateModified: "2026-04-01",
    mainEntityOfPage:
      "https://paksiminfo-gules.vercel.app/blog/report-illegal-sim-pakistan",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-100 border-b" aria-label="Breadcrumb">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-blue-600 font-medium">
              Report Illegal SIM Pakistan
            </li>
          </ol>
        </div>
      </nav>

      <article className="bg-white">
        {/* Hero */}
        <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-blue-800/40 border border-blue-700/50 rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="text-blue-200">
                Updated April 2026 &middot; Comprehensive Legal Guide
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              How to Report Illegal/Unregistered SIMs in Pakistan 2026
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 mb-8 max-w-3xl leading-relaxed">
              Complete guide to identifying, reporting, and blocking unauthorized
              SIMs registered against your CNIC. Covers PTA complaints, CPLC
              reporting, FIA Cybercrime procedures, and FIR filing.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
              <span>
                By{" "}
                <strong className="text-white">
                  Muhammad Aoun Yousaf Naul
                </strong>
              </span>
              <span>&middot;</span>
              <span>Telecom Analyst</span>
              <span>&middot;</span>
              <span>Last Updated: April 2026</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Table of Contents */}
          <nav className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold text-blue-950 mb-4">
              Table of Contents
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <a
                  href="#introduction"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Introduction — Why Reporting Illegal SIMs Matters
                </a>
              </li>
              <li>
                <a
                  href="#check-unauthorized-sims"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  How to Check for Unauthorized SIMs on Your CNIC
                </a>
              </li>
              <li>
                <a
                  href="#red-flags"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Identifying Illegal SIM Registration — Red Flags
                </a>
              </li>
              <li>
                <a
                  href="#pta-complaint"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  PTA Complaint Process
                </a>
              </li>
              <li>
                <a
                  href="#cplc-reporting"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  CPLC (Citizens-Police Liaison Committee) Reporting
                </a>
              </li>
              <li>
                <a
                  href="#fia-cybercrime"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  FIA Cybercrime Reporting — PECA 2016
                </a>
              </li>
              <li>
                <a
                  href="#police-fir"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Police FIR Process for SIM Fraud
                </a>
              </li>
              <li>
                <a
                  href="#legal-framework"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Legal Framework — PECA 2016 and PTA Regulations
                </a>
              </li>
              <li>
                <a
                  href="#step-by-step-guide"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Step-by-Step Complete Reporting Guide
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Timeline — What Happens After You File a Complaint
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* 1. Introduction */}
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              1. Introduction — Why Reporting Illegal SIMs Matters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pakistan has over 195 million active mobile SIM registrations as of
              2026, making SIM fraud one of the most prevalent forms of identity
              theft in the country. Every mobile SIM card sold in Pakistan must be
              biometrically registered against a valid Computerized National
              Identity Card (CNIC) under PTA regulations. This system is designed
              to ensure accountability, but it also creates a significant
              vulnerability — when someone registers a SIM on your CNIC without
              your consent, you become legally responsible for all activities
              conducted through that number.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The consequences of illegal SIM registration extend far beyond
              inconvenience. Unauthorized SIMs registered on your CNIC can be used
              for financial fraud, harassment, extortion, terrorist communication,
              and other criminal activities. Under Pakistani law, the CNIC holder
              is the primary person of interest when a SIM registered under their
              identity is traced during a criminal investigation. This means that
              failing to report and block unauthorized SIMs can result in police
              raids, interrogations, legal notices, and in severe cases, arrest —
              all for crimes you had no involvement in.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Prevention of Electronic Crimes Act (PECA) 2016 established
              strict penalties for SIM-related fraud, including imprisonment of
              up to three years and fines of up to PKR 5 million. PTA has also
              strengthened its enforcement mechanisms, conducting regular
              re-verification drives and imposing heavy penalties on franchises
              found facilitating unauthorized SIM registrations. Despite these
              measures, incidents of SIM fraud continue to rise, with thousands
              of complaints reported to PTA each month.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reporting illegal SIMs is not just a right — it is a civic
              responsibility. Every unauthorized SIM you report and block reduces
              the potential for criminal activity and strengthens Pakistan&apos;s
              digital security framework. This comprehensive guide covers every
              official channel available for reporting illegal SIMs in Pakistan as
              of 2026, including PTA complaints, CPLC reporting, FIA Cybercrime
              procedures, and the police FIR process.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-amber-800 mb-2">
                Why You Must Act Immediately
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>
                  <strong>Legal liability:</strong> You can be held criminally
                  responsible for activities conducted through unauthorized SIMs
                  on your CNIC.
                </li>
                <li>
                  <strong>Financial fraud:</strong> Criminals use unauthorized
                  SIMs to open bank accounts, apply for loans, and conduct
                  fraudulent transactions.
                </li>
                <li>
                  <strong>Harassment:</strong> Your identity can be linked to
                  threatening calls, spam messages, and blackmail.
                </li>
                <li>
                  <strong>Terrorism risk:</strong> Law enforcement agencies
                  actively trace SIMs used in criminal and terrorist activities,
                  and the registered CNIC holder becomes a person of interest.
                </li>
                <li>
                  <strong>Credit score impact:</strong> SIMs linked to your CNIC
                  can be used for mobile banking fraud, affecting your credit
                  history.
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Before you can report illegal SIMs, you need to first confirm
              whether any unauthorized SIMs exist on your CNIC. For a detailed
              guide on checking your CNIC SIM information, read our{" "}
              <Link
                href="/blog/cnic-sim-information"
                className="text-blue-600 underline hover:text-blue-800"
              >
                CNIC SIM information guide
              </Link>
              . To understand how SIM owner details work in Pakistan, visit our{" "}
              <Link
                href="/blog/sim-owner-detail-pakistan"
                className="text-blue-600 underline hover:text-blue-800"
              >
                SIM owner detail Pakistan page
              </Link>
              .
            </p>
          </section>

          {/* 2. How to Check for Unauthorized SIMs on Your CNIC */}
          <section id="check-unauthorized-sims" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              2. How to Check for Unauthorized SIMs on Your CNIC (PTA 668)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The first and most critical step in reporting illegal SIMs is to
              confirm their existence. The Pakistan Telecommunication Authority
              (PTA) provides the <strong>668 SMS service</strong> as the primary
              tool for citizens to check how many SIMs are registered against
              their CNIC across all four major networks — Jazz, Telenor, Zong,
              and Ufone. This service is available 24 hours a day, 7 days a
              week, and works from any mobile number regardless of which carrier
              you use.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use the 668 service, open your phone&apos;s messaging app and send
              your 13-digit CNIC number (without dashes or spaces) via SMS to{" "}
              <strong className="font-mono text-blue-600">668</strong>. The
              service costs Rs. 2 plus applicable taxes per query. Within 2 to 5
              minutes, you will receive a reply SMS showing the total number of
              SIMs registered against your CNIC on each network. For example, a
              typical response reads: &quot;Total SIMs against CNIC 35201-XXXXXXX-X
              are: Jazz 03, Telenor 02, Zong 01, Ufone 02. Total: 08.&quot;
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to the 668 SMS service, PTA provides an online
              verification portal through its DIRBS (Device Identification,
              Registration and Blocking System) platform. You can visit the
              official PTA website, navigate to the SIM verification section,
              and enter your CNIC number to view the same information available
              through 668. The online portal has the advantage of being free to
              use and providing a printable record that you can attach to
              complaint forms and legal documents.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                Quick Check Methods at a Glance
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="border border-blue-800 px-4 py-3 text-left font-semibold">
                        Method
                      </th>
                      <th className="border border-blue-800 px-4 py-3 text-left font-semibold">
                        How to Use
                      </th>
                      <th className="border border-blue-800 px-4 py-3 text-left font-semibold">
                        Cost
                      </th>
                      <th className="border border-blue-800 px-4 py-3 text-left font-semibold">
                        Coverage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        PTA 668 SMS
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Send CNIC to{" "}
                        <span className="font-mono text-blue-600">668</span>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Rs. 2 + tax
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        All networks
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        PTA Online Portal
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Visit pta.gov.pk → SIM Verification
                      </td>
                      <td className="border border-gray-200 px-4 py-3">Free</td>
                      <td className="border border-gray-200 px-4 py-3">
                        All networks
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        Jazz / Telenor / Ufone
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Dial{" "}
                        <span className="font-mono text-blue-600">*110#</span>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">Free</td>
                      <td className="border border-gray-200 px-4 py-3">
                        Respective network only
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">
                        Zong
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        Dial{" "}
                        <span className="font-mono text-blue-600">*310#</span>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">Free</td>
                      <td className="border border-gray-200 px-4 py-3">
                        Zong network only
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Once you have confirmed that unauthorized SIMs exist on your CNIC,
              take a screenshot of the 668 response or print the online portal
              results. This evidence is essential when filing complaints with
              PTA, carriers, and law enforcement agencies. For a complete
              overview of all SIM verification methods, explore our{" "}
              <Link
                href="/blog/pak-sim-info-check-guide"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Pak SIM info check guide
              </Link>
              .
            </p>
          </section>

          {/* 3. Identifying Illegal SIM Registration */}
          <section id="red-flags" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              3. Identifying Illegal SIM Registration — Red Flags
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before you can report an illegal SIM, it is important to understand
              the signs that indicate fraudulent registration has occurred. SIM
              fraud in Pakistan often happens through several common methods:
              dishonest franchise employees who register additional SIMs without
              consent during legitimate transactions, individuals who temporarily
              gain physical access to your CNIC card, data breaches at
              registration points, and organized criminal networks that purchase
              CNIC data from corrupt sources.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Being aware of the following red flags can help you detect
              unauthorized SIM registration early, before the SIM is used for
              criminal activity:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: "Higher SIM Count Than Expected",
                  desc: "If the PTA 668 response shows more SIMs than you actually own, the difference likely represents unauthorized registrations. Cross-check each carrier's count against the SIMs you currently use.",
                },
                {
                  title: "Unexpected OTP Messages",
                  desc: "Receiving one-time passwords (OTPs) for services you never signed up for — mobile banking, WhatsApp, social media, or ride-hailing apps — strongly indicates someone is using a SIM registered on your CNIC.",
                },
                {
                  title: "Unknown Numbers Calling Your Contacts",
                  desc: "If friends, family, or colleagues report receiving calls or messages from unknown numbers claiming to be you, your identity may have been compromised through an unauthorized SIM.",
                },
                {
                  title: "Legal Notices or Summons",
                  desc: "Receiving legal notices, court summons, or police inquiries related to activities you had no involvement in may indicate that a SIM registered on your CNIC has been used for illegal purposes.",
                },
                {
                  title: "Bank or Financial Alerts",
                  desc: "Notifications from banks, mobile wallets, or financial institutions about account openings or transactions you never initiated suggest your CNIC data has been used for financial fraud through an unauthorized SIM.",
                },
                {
                  title: "Sudden Credit Score Drop",
                  desc: "An unexpected decrease in your credit score or appearance of unknown loans on your credit report can result from someone using an unauthorized SIM to open fraudulent accounts in your name.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-5"
                >
                  <h4 className="font-bold text-blue-950 mb-2 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              If you notice any of these red flags, immediately send your CNIC
              to 668 and compare the response with your actual SIM count. Any
              discrepancy should be treated as a potential case of SIM fraud that
              requires immediate reporting. For guidance on blocking a lost or
              stolen SIM before it can be misused, read our{" "}
              <Link
                href="/blog/block-lost-sim-pakistan"
                className="text-blue-600 underline hover:text-blue-800"
              >
                guide to blocking lost SIMs in Pakistan
              </Link>
              .
            </p>
          </section>

          {/* 4. PTA Complaint Process */}
          <section id="pta-complaint" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              4. PTA Complaint Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Pakistan Telecommunication Authority (PTA) is the primary
              regulatory body responsible for SIM registration oversight in
              Pakistan. PTA has established multiple channels for citizens to
              report unauthorized SIMs, and filing a formal PTA complaint is a
              critical step in the reporting process. PTA has the authority to
              investigate the complaint, penalize the responsible franchise or
              individual, and ensure that the unauthorized SIMs are permanently
              blocked and removed from your CNIC record.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              There are three official channels for filing a PTA complaint
              regarding unauthorized SIMs:
            </p>

            <div className="space-y-6 my-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-950 mb-3">
                  Channel 1: PTA Online Complaint Portal
                </h4>
                <p className="text-gray-700 mb-3">
                  The most convenient method is filing a complaint through PTA&apos;s
                  online consumer protection portal. Visit the official PTA
                  website, navigate to the &quot;Consumer Complaint&quot; or &quot;Grievance&quot;
                  section, and fill out the online complaint form. You will need
                  to provide your CNIC number, contact information, the carrier
                  name showing unauthorized SIMs, and a description of the
                  issue. Attach a screenshot of your 668 SMS response as
                  evidence. After submission, you will receive a complaint
                  reference number for tracking.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                  <li>
                    Visit the PTA official website (pta.gov.pk)
                  </li>
                  <li>
                    Navigate to &quot;Consumer Protection&quot; or &quot;File a Complaint&quot;
                  </li>
                  <li>
                    Select the complaint category &quot;Unauthorized SIM
                    Registration&quot;
                  </li>
                  <li>
                    Fill in your personal details (CNIC, name, contact number,
                    email)
                  </li>
                  <li>
                    Enter the carrier name and describe the unauthorized SIMs
                  </li>
                  <li>
                    Upload the 668 response screenshot as evidence
                  </li>
                  <li>
                    Submit the form and note your complaint reference number
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-950 mb-3">
                  Channel 2: PTA Helpline
                </h4>
                <p className="text-gray-700 mb-3">
                  PTA operates a toll-free consumer helpline at{" "}
                  <strong className="font-mono text-blue-600">
                    0800-55056
                  </strong>{" "}
                  that is available during business hours. Call this number and
                  explain your situation to the customer service representative.
                  Provide your CNIC number, the 668 response details, and any
                  carrier complaint references you already have. The helpline
                  agent will register your complaint in PTA&apos;s system and provide
                  you with a tracking number. For urgent matters, the helpline
                  can also connect you with a PTA zonal office directly.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-950 mb-3">
                  Channel 3: PTA Email and Zonal Offices
                </h4>
                <p className="text-gray-700 mb-3">
                  You can also submit a written complaint via email to PTA&apos;s
                  consumer protection department or visit a PTA zonal office in
                  person. PTA has regional offices in Islamabad, Lahore, Karachi,
                  Quetta, and Peshawar. When visiting in person, bring your
                  original CNIC, a copy of the 668 response, and any carrier
                  complaint references. In-person complaints often receive faster
                  processing as the matter is documented directly by a PTA
                  officer who can initiate an investigation immediately.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-amber-800 mb-2">Important Notes</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>
                  Always contact the carrier franchise first before escalating to
                  PTA, as carrier-level blocking is faster (24 hours vs. 48-72
                  hours for PTA).
                </li>
                <li>
                  Keep your complaint reference numbers from every channel —
                  carrier franchise, PTA helpline, PTA portal — for tracking
                  and follow-up.
                </li>
                <li>
                  PTA may request additional information or documentation during
                  the investigation, so respond promptly to any communication.
                </li>
                <li>
                  If the unauthorized SIMs were registered by a specific franchise
                  employee, provide their name or the franchise location to PTA
                  for investigation.
                </li>
              </ul>
            </div>
          </section>

          {/* 5. CPLC Reporting */}
          <section id="cplc-reporting" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              5. CPLC (Citizens-Police Liaison Committee) Reporting
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Citizens-Police Liaison Committee (CPLC) is a non-governmental
              organization that works in partnership with Pakistani law
              enforcement agencies, particularly in Karachi and major urban
              centers. CPLC provides a valuable supplementary reporting channel
              for SIM fraud cases, especially when the unauthorized SIMs are
              being used for harassment, extortion, or other criminal activities.
              CPLC&apos;s strength lies in its direct coordination with police
              authorities, which can accelerate investigation and enforcement.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              CPLC operates dedicated helplines and complaint centers where
              citizens can report SIM-related fraud. When you file a complaint
              with CPLC, the organization coordinates with the relevant police
              station, telecom operators, and sometimes FIA to ensure that the
              matter is investigated thoroughly. CPLC is particularly effective
              in cases involving repeated harassment from numbers traced to your
              CNIC, as they can facilitate direct police action against the
              perpetrators.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                How to File a CPLC Complaint
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Contact CPLC:</strong> Call the CPLC helpline at{" "}
                  <strong className="font-mono text-blue-600">1102</strong>{" "}
                  (Karachi) or visit the nearest CPLC office in your city.
                </li>
                <li>
                  <strong>Provide your details:</strong> Share your CNIC number,
                  name, contact information, and a description of the SIM fraud
                  situation.
                </li>
                <li>
                  <strong>Submit evidence:</strong> Provide the 668 response
                  screenshot, carrier complaint references, and any evidence of
                  criminal activity (harassment messages, fraud alerts, etc.).
                </li>
                <li>
                  <strong>Get a complaint reference:</strong> CPLC will issue a
                  complaint tracking number and assign the case to a coordination
                  officer.
                </li>
                <li>
                  <strong>Follow up:</strong> CPLC will coordinate with police
                  and telecom operators to investigate. Follow up regularly using
                  your reference number.
                </li>
                <li>
                  <strong>Police coordination:</strong> CPLC will facilitate the
                  filing of an FIR at the relevant police station if one has not
                  already been filed.
                </li>
              </ol>
            </div>
            <p className="text-gray-700 leading-relaxed">
              While CPLC is most active in Karachi, similar citizen-police
              liaison organizations operate in other major cities including
              Lahore (PACLA), Islamabad, and Peshawar. Regardless of your
              location, CPLC&apos;s approach of bridging citizens with law
              enforcement makes it a powerful ally in combating SIM fraud. If
              you have already taken steps to{" "}
              <Link
                href="/blog/block-lost-sim-pakistan"
                className="text-blue-600 underline hover:text-blue-800"
              >
                block a lost SIM
              </Link>{" "}
              but suspect fraud has already occurred, CPLC can help coordinate a
              comprehensive investigation.
            </p>
          </section>

          {/* 6. FIA Cybercrime Reporting */}
          <section id="fia-cybercrime" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              6. FIA Cybercrime Reporting — PECA 2016
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Federal Investigation Agency (FIA) Cybercrime Wing is the
              premier law enforcement body for investigating electronic crimes in
              Pakistan, including SIM-related fraud under the Prevention of
              Electronic Crimes Act (PECA) 2016. The FIA has jurisdiction over
              cases involving unauthorized SIM registration, identity theft
              through SIM fraud, cyber harassment using unauthorized SIMs, and
              any electronic crime where an illegally registered SIM is used as
              an instrument. Filing a complaint with FIA Cybercrime is
              particularly important when the unauthorized SIMs have been or are
              being used for criminal activities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under PECA 2016, unauthorized SIM registration falls under
              Section 3 (Offenses against the confidentiality of data), Section
              4 (Offenses against the integrity of data), and Section 10
              (Cyber stalking). The penalties for these offenses are severe: up
              to three years of imprisonment, fines of up to PKR 5 million, or
              both. The FIA has the authority to arrest suspects, seize devices
              and SIM cards, conduct forensic analysis, and prosecute offenders
              in the cybercrime courts established under PECA.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-red-800 mb-3">
                When to Report to FIA Cybercrime Wing
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>
                  The unauthorized SIMs have been used for financial fraud,
                  bank account openings, or loan applications in your name.
                </li>
                <li>
                  You are receiving threats, harassment, or extortion demands from
                  numbers you did not register.
                </li>
                <li>
                  The unauthorized SIMs are being used for terrorist
                  communication or other serious criminal activities.
                </li>
                <li>
                  You have evidence that a specific person or organized group is
                  systematically registering SIMs on multiple CNICs.
                </li>
                <li>
                  You are being investigated by police or intelligence agencies
                  due to activities traced to SIMs on your CNIC that you did not
                  register.
                </li>
                <li>
                  Multiple unauthorized SIMs have been discovered across
                  different carriers, suggesting an organized fraud operation.
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                FIA Cybercrime Reporting Process
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Prepare your evidence:</strong> Gather your original
                  CNIC, 668 response screenshot, carrier complaint references,
                  FIR copy (if filed), screenshots of threatening messages or
                  fraud alerts, and any other relevant documentation.
                </li>
                <li>
                  <strong>Visit an FIA Cybercrime Reporting Center:</strong> FIA
                  has reporting centers in major cities. Find the nearest center
                  through the FIA website or call their helpline.
                </li>
                <li>
                  <strong>Call the FIA helpline:</strong> Dial{" "}
                  <strong className="font-mono text-blue-600">1991</strong>{" "}
                  for the FIA Cybercrime helpline. They can provide guidance on
                  filing the complaint and may direct you to the nearest
                  reporting center.
                </li>
                <li>
                  <strong>Submit the online complaint:</strong> Use the FIA
                  Cybercrime Wing&apos;s online complaint portal to submit a formal
                  complaint with all evidence attached electronically.
                </li>
                <li>
                  <strong>File the written complaint:</strong> At the reporting
                  center, complete the official complaint form providing all
                  details of the unauthorized SIM registration and any criminal
                  activities associated with it.
                </li>
                <li>
                  <strong>Receive a complaint number:</strong> The FIA will issue
                  a formal complaint reference number for tracking purposes.
                </li>
                <li>
                  <strong>Cooperate with the investigation:</strong> The FIA may
                  call you for additional questioning, ask for more evidence, or
                  request your cooperation in identifying suspects.
                </li>
              </ol>
            </div>
          </section>

          {/* 7. Police FIR Process */}
          <section id="police-fir" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              7. Police FIR Process for SIM Fraud
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Filing a First Information Report (FIR) at your local police
              station is one of the most important steps in the SIM fraud
              reporting process. The FIR creates an official legal record that
              you discovered unauthorized SIMs on your CNIC and took immediate
              action — a critical document that can protect you from criminal
              liability if those SIMs were used for illegal activities before
              you became aware of them. Under Pakistani law, the police are
              obligated to register an FIR when a citizen reports a cognizable
              offense, and SIM fraud is cognizable under both PECA 2016 and the
              Pakistan Penal Code.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When filing the FIR, be as specific and detailed as possible. The
              FIR should include the date and time you discovered the
              unauthorized SIMs (via the 668 SMS), the number of extra SIMs
              found on each carrier, the carrier complaint reference numbers
              you have already obtained, and any evidence of criminal activity
              linked to the unauthorized numbers. If you know or suspect who
              may have registered the SIMs (such as a specific franchise
              employee), include that information as well.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                Step-by-Step FIR Filing Process
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Gather all documents:</strong> Original CNIC,
                  photocopy of CNIC, 668 response screenshot or printout,
                  carrier complaint references, and any evidence of fraud or
                  harassment.
                </li>
                <li>
                  <strong>Visit your local police station:</strong> Go to the
                  station nearest to your residence. You can also visit any
                  station where the jurisdiction is relevant.
                </li>
                <li>
                  <strong>Approach the duty officer:</strong> Explain to the
                  station duty officer (moharrar) that you want to file an FIR
                  for unauthorized SIM registration and potential identity theft
                  under PECA 2016.
                </li>
                <li>
                  <strong>Dictate the FIR:</strong> Clearly narrate the facts —
                  when you discovered the unauthorized SIMs, how you discovered
                  them, what actions you have already taken (carrier complaint,
                  PTA complaint), and any evidence of criminal activity.
                </li>
                <li>
                  <strong>Review and sign the FIR:</strong> Read the FIR
                  carefully before signing. Ensure all facts are accurately
                  recorded. The FIR should be registered under relevant sections
                  of PECA 2016 and the Pakistan Penal Code.
                </li>
                <li>
                  <strong>Obtain a copy:</strong> Request a certified copy of the
                  FIR for your records. This copy is essential for follow-up with
                  PTA, FIA, and any legal proceedings.
                </li>
                <li>
                  <strong>Follow up:</strong> Regularly follow up with the
                  investigating officer assigned to your case. Provide any
                  additional evidence or cooperation they request.
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-amber-800 mb-2">
                If the Police Refuse to Register the FIR
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                If the police station refuses to register your FIR, which
                unfortunately happens in some cases, you have the following
                legal recourses under Pakistani law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>
                  <strong>Write to the SHO:</strong> Submit a written application
                  to the Station House Officer (SHO) detailing the offense and
                  requesting FIR registration.
                </li>
                <li>
                  <strong>Approach the DSP/SP:</strong> Escalate to the
                  Deputy Superintendent of Police or Superintendent of Police for
                  your area.
                </li>
                <li>
                  <strong>File in court:</strong> Under Article 22-A of the
                  Constitution, you can approach the court of a magistrate for
                  the registration of the FIR.
                </li>
                <li>
                  <strong>Report to FIA:</strong> FIA Cybercrime Wing can
                  register cases directly under PECA 2016 without requiring a
                  local police FIR first.
                </li>
              </ul>
            </div>
          </section>

          {/* 8. Legal Framework */}
          <section id="legal-framework" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              8. Legal Framework — PECA 2016 and PTA Regulations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pakistan&apos;s legal framework for addressing unauthorized SIM
              registration is built on two primary pillars: the Prevention of
              Electronic Crimes Act (PECA) 2016 and PTA&apos;s regulatory framework
              under the Pakistan Telecommunication (Re-Organization) Act 1996.
              Together, these laws establish clear criminal offenses, penalties,
              and regulatory enforcement mechanisms for SIM fraud, providing
              both deterrence and remedies for victims.
            </p>

            <h3 className="text-xl font-bold text-blue-950 mb-4 mt-8">
              PECA 2016 — Key Provisions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Prevention of Electronic Crimes Act was enacted in 2016 to
              address the growing threat of cybercrime in Pakistan. Several
              provisions of PECA are directly relevant to unauthorized SIM
              registration:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="border border-blue-800 px-4 py-3 text-left font-semibold">
                      Section
                    </th>
                    <th className="border border-blue-800 px-4 py-3 text-left font-semibold">
                      Offense
                    </th>
                    <th className="border border-blue-800 px-4 py-3 text-left font-semibold">
                      Penalty
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Section 3
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Unauthorized access to data / identity theft
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Up to 3 years imprisonment and/or fine up to PKR 5 million
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Section 4
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Offenses against integrity of data
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Up to 3 years imprisonment and/or fine up to PKR 5 million
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Section 10
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Cyber stalking and online harassment
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Up to 3 years imprisonment, fine up to PKR 1 million, or
                      both
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Section 54
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      General penalty provisions
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Variable based on offense severity
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-blue-950 mb-4 mt-8">
              PTA Regulations — SIM Registration Requirements
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              PTA enforces SIM registration through a comprehensive regulatory
              framework that mandates biometric verification for all SIM sales,
              limits the number of SIMs per CNIC, and establishes penalties for
              violations. Key regulatory provisions include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
              <li>
                <strong>Biometric verification mandatory:</strong> All SIM sales
                must involve NADRA-linked biometric thumbprint verification of
                the CNIC holder. No SIM can be activated without a successful
                biometric match.
              </li>
              <li>
                <strong>Maximum 5 SIMs per network:</strong> A single CNIC can
                have a maximum of 5 SIMs registered on each of the four major
                networks (Jazz, Telenor, Zong, Ufone), for a theoretical maximum
                of 20 SIMs total.
              </li>
              <li>
                <strong>Franchise penalties:</strong> PTA can impose fines
                ranging from PKR 50,000 to PKR 500,000 per violation on
                franchises found selling SIMs without proper verification. Repeat
                offenders face license revocation.
              </li>
              <li>
                <strong>Individual penalties:</strong> Persons who fraudulently
                register SIMs on another&apos;s CNIC face criminal prosecution
                under PECA 2016 in addition to PTA administrative penalties.
              </li>
              <li>
                <strong>Re-verification drives:</strong> PTA periodically
                conducts nationwide SIM re-verification drives, requiring all
                existing SIM holders to re-verify their SIMs through biometric
                authentication.
              </li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-red-800 mb-2">
                Criminal Liability Warning
              </h4>
              <p className="text-gray-700 text-sm">
                Under Pakistani law, if you knowingly discover unauthorized SIMs
                on your CNIC and fail to report them, you may be considered
                complicit in any criminal activities conducted through those
                SIMs. Courts have held CNIC holders partially responsible when
                they failed to take reasonable steps to block unauthorized SIMs
                after becoming aware of them. The legal obligation to report is
                not optional — it is a duty imposed by both PECA 2016 and PTA
                regulations. Protect yourself by reporting immediately upon
                discovery.
              </p>
            </div>
          </section>

          {/* 9. Step-by-Step Complete Reporting Guide */}
          <section id="step-by-step-guide" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              9. Step-by-Step Complete Reporting Guide
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Now that you understand all the available reporting channels, here
              is the complete, optimized step-by-step process for reporting
              illegal SIMs registered on your CNIC in Pakistan. This guide
              prioritizes the fastest and most effective actions first, then
              escalates to formal legal channels for comprehensive protection.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-4">
                Complete Reporting Process — Numbered Steps
              </h4>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  <strong>Verify with PTA 668:</strong> Send your 13-digit CNIC
                  (without dashes) via SMS to{" "}
                  <span className="font-mono text-blue-600">668</span>. Wait
                  2-5 minutes for the response. Compare the SIM count per carrier
                  against your actual SIMs. Take a screenshot of the response as
                  primary evidence.
                </li>
                <li>
                  <strong>Document everything:</strong> Write down the date and
                  time of discovery, the exact SIM counts per carrier, and the
                  total discrepancy. Save the 668 SMS screenshot securely.
                </li>
                <li>
                  <strong>Visit the carrier franchise immediately:</strong> Go to
                  the nearest franchise of the carrier showing unauthorized SIMs.
                  Bring your original CNIC and a photocopy.
                </li>
                <li>
                  <strong>Request SIM blocking:</strong> Inform the franchise
                  representative that you want to block all unauthorized SIMs.
                  Complete biometric verification to prove your identity.
                </li>
                <li>
                  <strong>Obtain a carrier complaint reference:</strong> Fill out
                  the carrier&apos;s official complaint form and get a reference
                  number. Ask for written confirmation that the blocking request
                  has been submitted. Keep a copy of everything.
                </li>
                <li>
                  <strong>File a PTA complaint:</strong> Using the carrier
                  complaint reference, file a formal complaint with PTA through
                  the online portal, helpline (0800-55056), or a PTA zonal
                  office. Attach the 668 screenshot and carrier reference.
                </li>
                <li>
                  <strong>File an FIR at your police station:</strong> Visit your
                  local police station with all documents (CNIC, 668 screenshot,
                  carrier reference, PTA complaint number). File an FIR for
                  unauthorized SIM registration and identity theft under PECA
                  2016. Obtain a certified copy of the FIR.
                </li>
                <li>
                  <strong>Report to FIA Cybercrime (if applicable):</strong> If
                  the unauthorized SIMs show evidence of criminal use (fraud,
                  harassment, threats), file a complaint with FIA Cybercrime Wing
                  through their helpline (1991), online portal, or nearest
                  reporting center.
                </li>
                <li>
                  <strong>Report to CPLC (if in an applicable city):</strong> In
                  Karachi and other cities with CPLC or similar organizations,
                  file a supplementary complaint for additional coordination with
                  police.
                </li>
                <li>
                  <strong>Verify after 72 hours:</strong> Send your CNIC to 668
                  again to confirm the unauthorized SIMs have been removed from
                  your record. If they are still present, follow up with the
                  carrier and PTA using your reference numbers.
                </li>
                <li>
                  <strong>Monitor regularly:</strong> Make it a habit to check
                  your SIM count via 668 at least once every three months to
                  catch any new unauthorized registrations early.
                </li>
                <li>
                  <strong>Protect your CNIC:</strong> Never hand over your CNIC
                  card to strangers. When providing CNIC copies, write
                  &quot;Purpose: [specific use] — Date: [current date]&quot; on the
                  photocopy. Be vigilant about who has access to your physical
                  CNIC card.
                </li>
              </ol>
            </div>
          </section>

          {/* 10. Timeline */}
          <section id="timeline" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              10. Timeline — What Happens After You File a Complaint
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding the expected timeline for each stage of the
              complaint process helps you plan your follow-up actions and set
              realistic expectations. The timeline below outlines what typically
              happens after you file complaints through the various channels
              described in this guide:
            </p>

            <div className="space-y-4">
              {[
                {
                  time: "Immediate (0-2 hours)",
                  title: "Carrier Franchise Blocking Request",
                  desc: "The franchise submits the SIM blocking request to the carrier's central system. Biometric verification is completed and the complaint is registered in the carrier's database.",
                },
                {
                  time: "24-48 hours",
                  title: "SIM Blocking by Carrier",
                  desc: "The carrier processes the blocking request and deactivates the unauthorized SIMs. You should receive a confirmation SMS once the blocking is complete.",
                },
                {
                  time: "48-72 hours",
                  title: "PTA Complaint Processing",
                  desc: "PTA reviews your complaint, verifies the information with the carrier, and issues directives for any additional SIMs to be blocked. Your complaint is entered into PTA's tracking system.",
                },
                {
                  time: "72 hours - 7 days",
                  title: "FIR Investigation Begins",
                  desc: "The police station assigns an investigating officer to your FIR. The officer may contact you for additional information, visit the franchise where the SIM was registered, and begin gathering evidence.",
                },
                {
                  time: "1-2 weeks",
                  title: "FIA Investigation (If Filed)",
                  desc: "The FIA Cybercrime Wing begins its investigation, which may include forensic analysis of SIM activation records, surveillance of suspects, and coordination with NADRA to trace the biometric verification used.",
                },
                {
                  time: "2-4 weeks",
                  title: "Verification of SIM Removal",
                  desc: "Send your CNIC to 668 again to confirm all unauthorized SIMs have been removed. PTA typically completes the full cleanup within 2-4 weeks of receiving the initial complaint.",
                },
                {
                  time: "1-3 months",
                  title: "Legal Proceedings",
                  desc: "If criminal charges are filed against the person who fraudulently registered the SIMs, the case enters the judicial process. This includes court hearings, evidence presentation, and potential prosecution under PECA 2016.",
                },
                {
                  time: "3-6 months",
                  title: "Case Resolution",
                  desc: "Most SIM fraud cases are resolved within 3-6 months. Resolution may include conviction and sentencing of offenders, franchise license revocation, and full cleanup of your CNIC record.",
                },
              ].map((item) => (
                <div
                  key={item.time}
                  className="flex gap-4 items-start bg-gray-50 border border-gray-200 rounded-xl p-5"
                >
                  <div className="flex-shrink-0 bg-blue-950 text-white text-xs font-bold rounded-lg px-3 py-2 text-center leading-tight min-w-[120px]">
                    {item.time}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-amber-800 mb-2">
                Important Timeline Notes
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>
                  <strong>Carrier blocking is the fastest path:</strong> SIMs
                  blocked directly at the franchise are usually deactivated
                  within 24 hours.
                </li>
                <li>
                  <strong>PTA processing may take longer for complex cases:</strong>
                  If multiple carriers are involved or the investigation reveals
                  a systematic fraud operation, PTA processing can extend beyond
                  the typical 72-hour window.
                </li>
                <li>
                  <strong>FIR investigations vary:</strong> The speed of police
                  investigation depends on the severity of the offense, the
                  workload of the local police station, and the quality of
                  evidence provided.
                </li>
                <li>
                  <strong>Always follow up:</strong> Do not assume your complaint
                  is being processed automatically. Follow up with every channel
                  (carrier, PTA, police) at least once a week until the matter
                  is fully resolved.
                </li>
              </ul>
            </div>
          </section>

          {/* 11. FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              11. Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-left font-semibold text-blue-950 hover:bg-blue-50 transition-colors">
                    <span>{faq.q}</span>
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-8 sm:p-12 text-white text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Check Your SIM Information Now
              </h2>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Don&apos;t wait until it&apos;s too late. Send your CNIC to 668 right
                now and check if all SIMs registered against your identity are
                authorized. If you find any discrepancies, use this guide to
                report and block them immediately.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-blue-950 font-bold px-8 py-3 rounded-full hover:bg-blue-100 transition-colors text-lg"
              >
                Go to PakSimInfo Home
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/cnic-sim-information",
                  title: "CNIC SIM Information Guide",
                  desc: "Learn how to check how many SIMs are registered against your CNIC using PTA 668 and other methods.",
                },
                {
                  href: "/blog/block-lost-sim-pakistan",
                  title: "Block Lost SIM in Pakistan",
                  desc: "Step-by-step guide to blocking a lost or stolen SIM to prevent misuse.",
                },
                {
                  href: "/blog/sim-owner-detail-pakistan",
                  title: "SIM Owner Detail Pakistan",
                  desc: "Official methods to check SIM ownership details in Pakistan.",
                },
                {
                  href: "/blog/pak-sim-info-check-guide",
                  title: "Pak SIM Info Check Guide",
                  desc: "Complete guide to PTA SIM verification across all Pakistani networks.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                >
                  <h3 className="font-bold text-blue-950 mb-1 group-hover:text-blue-700">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
