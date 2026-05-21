import { Mail, Phone, MapPin, Heart, Gift, Sparkles, CalendarHeart } from "lucide-react";

const phoneNumber = '(201) 259-6905'
const instagramUrl = 'https://www.instagram.com/sweetteasechocolaterie/'
const emailAddress = 'orders@sweetteasechocolaterie.com'

const gallery = [
  { src: '/images/mothers-day.jpeg', title: "Mother's Day Collection", copy: 'Elegant seasonal gifts finished with soft pink, gold, and chocolate details.' },
  { src: '/images/gold-oreos.jpeg', title: 'Gold Dipped Oreos', copy: 'Rich chocolate covered Oreos with a polished boutique finish.' },
  { src: '/images/fourth-of-july.jpeg', title: 'Holiday Pretzels', copy: 'Festive chocolate covered pretzels designed for parties, gifts, and dessert tables.' },
  { src: '/images/st-patricks-day.jpeg', title: 'Custom Seasonal Treats', copy: 'Personalized colors, sprinkles, and themes for any celebration.' },
]

const treats = [
  { icon: <Sparkles />, title: 'Chocolate Covered Pretzels', copy: 'Sweet, salty, festive, and fully customizable for holidays, parties, and gifts.' },
  { icon: <Heart />, title: 'Oreos & Cookies', copy: 'Beautifully dipped and decorated cookies that look just as good as they taste.' },
  { icon: <Gift />, title: 'Party Favors', copy: 'Thoughtful, polished favors for birthdays, showers, weddings, corporate events, and more.' },
  { icon: <CalendarHeart />, title: 'Seasonal Collections', copy: 'Limited-time designs for Valentine’s Day, Mother’s Day, July 4th, St. Patrick’s Day, and every sweet occasion.' },
]

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Sweet Tease Chocolaterie home">
          <img src="/images/logo.jpeg" alt="Sweet Tease Chocolaterie logo" />
          <span>Sweet Tease</span>
        </a>
        <nav>
          <a href="#treats">Treats</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Order</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow">Livingston, NJ • Handcrafted chocolate treats</p>
          <h1>Chocolate covered everything, made beautifully.</h1>
          <p className="heroCopy">
            Sweet Tease Chocolaterie creates custom chocolate covered treats for holidays, events, gifts, dessert tables, and everyday moments worth celebrating.
          </p>
          <div className="heroButtons">
            <a className="button primary" href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}>Call to Order</a>
            <a className="button secondary" href="#gallery">View Gallery</a>
          </div>
        </div>
        <div className="heroCard">
          <img src="/images/mothers-day.jpeg" alt="Mother's Day chocolate covered treats by Sweet Tease Chocolaterie" />
          <div className="floatingBadge">Custom • Seasonal • Handmade</div>
        </div>
      </section>

      <section className="introStrip">
        <span>Chocolate Covered Pretzels</span>
        <span>Oreos</span>
        <span>Cake Pops</span>
        <span>Krispy Treats</span>
        <span>Party Favors</span>
      </section>

      <section id="treats" className="section treatsSection">
        <p className="eyebrow">What we make</p>
        <h2>Handcrafted treats for every occasion.</h2>
        <div className="treatGrid">
          {treats.map((item) => (
            <article className="treatCard" key={item.title}>
              <div className="iconWrap">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featureBand">
        <div>
          <p className="eyebrow">Signature style</p>
          <h2>Designed to feel personal, polished, and gift-ready.</h2>
          <p>
            From soft blush and champagne gold to bold holiday colors, every order is made with thoughtful details that help your dessert table stand out.
          </p>
        </div>
        <img src="/images/gold-oreos.jpeg" alt="Gold chocolate covered Oreos" />
      </section>

      <section id="gallery" className="section gallerySection">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2>Seasonal collections and custom designs.</h2>
          </div>
          <a className="textLink" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18} /> Follow on Instagram</a>
        </div>
        <div className="galleryGrid">
          {gallery.map((item) => (
            <article className="galleryCard" key={item.title}>
              <img src={item.src} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div className="logoPanel">
          <img src="/images/logo.jpeg" alt="Sweet Tease Chocolaterie logo" />
        </div>
        <div>
          <p className="eyebrow">About Sweet Tease</p>
          <h2>A boutique chocolaterie with a personal touch.</h2>
          <p>
            Sweet Tease Chocolaterie specializes in chocolate covered treats that turn simple moments into something special. Every order is handcrafted with care, customized for the occasion, and finished with the kind of detail that makes people stop, smile, and reach for one more.
          </p>
          <p>
            Perfect for holidays, birthdays, showers, weddings, school events, corporate gifting, dessert boards, and thoughtful everyday surprises.
          </p>
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div>
          <p className="eyebrow">Order inquiry</p>
          <h2>Ready to make something sweet?</h2>
          <p>
            Call, email, or message Sweet Tease on Instagram to discuss custom colors, quantities, themes, timing, and special requests.
          </p>
          <div className="contactCards">
            <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}><Phone /> {phoneNumber}</a>
            <a href={`mailto:${emailAddress}?subject=Sweet Tease Chocolaterie Order Inquiry`}><Mail /> Email an Inquiry</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram /> @sweetteasechocolaterie</a>
            <span><MapPin /> Livingston, New Jersey</span>
          </div>
        </div>
        <form className="inquiryCard" action={`mailto:${emailAddress}`} method="post" encType="text/plain">
          <label>Name<input name="Name" placeholder="Your name" /></label>
          <label>Email or Phone<input name="Contact" placeholder="Best way to reach you" /></label>
          <label>Event Date<input name="Event Date" placeholder="When do you need it?" /></label>
          <label>Tell us what you're looking for<textarea name="Request" placeholder="Occasion, quantity, colors, theme, and any inspiration..." /></label>
          <button type="submit">Send Inquiry</button>
          <p className="formNote">This opens your email app so you can review the message before sending.</p>
        </form>
      </section>

      <footer>
        <img src="/images/logo.jpeg" alt="Sweet Tease Chocolaterie logo" />
        <p>© {new Date().getFullYear()} Sweet Tease Chocolaterie. Chocolate Covered Everything.</p>
      </footer>
    </main>
  )
}

export default App
