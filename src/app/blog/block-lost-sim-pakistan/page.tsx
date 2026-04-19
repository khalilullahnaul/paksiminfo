import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Block a Lost or Stolen SIM Card in Pakistan Instantly 2026",
  description:
    "Step-by-step guide to block a lost or stolen SIM card in Pakistan. Carrier helpline numbers, police FIR, PTA complaint, CPLC registration, and SIM replacement process.",
  keywords: [
    "block lost sim pakistan",
    "block stolen sim card",
    "jazz sim block helpline",
    "telenor sim block number",
    "zong sim block 310",
    "ufone sim block 333",
    "pta complaint lost sim",
    "cplc stolen phone registration",
    "sim replacement pakistan",
    "police fir lost mobile",
    "block lost sim instantly pakistan 2026",
  ],
  alternates: {
    canonical:
      "https://paksiminfo.vercel.app/blog/block-lost-sim-pakistan",
  },
  openGraph: {
    title: "How to Block a Lost or Stolen SIM Card in Pakistan Instantly 2026",
    description:
      "Step-by-step guide to block a lost or stolen SIM card in Pakistan. Carrier helpline numbers, police FIR, PTA complaint, CPLC registration, and SIM replacement process.",
    url: "https://paksiminfo.vercel.app/blog/block-lost-sim-pakistan",
    type: "article",
  },
};

const faqs = [
  {
    q: "How can I block my lost SIM card immediately in Pakistan?",
    a: "The fastest way to block a lost or stolen SIM card in Pakistan is to call your carrier's helpline from any phone. Dial 111 (Jazz), 345 (Telenor), 310 (Zong), or 333 (Ufone), provide your CNIC number and the lost mobile number to the customer service representative, and request immediate blocking. You will be asked a few security verification questions. Once confirmed, the SIM is deactivated within minutes, preventing any unauthorized usage.",
  },
  {
    q: "What documents do I need for SIM replacement at a carrier franchise?",
    a: "To get a replacement SIM card with the same number at any carrier franchise in Pakistan, you need your original CNIC (Computerized National Identity Card), one photocopy of your CNIC, and the phone number you want to replace. If you have filed a police FIR for the lost SIM or phone, bring a copy of the FIR as well. Some franchises may also require a recent passport-size photograph. The replacement SIM typically costs between Rs. 50 and Rs. 200 depending on the carrier.",
  },
  {
    q: "Should I file a police FIR for a lost or stolen SIM card?",
    a: "Yes, filing a First Information Report (FIR) is strongly recommended when your SIM card is lost or stolen. Visit your nearest police station with your original CNIC, provide details about when and where the SIM was lost or stolen, and include the phone number and IMEI of the device. The FIR creates a legal record that protects you from liability if the lost SIM or phone is used for any illegal activity. It is also required for CPLC registration and can support your insurance claims if applicable.",
  },
  {
    q: "How do I register my stolen phone with CPLC?",
    a: "To register your stolen phone with the Citizens-Police Liaison Committee (CPLC), you can visit the CPLC office in person, call their helpline at 021-111-222-345, or use their online portal at cplc.org.pk. You will need to provide your CNIC, the IMEI number of the stolen device (dial *#06# on any phone to check if you have a record), the phone number associated with the SIM, a copy of the police FIR, and details about the theft incident. CPLC maintains a stolen phone database that helps recover devices and prevents them from being reused on Pakistani networks.",
  },
  {
    q: "Can someone misuse my lost SIM card in Pakistan?",
    a: "Yes, a lost or stolen SIM card can be misused in several serious ways. The person in possession can make unauthorized calls and use your balance, send threatening or fraudulent messages to your contacts, access your WhatsApp, banking apps, and social media accounts if they have your phone, register for services using your CNIC-linked identity, and potentially use the SIM for criminal activities for which you could be held legally responsible under Pakistani law, particularly PECA 2016. This is why blocking the SIM immediately is critical.",
  },
  {
    q: "How long does it take to get a replacement SIM with the same number?",
    a: "Getting a replacement SIM with the same number typically takes 15 to 30 minutes at a carrier franchise in Pakistan. You visit the franchise, complete biometric verification through a NADRA-linked device, pay the replacement fee, and receive your new SIM card. However, the new SIM may take up to 24 hours to become fully active on the network, during which time you may experience intermittent service. Your contacts, balance, and number remain the same — only the physical SIM card changes.",
  },
];

