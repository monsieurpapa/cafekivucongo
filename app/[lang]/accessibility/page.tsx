import { getDictionary } from "@/lib/dictionary"
import { defaultLanguage } from "@/middleware"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  return {
    title: `Accessibility Statement | Cafe Kivu Congo`,
    description: "Our commitment to making our website accessible to everyone",
  }
}

export default async function AccessibilityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as any)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1" id="main-content">
        <section className="py-16 md:py-24 section-neutral coffee-pattern relative overflow-hidden">
          <div className="natural-texture absolute inset-0"></div>
          <div className="container relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-bean-dark dark:text-bean-cream mb-8">
              Accessibility Statement
            </h1>

            <div className="glass-effect organic-shadow p-8 rounded-lg space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">Our Commitment</h2>
                <p className="text-bean-brown dark:text-bean-light">
                  Cafe Kivu Congo is committed to ensuring digital accessibility for people with disabilities. We are
                  continually improving the user experience for everyone and applying the relevant accessibility
                  standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">Conformance Status</h2>
                <p className="text-bean-brown dark:text-bean-light mb-4">
                  The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to
                  improve accessibility for people with disabilities. It defines three levels of conformance: Level A,
                  Level AA, and Level AAA.
                </p>
                <p className="text-bean-brown dark:text-bean-light">
                  Our website is designed to be conformant with WCAG 2.1 level AA standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">Accessibility Features</h2>
                <ul className="list-disc list-inside space-y-2 text-bean-brown dark:text-bean-light">
                  <li>Semantic HTML structure for screen reader compatibility</li>
                  <li>Keyboard navigation support throughout the website</li>
                  <li>ARIA labels and landmarks for better navigation</li>
                  <li>High contrast color schemes that meet WCAG standards</li>
                  <li>Skip navigation links for keyboard users</li>
                  <li>Descriptive alt text for all images</li>
                  <li>Focus indicators for interactive elements</li>
                  <li>Responsive design that works on all devices</li>
                  <li>Dark mode support for reduced eye strain</li>
                  <li>Proper heading hierarchy for content structure</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">Feedback</h2>
                <p className="text-bean-brown dark:text-bean-light mb-4">
                  We welcome your feedback on the accessibility of our website. If you encounter any accessibility
                  barriers, please contact us:
                </p>
                <address className="not-italic text-bean-brown dark:text-bean-light space-y-1">
                  <p>Email: cafekivucongo8@gmail.com</p>
                  <p>Phone: +243 997675176</p>
                  <p>Address: Goma, Q. Bujovu, Avenue Nyakagozi, Goma, Nord-Kivu, Democratic Republic of Congo</p>
                </address>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">
                  Technical Specifications
                </h2>
                <p className="text-bean-brown dark:text-bean-light">
                  Accessibility of Cafe Kivu Congo relies on the following technologies to work with the particular
                  combination of web browser and any assistive technologies or plugins installed on your computer:
                </p>
                <ul className="list-disc list-inside space-y-2 text-bean-brown dark:text-bean-light mt-4">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>WAI-ARIA</li>
                  <li>JavaScript</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">Assessment Approach</h2>
                <p className="text-bean-brown dark:text-bean-light">
                  Cafe Kivu Congo assessed the accessibility of this website through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-bean-brown dark:text-bean-light mt-4">
                  <li>Self-evaluation and testing</li>
                  <li>Automated accessibility testing tools</li>
                  <li>Manual keyboard navigation testing</li>
                  <li>Screen reader compatibility testing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bean-dark dark:text-bean-cream mb-4">Date</h2>
                <p className="text-bean-brown dark:text-bean-light">
                  This statement was created on{" "}
                  {new Date().toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  )
}
