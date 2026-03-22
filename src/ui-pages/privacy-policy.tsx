'use client'
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInCard } from "@/components/FadeInCard";

const sections = [
  {
    title: "1. Company Information",
    content: `Medzare Pharma Private Limited ("Company", "we", "our", or "us") is a private limited company incorporated under the Companies Act, 2013, registered with the Ministry of Corporate Affairs, Government of India.

Corporate Identity Number (CIN): U46497DL2026PTC464403
PAN: AAUCM6526E
TAN: DELMS4364C
ROC: ROC Delhi 1 · Registration No. 464403
Date of Incorporation: 11 March 2026

Registered Office:
H-30, Plot 6 & 7, 3rd Floor, Gulshan Park,
Vijay Chowk, Laxmi Nagar, East Delhi,
India — 110092

Contact: shirshpalak20@gmail.com | +91-8435369211`,
  },
  {
    title: "2. Information We Collect",
    content: `When you interact with our website or contact us, we may collect the following categories of personal information:

• Contact Information: name, email address, phone number
• Business Information: company name, designation, nature of inquiry
• Technical Data: IP address, browser type, device information, pages visited, time and date of access
• Communication Records: correspondence you send us via email or contact forms

We collect this information only when you voluntarily provide it to us, such as when you reach out for inquiries, partnerships, or business collaborations.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the personal information we collect for the following legitimate purposes:

• To respond to your inquiries and business communications
• To facilitate pharmaceutical partnerships and collaborations
• To send information about our products, services, and company updates (where consent is given)
• To comply with legal and regulatory obligations under Indian law
• To improve the functionality and content of our website
• To protect the rights and safety of our company and stakeholders

We do not sell, rent, or trade your personal information to any third parties for commercial purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your personal data in accordance with:

• The Information Technology Act, 2000 and the Information Technology (Amendment) Act, 2008
• The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
• Applicable provisions of the Companies Act, 2013
• Any other relevant legislation enacted by the Government of India

Our processing is based on your consent, legitimate business interests, and compliance with legal obligations.`,
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: `We may share your personal information in the following limited circumstances:

• With our statutory auditors (Jain Bhawani & Co., Chartered Accountants) as required for audit and compliance purposes
• With regulatory authorities such as the Ministry of Corporate Affairs (MCA), Income Tax Department, and other government bodies when legally required
• With our Directors (Sunil Kumar Jain, DIN: 11599520 and Archana Devi, DIN: 11599518) for internal governance purposes
• With trusted service providers who assist us in operating our website, subject to confidentiality obligations
• In connection with a business transfer, merger, or acquisition involving our company
• When required by law, court order, or government authority

We never share your data with unauthorized third parties or for advertising purposes.`,
  },
  {
    title: "6. Data Security",
    content: `We are committed to protecting your personal information and implement appropriate technical and organizational security measures to safeguard data against unauthorized access, alteration, disclosure, or destruction.

These measures include:
• Secure communication protocols (HTTPS) for data transmission
• Access controls limiting data access to authorized personnel only
• Regular review of our data collection and storage practices

However, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to contact us immediately if you believe your data has been compromised.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including:

• For the duration of any ongoing business relationship
• As required by applicable Indian laws and regulations (which may require retention for statutory periods)
• For the period necessary to defend or establish legal claims

Once data is no longer required, we take appropriate steps to securely delete or anonymize it.`,
  },
  {
    title: "8. Your Rights",
    content: `As a data subject, you have the following rights with respect to your personal information:

• Right to Access: You may request a copy of the personal data we hold about you
• Right to Correction: You may request correction of inaccurate or incomplete personal data
• Right to Erasure: You may request deletion of your personal data, subject to our legal obligations
• Right to Withdraw Consent: Where processing is based on consent, you may withdraw it at any time
• Right to Grievance Redressal: You may raise a complaint with the relevant authority in India

To exercise any of these rights, please contact us at shirshpalak20@gmail.com.`,
  },
  {
    title: "9. Cookies and Tracking",
    content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. These may include:

• Essential cookies: necessary for the website to function properly
• Analytics cookies: help us understand how visitors interact with our website

You may configure your browser to refuse cookies or to alert you when cookies are being sent. Note that some features of the website may not function properly if cookies are disabled.`,
  },
  {
    title: "10. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party sites you visit through links on our website.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. We will post the updated policy on our website with a revised "Last Updated" date. Continued use of our website after any changes constitutes your acceptance of the updated policy.

We encourage you to review this page periodically for any updates.`,
  },
  {
    title: "12. Grievance Officer",
    content: `In accordance with the Information Technology Act, 2000 and rules made thereunder, if you have any grievance or concerns regarding the processing of your personal information, you may contact our Grievance Officer:

Sunil Kumar Jain
Director — Medzare Pharma Private Limited
H-30, Plot 6 & 7, 3rd Floor, Gulshan Park, Vijay Chowk,
Laxmi Nagar, East Delhi, India — 110092
Email: shirshpalak20@gmail.com
Phone: +91-8435369211

We will endeavor to address your grievance within 30 days of receipt.`,
  },
  {
    title: "13. Governing Law",
    content: `This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this Privacy Policy shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(222,47%,6%) 0%, hsl(222,47%,9%) 50%, hsl(222,40%,12%) 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(212,175,55,0.05) 0%, transparent 70%)",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-yellow-500/40" />
            <span className="text-yellow-500/70 text-xs tracking-[0.25em] uppercase font-sans">
              Legal
            </span>
            <div className="h-px w-10 bg-yellow-500/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-5"
          >
            Privacy{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,80%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Policy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-white/45 text-base font-sans font-light leading-relaxed"
          >
            Last Updated: March 2026
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-white/40 text-sm font-sans font-light leading-relaxed mt-3 max-w-2xl mx-auto"
          >
            This Privacy Policy describes how Medzare Pharma Private Limited collects, uses,
            and protects personal information in accordance with applicable Indian laws and regulations.
          </motion.p>
        </div>
      </section>

      {/* Policy Content */}
      <section
        className="py-16 md:py-20"
        style={{ background: "hsl(222,47%,8%)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <FadeInCard key={section.title} delay={i * 0.04}>
                <motion.div
                  className="rounded-2xl border border-white/5 p-7 md:p-8"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                  whileHover={{
                    borderColor: "rgba(212,175,55,0.15)",
                    background: "rgba(212,175,55,0.02)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <h2 className="font-serif text-xl text-white/90 font-medium mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-white/50 text-sm font-sans leading-relaxed whitespace-pre-line"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </FadeInCard>
            ))}
          </div>

          {/* Bottom note */}
          <FadeInCard delay={0.5}>
            <div
              className="mt-12 p-6 rounded-2xl border border-yellow-500/12 text-center"
              style={{ background: "rgba(212,175,55,0.03)" }}
            >
              <p className="text-white/40 text-xs font-sans leading-relaxed">
                This Privacy Policy is issued by Medzare Pharma Private Limited (CIN: U46497DL2026PTC464403).
                <br />
                For questions or concerns, please contact us at{" "}
                <a
                  href="mailto:shirshpalak20@gmail.com"
                  className="text-yellow-500/60 hover:text-yellow-400/80 transition-colors duration-200"
                >
                  shirshpalak20@gmail.com
                </a>
              </p>
            </div>
          </FadeInCard>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