export default function BlockLostSimPakistanPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How to Block a Lost or Stolen SIM Card in Pakistan Instantly 2026",
    description:
      "Step-by-step guide to block a lost or stolen SIM card in Pakistan. Carrier helpline numbers, police FIR, PTA complaint, CPLC registration, and SIM replacement process.",
    author: {
      "@type": "Person",
      name: "Muhammad Aoun Yousaf Naul",
      jobTitle: "Telecom Analyst & Tech Strategist",
    },
    publisher: {
      "@type": "Organization",
      name: "PakSimInfo",
      url: "https://paksiminfo.vercel.app",
    },
    datePublished: "2025-03-10",
    dateModified: "2026-04-01",
    mainEntityOfPage:
      "https://paksiminfo.vercel.app/blog/block-lost-sim-pakistan",
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
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-blue-600 font-medium">
              Block Lost SIM Pakistan
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
                Updated April 2026 &middot; Emergency Guide
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              How to Block a Lost or Stolen SIM Card in Pakistan Instantly 2026
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-6 max-w-3xl">
              Your SIM card is the gateway to your digital identity — banking,
              social media, government services, and personal communications.
              If it falls into the wrong hands, the consequences can be severe.
              This guide covers every step to block your SIM immediately and
              secure your identity across all Pakistani carriers.
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
          {/* 1. Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              Introduction: What to Do When Your SIM Is Lost or Stolen
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Losing your SIM card or having it stolen is one of the most
              urgent situations a mobile phone user in Pakistan can face. A
              SIM card is far more than just a piece of plastic — it is your
              digital identity linked to your CNIC, your gateway to banking
              applications, social media accounts, WhatsApp communications,
              government verification services, and every online platform that
              relies on SMS-based two-factor authentication. When your SIM
              falls into the wrong hands, the potential for damage is enormous
              and immediate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Under Pakistani law, specifically the Prevention of Electronic
              Crimes Act (PECA) 2016, the person whose CNIC a SIM is
              registered against can be held liable for activities conducted
              through that SIM. This means that if a stolen SIM is used for
              fraud, harassment, extortion, or any other criminal activity,
              law enforcement agencies may trace the SIM back to your CNIC and
              you could face questioning, investigation, or even legal
              proceedings. The legal and financial risks of not acting
              quickly are simply too high to ignore.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The good news is that Pakistan&apos;s telecom infrastructure makes it
              relatively straightforward to block a lost or stolen SIM and
              obtain a replacement with the same number. All four major
              carriers —{" "}
              <strong>Jazz, Telenor, Zong, and Ufone</strong> — provide 24/7
              helpline services for immediate SIM blocking, and the Pakistan
              Telecommunication Authority (PTA) offers formal complaint
              channels for escalations. This comprehensive guide walks you
              through every step: from the first 30 minutes to full SIM
              replacement, including police FIR filing, PTA complaints, CPLC
              registration, and future fraud prevention strategies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Before proceeding, we recommend checking your current SIM
              registration status using our{" "}
              <Link
                href="/blog/cnic-sim-information"
                className="text-blue-600 underline hover:text-blue-800"
              >
                CNIC SIM information guide
              </Link>
              . For understanding SIM ownership details, visit our{" "}
              <Link
                href="/blog/sim-owner-detail-pakistan"
                className="text-blue-600 underline hover:text-blue-800"
              >
                SIM owner detail Pakistan page
              </Link>
              .
            </p>
          </section>

          {/* 2. Immediate Steps (First 30 Minutes) */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              Immediate Steps: Your First 30 Minutes Checklist
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you discover that your SIM card is lost or stolen, the
              first 30 minutes are critical. Every minute that passes with an
              active SIM in someone else&apos;s possession is a minute of
              potential risk. Follow this checklist in order to minimize
              damage and secure your identity as quickly as possible. The
              faster you act, the lower the chances that the SIM will be
              misused for fraudulent activities that could implicate you
              legally or financially.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Emergency Action Checklist — Complete Within 30 Minutes
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Call your carrier helpline immediately:</strong> Dial{" "}
                  <strong>111</strong> (Jazz), <strong>345</strong> (Telenor),{" "}
                  <strong>310</strong> (Zong), or <strong>333</strong> (Ufone)
                  from any phone — not just your own. You can use a friend&apos;s
                  phone or a landline.
                </li>
                <li>
                  <strong>Request instant SIM blocking:</strong> Tell the
                  customer service representative that your SIM has been lost
                  or stolen. Provide your CNIC number and the mobile number
                  for immediate deactivation.
                </li>
                <li>
                  <strong>Answer security verification questions:</strong> The
                  representative will ask for your CNIC, full name,
                  father&apos;s name, and possibly the last recharge amount or
                  frequently called numbers to verify your identity.
                </li>
                <li>
                  <strong>Get a blocking confirmation reference:</strong> Note
                  down the complaint or ticket number provided by the agent.
                  This is your proof that the SIM has been reported as lost.
                </li>
                <li>
                  <strong>Change passwords on linked accounts:</strong> If you
                  have access to another device, immediately change passwords
                  for your email, banking apps, social media, and any service
                  that uses the lost number for SMS-based verification.
                </li>
                <li>
                  <strong>Log out of WhatsApp on the lost device:</strong>
                  Open WhatsApp Web or WhatsApp on another device, go to
                  Settings, and log out of all other sessions. This revokes
                  access on the stolen phone.
                </li>
                <li>
                  <strong>Inform your contacts:</strong> Let your close
                  contacts know that your SIM has been lost, so they do not
                  fall victim to any messages or calls made from your stolen
                  number.
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-amber-800 mb-2">
                Why the First 30 Minutes Matter
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Criminals who steal SIM cards often act quickly to extract
                maximum value before the SIM is blocked. Common misuse
                scenarios include accessing banking apps through SMS OTPs,
                requesting password resets on email and social media accounts,
                making international or premium-rate calls to drain prepaid
                balance, impersonating you to defraud your contacts and
                family members, and using the SIM as part of broader identity
                theft operations. The faster you block the SIM, the narrower
                the window of opportunity for misuse.
              </p>
            </div>
          </section>

          {/* 3. Carrier Helpline Numbers */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              Carrier Helpline Numbers for SIM Blocking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Each of Pakistan&apos;s four major telecom operators provides a
              dedicated helpline that operates 24 hours a day, 7 days a week,
              including public holidays. These helplines are staffed by
              trained customer service agents who can immediately block your
              SIM upon verifying your identity. You can call from any phone —
              it does not have to be a SIM from the same carrier. The
              following table provides all the essential helpline numbers and
              SIM blocking contacts you need in an emergency.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Keep these numbers saved in your contacts or written down in a
              safe place before you ever need them. In a stressful situation
              where your phone is lost, having these numbers readily available
              can save critical minutes.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="border border-blue-800 px-4 py-3 text-left text-sm font-semibold">
                      Carrier
                    </th>
                    <th className="border border-blue-800 px-4 py-3 text-left text-sm font-semibold">
                      Helpline Number
                    </th>
                    <th className="border border-blue-800 px-4 py-3 text-left text-sm font-semibold">
                      SIM Block Code
                    </th>
                    <th className="border border-blue-800 px-4 py-3 text-left text-sm font-semibold">
                      SMS to Block
                    </th>
                    <th className="border border-blue-800 px-4 py-3 text-left text-sm font-semibold">
                      Availability
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Jazz (Mobilink/Warid)
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600 font-bold">
                      111
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600 font-bold">
                      BLANK
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600">
                      SMS &quot;BLOCK &lt;number&gt;&quot; to 4201
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      24/7
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Telenor
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600 font-bold">
                      345
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600 font-bold">
                      Helpline only
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600">
                      Call 345 to block
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      24/7
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Zong (CMPak)
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600 font-bold">
                      310
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600 font-bold">
                      Helpline only
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600">
                      Call 310 to block
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      24/7
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Ufone (PTML)
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600 font-bold">
                      333
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600 font-bold">
                      Helpline only
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-mono text-blue-600">
                      Call 333 to block
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      24/7
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-2">
                Additional Emergency Numbers
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>
                  <strong>PTA Consumer Helpline:</strong>{" "}
                  <span className="font-mono text-blue-600">0800-55056</span>{" "}
                  — for regulatory complaints and escalations
                </li>
                <li>
                  <strong>FIA Cyber Crime Helpline:</strong>{" "}
                  <span className="font-mono text-blue-600">1991</span> — for
                  reporting cybercrime related to stolen SIMs
                </li>
                <li>
                  <strong>CPLC Helpline (Karachi):</strong>{" "}
                  <span className="font-mono text-blue-600">021-111-222-345</span>{" "}
                  — for stolen phone registration
                </li>
                <li>
                  <strong>Police Emergency:</strong>{" "}
                  <span className="font-mono text-blue-600">15</span> — for
                  immediate police assistance
                </li>
                <li>
                  <strong>Rescue 1122:</strong>{" "}
                  <span className="font-mono text-blue-600">1122</span> —
                  emergency rescue service
                </li>
              </ul>
            </div>
          </section>

          {/* 4. How to Block via Carrier Helpline */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              How to Block Your SIM via Carrier Helpline (Step-by-Step)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The carrier helpline is the fastest and most direct method to
              block a lost or stolen SIM card in Pakistan. Each carrier
              follows a similar verification and blocking procedure, though
              the specific prompts and security questions may vary. Below are
              detailed step-by-step instructions for each of the four major
              Pakistani carriers. The process typically takes between 5 and 15
              minutes from the moment you connect with an agent to the moment
              your SIM is deactivated.
            </p>

            {/* Jazz */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                Blocking a Jazz SIM (Dial 111)
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Dial <strong className="font-mono text-blue-600">111</strong>{" "}
                  from any phone (Jazz number or any other network).
                </li>
                <li>
                  When the IVR menu starts, press the appropriate key to
                  speak with a customer service representative (typically
                  press 0 or say &quot;Customer Service&quot;).
                </li>
                <li>
                  Inform the agent: &quot;My SIM card has been lost/stolen and I
                  need to block it immediately.&quot;
                </li>
                <li>
                  Provide your <strong>13-digit CNIC number</strong> and the{" "}
                  <strong>mobile number</strong> that needs to be blocked.
                </li>
                <li>
                  Answer verification questions — Jazz typically asks for
                  your full name, father&apos;s name, date of birth, last
                  recharge amount, or last dialed number.
                </li>
                <li>
                  Upon successful verification, the agent will immediately
                  block the SIM. Note down the{" "}
                  <strong>complaint reference number</strong> provided.
                </li>
                <li>
                  Optionally, SMS &quot;BLOCK&quot; followed by your number to{" "}
                  <strong className="font-mono">4201</strong> as an additional
                  blocking measure.
                </li>
                <li>
                  Visit a Jazz franchise within 48 hours for SIM replacement
                  with the same number.
                </li>
              </ol>
            </div>

            {/* Telenor */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                Blocking a Telenor SIM (Dial 345)
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Dial <strong className="font-mono text-blue-600">345</strong>{" "}
                  from any phone.
                </li>
                <li>
                  Follow the IVR prompts and select the option to speak
                  with a customer service agent.
                </li>
                <li>
                  Tell the representative that your SIM has been lost or
                  stolen and request immediate blocking.
                </li>
                <li>
                  Provide your <strong>CNIC number</strong> and the{" "}
                  <strong>Telenor mobile number</strong> to be blocked.
                </li>
                <li>
                  Complete identity verification by answering security
                  questions such as your full name, address, last top-up
                  details, or frequently called numbers.
                </li>
                <li>
                  Receive the <strong>blocking confirmation</strong> and
                  complaint reference number from the agent.
                </li>
                <li>
                  Visit the nearest Telenor franchise for SIM replacement
                  when ready.
                </li>
              </ol>
            </div>

            {/* Zong */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                Blocking a Zong SIM (Dial 310)
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Dial <strong className="font-mono text-blue-600">310</strong>{" "}
                  from any phone or landline.
                </li>
                <li>
                  Navigate the IVR menu and choose to connect with a live
                  customer support agent.
                </li>
                <li>
                  Report your SIM as lost or stolen and request immediate
                  deactivation.
                </li>
                <li>
                  Provide your <strong>CNIC number</strong>,{" "}
                  <strong>mobile number</strong>, and answer Zong&apos;s security
                  verification questions.
                </li>
                <li>
                  Once verified, the agent will block the SIM instantly.
                  Note the <strong>reference number</strong> for your
                  records.
                </li>
                <li>
                  Proceed to a Zong Customer Service Center for SIM
                  replacement.
                </li>
              </ol>
            </div>

            {/* Ufone */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                Blocking a Ufone SIM (Dial 333)
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Dial <strong className="font-mono text-blue-600">333</strong>{" "}
                  from any mobile or landline phone.
                </li>
                <li>
                  Select the option to speak with a customer service
                  representative through the IVR system.
                </li>
                <li>
                  State clearly that your SIM has been lost or stolen and
                  needs to be blocked immediately.
                </li>
                <li>
                  Provide your <strong>CNIC number</strong> and{" "}
                  <strong>Ufone mobile number</strong> for identification.
                </li>
                <li>
                  Complete the security verification process by answering
                  questions about your account details and recent activity.
                </li>
                <li>
                  Receive your <strong>blocking confirmation</strong> and
                  complaint reference number.
                </li>
                <li>
                  Visit any Ufone franchise or service center to obtain a
                  replacement SIM.
                </li>
              </ol>
            </div>
          </section>

          {/* 5. Visiting the Carrier Franchise */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              Visiting the Carrier Franchise: Documents and Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              After blocking your SIM via the helpline, the next critical
              step is visiting your carrier&apos;s franchise or Customer Service
              Center to obtain a replacement SIM with the same number. This
              in-person visit is necessary because Pakistani law requires
              biometric verification through NADRA for any SIM activation,
              including replacements. The process is straightforward and
              typically takes between 15 and 30 minutes, but you need to
              bring the correct documents to avoid multiple trips.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                Documents Required for SIM Replacement
              </h4>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Original CNIC</strong> — Your Computerized National
                  Identity Card is mandatory for biometric verification. No
                  photocopy can substitute for the original.
                </li>
                <li>
                  <strong>CNIC Photocopy</strong> — One clear photocopy of
                  your CNIC (both front and back sides on a single page).
                </li>
                <li>
                  <strong>Lost Mobile Number</strong> — Know the exact phone
                  number that was lost so the franchise can look up your
                  account.
                </li>
                <li>
                  <strong>Police FIR Copy</strong> — If you have filed an FIR
                  (recommended), bring a photocopy as supporting
                  documentation.
                </li>
                <li>
                  <strong>Previous SIM Card</strong> — If you have the damaged
                  SIM card (not applicable for lost/stolen cases), bring it
                  for reference.
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                Step-by-Step Franchise Visit Process
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Visit the nearest franchise:</strong> Go to any
                  Customer Service Center or authorized franchise of your
                  carrier. Preferably visit the same carrier whose SIM was
                  lost.
                </li>
                <li>
                  <strong>Inform the representative:</strong> Tell the
                  franchise staff that you need a replacement SIM for a
                  lost/stolen number and have already blocked it via the
                  helpline.
                </li>
                <li>
                  <strong>Present your CNIC:</strong> Hand over your original
                  CNIC for biometric verification. The franchise will use a
                  NADRA-linked biometric device to scan your thumbprint.
                </li>
                <li>
                  <strong>Complete biometric verification:</strong> Place your
                  thumb on the biometric scanner. The system verifies your
                  identity against NADRA&apos;s database in real-time.
                </li>
                <li>
                  <strong>Pay the replacement fee:</strong> The franchise
                  will charge a SIM replacement fee, typically between{" "}
                  <strong>Rs. 50 and Rs. 200</strong> depending on the
                  carrier and whether you want a standard or 4G SIM.
                </li>
                <li>
                  <strong>Receive your new SIM:</strong> The franchise will
                  issue a new SIM card with your existing mobile number.
                  Your contacts, balance, and services remain unchanged.
                </li>
                <li>
                  <strong>Activate the SIM:</strong> Insert the new SIM into
                  your phone. It may take up to 24 hours for full
                  activation, though most SIMs activate within 1-2 hours.
                </li>
                <li>
                  <strong>Keep the receipt:</strong> Retain the replacement
                  receipt with the complaint reference number for your
                  records.
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-amber-800 mb-2">
                Important Notes for Franchise Visits
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>
                  Biometric verification is mandatory — no exceptions. If
                  your thumbprint does not match NADRA records, you may
                  need to visit NADRA first to update your biometrics.
                </li>
                <li>
                  The replacement SIM must be registered on the same CNIC
                  as the original SIM. You cannot transfer a number to a
                  different CNIC through SIM replacement.
                </li>
                <li>
                  If you had a 4G SIM, request a 4G replacement to
                  maintain your data services and network compatibility.
                </li>
                <li>
                  Some franchises may require a written application for
                  SIM replacement. Carry a pen and be prepared to fill
                  out a simple form.
                </li>
              </ul>
            </div>
          </section>

          {/* 6. Filing a Police Report (FIR) */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              Filing a Police Report (FIR) for a Lost or Stolen SIM
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Filing a First Information Report (FIR) with the police is a
              crucial legal step that every Pakistani citizen should take when
              their SIM card or mobile phone is lost or stolen. The FIR
              creates an official legal record documenting that you reported
              the loss and took immediate action. This document serves as your
              legal shield — if the stolen SIM or phone is subsequently used
              for any criminal activity, the FIR proves that you were not
              involved and that you took responsible action to prevent misuse.
              Under PECA 2016, having an FIR can significantly strengthen your
              legal defense if law enforcement agencies investigate
              activities traced to your SIM.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The FIR is also required for several other important processes.
              The Citizens-Police Liaison Committee (CPLC) requires an FIR
              copy to register your stolen phone in their database. Insurance
              claims for lost or stolen phones require an FIR as a mandatory
              supporting document. PTA complaints are strengthened when
              accompanied by an FIR reference. The document effectively
              becomes the foundation of your legal and administrative response
              to the loss.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                Step-by-Step FIR Filing Process
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Go to the nearest police station:</strong> Visit the
                  police station that has jurisdiction over the area where
                  your SIM or phone was lost or stolen.
                </li>
                <li>
                  <strong>Bring your original CNIC:</strong> Carry your CNIC
                  and any supporting documents such as the carrier&apos;s SIM
                  blocking confirmation.
                </li>
                <li>
                  <strong>Provide a written statement:</strong> Write or dictate
                  a clear statement describing what happened. Include the date,
                  time, and location of the loss, the phone number, the IMEI
                  number (if known), and any suspicious circumstances.
                </li>
                <li>
                  <strong>Mention the SIM number and carrier:</strong> Clearly
                  state the mobile number, the carrier (Jazz, Telenor, Zong,
                  or Ufone), and that you have already had the SIM blocked via
                  the helpline.
                </li>
                <li>
                  <strong>Include the IMEI number:</strong> If your phone was
                  also stolen, provide the 15-digit IMEI number. You can find
                  this on the phone&apos;s original packaging, purchase receipt, or
                  by checking your Google Dashboard or iCloud account.
                </li>
                <li>
                  <strong>Get a copy of the FIR:</strong> Once the FIR is
                  registered, obtain a certified copy for your records. Keep
                  the FIR number, date, and police station details handy.
                </li>
                <li>
                  <strong>Follow up regularly:</strong> Check with the police
                  station periodically about the progress of your case. If
                  the phone is recovered, the FIR reference will be essential
                  for claiming it back.
                </li>
              </ol>
            </div>

            <p className="text-gray-700 leading-relaxed">
              For comprehensive guidance on reporting SIM-related issues, read
              our{" "}
              <Link
                href="/blog/report-illegal-sim-pakistan"
                className="text-blue-600 underline hover:text-blue-800"
              >
                guide on reporting illegal SIMs in Pakistan
              </Link>
              . This resource covers PTA complaints, FIA cybercrime reporting,
              and additional escalation channels beyond the police FIR.
            </p>
          </section>

          {/* 7. PTA Complaint for Lost/Stolen SIM */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              Filing a PTA Complaint for Lost or Stolen SIM
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Pakistan Telecommunication Authority (PTA) is the national
              regulatory body overseeing all telecom operations in Pakistan. If
              you experience difficulties blocking your SIM through the carrier
              helpline, or if you want to create an official regulatory record
              of the incident, filing a complaint with PTA is an essential
              step. PTA has the authority to direct carriers to comply with
              blocking requests, investigate any irregularities in the
              process, and take action against franchise staff who may have
              been involved in SIM fraud or mishandling your case.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              PTA provides multiple channels for filing complaints about lost
              or stolen SIMs, ensuring that citizens can access help through
              their preferred communication method. Whether you choose to call,
              visit in person, or file online, PTA&apos;s complaint management
              system tracks every case and requires carriers to respond within
              a specified timeframe.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                How to File a PTA Complaint
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>PTA Consumer Helpline:</strong> Call{" "}
                  <strong className="font-mono text-blue-600">0800-55056</strong>{" "}
                  and follow the prompts to register your complaint. Have your
                  CNIC, mobile number, carrier name, and helpline complaint
                  reference ready.
                </li>
                <li>
                  <strong>PTA Online Complaint Portal:</strong> Visit the
                  official PTA website (pta.gov.pk), navigate to the
                  &quot;Consumer Complaints&quot; section, fill out the online
                  complaint form with all relevant details, and submit. You
                  will receive a tracking number.
                </li>
                <li>
                  <strong>PTA Zonal Office Visit:</strong> Visit the nearest
                  PTA zonal office in person with your original CNIC,
                  carrier blocking confirmation, and FIR copy if available.
                  PTA offices are located in Islamabad, Karachi, Lahore,
                  Peshawar, Quetta, and other major cities.
                </li>
                <li>
                  <strong>PTA Email:</strong> Send a detailed email to PTA&apos;s
                  consumer protection department describing the incident,
                  your CNIC number, mobile number, carrier, and actions
                  already taken.
                </li>
                <li>
                  <strong>Track your complaint:</strong> Use the reference
                  number provided to track the status of your complaint.
                  PTA typically requires carriers to respond within 3-5
                  working days.
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-amber-800 mb-2">
                What to Include in Your PTA Complaint
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>Your full name and 13-digit CNIC number</li>
                <li>The lost/stolen mobile number and carrier name</li>
                <li>Date and approximate time the SIM was lost or stolen</li>
                <li>Carrier helpline complaint reference number</li>
                <li>FIR number and police station details (if filed)</li>
                <li>Any suspicious circumstances surrounding the loss</li>
                <li>Your current contact number for PTA to reach you</li>
                <li>Details of any financial loss or unauthorized transactions</li>
              </ul>
            </div>
          </section>

          {/* 8. CPLC Registration for Stolen Phones */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              CPLC Registration for Stolen Phones
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Citizens-Police Liaison Committee (CPLC) is a
              non-governmental organization that works in partnership with the
              police department, primarily operating in Karachi but serving as a
              model for similar organizations in other Pakistani cities. CPLC
              maintains a comprehensive database of stolen and recovered mobile
              phones, and registering your stolen device with them significantly
              increases the chances of recovery. When a stolen phone is brought
              to a market for resale or found during police operations, CPLC
              cross-references the IMEI against their database to identify and
              return stolen devices to their rightful owners.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              CPLC registration is particularly important because it creates a
              network-wide barrier. Once your phone&apos;s IMEI is registered in
              the CPLC database, it becomes extremely difficult for thieves to
              resell the device on the open market, and attempts to use the
              phone on any Pakistani network can be flagged. This makes the
              stolen device essentially useless to criminals, reducing the
              incentive for SIM and phone theft in general.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                CPLC Registration Methods
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>In-Person Visit:</strong> Visit the CPLC office at
                  the Karachi Police Head Office or designated CPLC centers
                  with your CNIC, FIR copy, phone details, and IMEI number.
                </li>
                <li>
                  <strong>Phone Registration:</strong> Call the CPLC helpline
                  at{" "}
                  <strong className="font-mono text-blue-600">
                    021-111-222-345
                  </strong>{" "}
                  and provide all required information to the operator.
                </li>
                <li>
                  <strong>Online Portal:</strong> Visit cplc.org.pk and fill
                  out the stolen phone registration form online with your
                  CNIC, phone model, IMEI number, FIR details, and contact
                  information.
                </li>
                <li>
                  <strong>SMS Registration:</strong> In some cases, CPLC may
                  accept registration via SMS. Check their official website
                  or call their helpline for current SMS registration
                  procedures.
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-amber-800 mb-2">
                Information Needed for CPLC Registration
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>
                  <strong>IMEI Number:</strong> The 15-digit International
                  Mobile Equipment Identity number (dial *#06# on your
                  device, check original packaging or purchase receipt)
                </li>
                <li>
                  <strong>Phone Make and Model:</strong> Brand (Samsung,
                  Apple, Huawei, etc.) and exact model name
                </li>
                <li>
                  <strong>Color and Distinguishing Features:</strong> Physical
                  description including color, scratches, covers, or unique
                  markings
                </li>
                <li>
                  <strong>Date, Time, and Location of Theft:</strong> When and
                  where the phone was stolen
                </li>
                <li>
                  <strong>FIR Number:</strong> Your police report reference
                  number
                </li>
                <li>
                  <strong>Your CNIC Number:</strong> For identity verification
                </li>
                <li>
                  <strong>Current Contact Number:</strong> An alternative phone
                  number where CPLC can reach you
                </li>
              </ul>
            </div>
          </section>

          {/* 9. SIM Replacement Process */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              SIM Replacement Process: Getting a New SIM with the Same Number
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Obtaining a replacement SIM card with your existing mobile
              number is the final step in recovering from a lost or stolen SIM
              incident in Pakistan. The good news is that this process is
              efficient and well-established across all four major carriers.
              Your mobile number, remaining balance (for prepaid), active
              packages, and all associated services are preserved — you simply
              receive a new physical SIM card that connects to the same
              account. The entire process, from entering the franchise to
              walking out with a new SIM, typically takes 15 to 30 minutes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The replacement SIM goes through the same biometric verification
              process as a new SIM registration, ensuring that the number is
              only issued to the rightful CNIC holder. This is a security
              measure mandated by PTA and implemented through NADRA&apos;s
              Biometric Verification System (BVS). No carrier can issue a
              replacement SIM without successful biometric matching, which
              means that even if someone else knows your details, they cannot
              obtain a SIM for your number without your physical fingerprint.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden mb-6">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="border border-blue-800 px-4 py-3 text-left text-sm font-semibold">
                      Carrier
                    </th>
                    <th className="border border-blue-800 px-4 py-3 text-left text-sm font-semibold">
                      Replacement Fee
                    </th>
                    <th className="border border-blue-800 px-4 py-3 text-left text-sm font-semibold">
                      Activation Time
                    </th>
                    <th className="border border-blue-800 px-4 py-3 text-left text-sm font-semibold">
                      SIM Type Available
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Jazz
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Rs. 100 - 200
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 - 4 hours
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      4G/5G Ready
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Telenor
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Rs. 50 - 150
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 - 2 hours
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      4G
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Zong
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Rs. 100 - 200
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 - 4 hours
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      4G
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      Ufone
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Rs. 100 - 150
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1 - 2 hours
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      4G
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-blue-950 mb-3">
                After Receiving Your Replacement SIM
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Insert the new SIM:</strong> Place the replacement
                  SIM in your phone and power it on. Wait for network signal
                  bars to appear.
                </li>
                <li>
                  <strong>Re-register on WhatsApp:</strong> Open WhatsApp and
                  verify your number with the SMS code sent to your new SIM.
                  Your chat history should restore from backup.
                </li>
                <li>
                  <strong>Update banking apps:</strong> Re-link your phone
                  number in banking applications (JazzCash, Easypaisa, HBL
                  Mobile, etc.) by verifying via SMS OTP.
                </li>
                <li>
                  <strong>Enable two-factor authentication:</strong> Update
                  2FA settings on all your online accounts to use the new
                  SIM.
                </li>
                <li>
                  <strong>Verify SIM status:</strong> Send your CNIC to{" "}
                  <strong className="font-mono text-blue-600">668</strong> to
                  confirm that your SIM count is correct and no unauthorized
                  SIMs were registered during the incident. For detailed
                  guidance, see our{" "}
                  <Link
                    href="/blog/cnic-sim-information"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    CNIC SIM information guide
                  </Link>
                  .
                </li>
                <li>
                  <strong>Inform your contacts:</strong> Send a message from
                  your new SIM confirming your identity and asking contacts
                  to disregard any messages from the previous period.
                </li>
              </ol>
            </div>
          </section>

          {/* 10. Preventing SIM Fraud in the Future */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              Preventing SIM Fraud in the Future
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While knowing how to respond to a lost or stolen SIM is
              essential, prevention is always better than cure. SIM fraud and
              identity theft are growing concerns in Pakistan, with criminals
              employing increasingly sophisticated methods to obtain SIM cards
              registered on other people&apos;s CNICs. Taking proactive measures
              to protect your SIM and digital identity can save you from
              significant legal, financial, and personal hardship. The
              following best practices will help you minimize the risk of SIM
              fraud and ensure that your mobile identity remains secure.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 border rounded-xl p-5">
                <h4 className="font-bold text-blue-950 mb-2">
                  Regular SIM Verification
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Periodically send your CNIC to{" "}
                  <strong>668</strong> to check how many SIMs are registered
                  against your identity. If you notice any unauthorized SIMs,
                  block them immediately through the carrier franchise and
                  file a complaint with PTA. Regular monitoring helps catch
                  fraud early before it escalates. Aim to check at least once
                  every 3-6 months.
                </p>
              </div>
              <div className="bg-gray-50 border rounded-xl p-5">
                <h4 className="font-bold text-blue-950 mb-2">
                  Secure Your CNIC
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Never hand over your original CNIC to anyone except
                  authorized personnel at carrier franchises, government
                  offices, or banks. When giving photocopies, write the
                  purpose and date on the photocopy (e.g., &quot;For SIM
                  Registration — Jazz — April 2026&quot;) to prevent misuse. Be
                  cautious at workplaces, educational institutions, and
                  property dealers who may request CNIC copies.
                </p>
              </div>
              <div className="bg-gray-50 border rounded-xl p-5">
                <h4 className="font-bold text-blue-950 mb-2">
                  Enable SIM Lock on Your Phone
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Set a strong PIN, password, or biometric lock on your
                  phone. This prevents thieves from accessing your apps,
                  contacts, and data even if they steal the physical device.
                  Enable the SIM PIN lock feature (available in phone
                  settings) so the SIM cannot be used in another phone
                  without the PIN.
                </p>
              </div>
              <div className="bg-gray-50 border rounded-xl p-5">
                <h4 className="font-bold text-blue-950 mb-2">
                  Use App-Based 2FA Where Possible
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whenever available, use authenticator apps (Google
                  Authenticator, Authy) instead of SMS-based two-factor
                  authentication. This ensures that even if your SIM is
                  compromised, your accounts remain protected. Major
                  services like Google, Microsoft, and GitHub support
                  app-based 2FA.
                </p>
              </div>
              <div className="bg-gray-50 border rounded-xl p-5">
                <h4 className="font-bold text-blue-950 mb-2">
                  Monitor Financial Accounts
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Regularly check your bank statements, mobile wallet
                  balances, and credit card transactions for any
                  unauthorized activity. If you notice suspicious
                  transactions, report them to your bank immediately and
                  block the relevant services. Set up transaction alerts
                  via SMS and email for real-time monitoring.
                </p>
              </div>
              <div className="bg-gray-50 border rounded-xl p-5">
                <h4 className="font-bold text-blue-950 mb-2">
                  Be Cautious at Franchises
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  When registering a new SIM or getting a replacement,
                  ensure you witness the biometric scan yourself. Do not
                  allow franchise staff to register additional SIMs on
                  your CNIC. Count the number of SIMs registered after
                  each franchise visit by sending your CNIC to 668. If
                  the count increases unexpectedly, raise the issue
                  immediately.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              For a comprehensive understanding of SIM verification and
              monitoring, explore our{" "}
              <Link
                href="/blog/pak-sim-info-check-guide"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Pak SIM info check guide
              </Link>
              , which covers all official verification methods across Jazz,
              Telenor, Zong, and Ufone networks.
            </p>
          </section>

          {/* 11. FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-gray-50 rounded-xl border shadow-sm"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    <span>{faq.q}</span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* 12. CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Verify Your SIM Information Right Now
            </h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Use our homepage tool to instantly check SIM information
              registered against your CNIC. Stay one step ahead of SIM fraud
              by verifying your status across all Pakistani networks today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl shadow-lg transition-colors"
              >
                Check SIM Info Now
              </Link>
              <Link
                href="/blog/pak-sim-info-check-guide"
                className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Read Full Verification Guide
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-blue-950 mb-4">
              Related Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/blog/sim-owner-detail-pakistan"
                className="group block bg-gray-50 border rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-blue-950 group-hover:text-blue-600 transition-colors">
                  SIM Owner Detail Pakistan
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  How to check SIM owner details through official channels.
                </p>
              </Link>
              <Link
                href="/blog/report-illegal-sim-pakistan"
                className="group block bg-gray-50 border rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-blue-950 group-hover:text-blue-600 transition-colors">
                  Report Illegal SIM Pakistan
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Complete guide to reporting unauthorized SIMs to PTA and FIA.
                </p>
              </Link>
              <Link
                href="/blog/cnic-sim-information"
                className="group block bg-gray-50 border rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-blue-950 group-hover:text-blue-600 transition-colors">
                  CNIC SIM Information
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Check how many SIMs are registered against your CNIC.
                </p>
              </Link>
              <Link
                href="/blog/pak-sim-info-check-guide"
                className="group block bg-gray-50 border rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-blue-950 group-hover:text-blue-600 transition-colors">
                  Pak SIM Info Check Guide
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Comprehensive PTA SIM verification guide for 2026.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
