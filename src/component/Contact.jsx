const contacts = [
  { label: 'Phone', value: '054 609 0448', href: 'tel:+233546090448', accent: 'phone' },
  { label: 'Email', value: 'apenuvordaniel47@gmail.com', href: 'mailto:apenuvordaniel47@gmail.com', accent: 'email' },
  { label: 'LinkedIn', value: 'Daniel Apenuvor', href: 'https://www.linkedin.com/in/daniel-apenuvor-134315343?utm_source=share_via&utm_content=profile&utm_medium=member_ios', accent: 'LinkedIn' },
  { label: 'GitHub', value: 'Dela0407', href: 'https://github.com/Dela0407', accent: 'github' },
]
export default function Contact(){
    return(
        <section id="contact" className="info-section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Connect</p>
            <h3>Let’s build something meaningful</h3>
          </div>

          <div className="contact-grid">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                className={`contact-card contact-${contact.accent}`}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-icon" aria-hidden="true">{contact.label.charAt(0)}</span>
                <div className="contact-copy">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
                <span className="contact-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>
    )
}