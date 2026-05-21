export default function App() {
  const phoneNumber = "(201) 259-6905";
  const instagramUrl = "https://www.instagram.com/sweetteasechocolaterie/";

  const gallery = [
    {
      src: "/images/mothers-day.jpeg",
      title: "Mother’s Day Collection",
      text: "Elegant chocolate covered gifts finished with blush pink, gold, florals, and handwritten detail."
    },
    {
      src: "/images/gold-oreos.jpeg",
      title: "Gold Dipped Oreos",
      text: "Rich chocolate covered Oreos with a polished boutique finish."
    },
    {
      src: "/images/fourth-of-july.jpeg",
      title: "Holiday Pretzels",
      text: "Festive chocolate covered pretzels designed for parties, trays, and celebrations."
    },
    {
      src: "/images/st-patricks-day.jpeg",
      title: "Seasonal Treats",
      text: "Custom colors, sprinkles, and themes for any holiday or special occasion."
    }
  ];

  const treats = [
    "Chocolate Covered Pretzels",
    "Chocolate Covered Oreos",
    "Rice Krispy Treats",
    "Cake Pops",
    "Seasonal Collections",
    "Custom Party Favors"
  ];

  return (
    <main className="site">
      <header className="nav">
        <a href="#home" className="brand">
          <img src="/images/logo.jpeg" alt="Sweet Tease Chocolaterie logo" />
          <span>Sweet Tease Chocolaterie</span>
        </a>
        <nav>
          <a href="#treats">Treats</a>
          <a href="#gallery">Gallery</a>
          <a href="#order">Order</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <p className="eyebrow">Livingston, New Jersey</p>
          <h1>Chocolate Covered Everything</h1>
          <p className="lead">
            Handcrafted chocolate covered treats, custom dessert favors, and seasonal collections made to turn everyday moments into something special.
          </p>
          <div className="actions">
            <a className="button primary" href="#order">Start an Order Inquiry</a>
            <a className="button secondary" href="#gallery">View Gallery</a>
          </div>
        </div>

        <div className="heroCard">
          <img src="/images/mothers-day.jpeg" alt="Mother's Day chocolate collection" />
        </div>
      </section>

      <section className="intro">
        <div>
          <p className="eyebrow">Handcrafted. Custom. Giftable.</p>
          <h2>Beautiful treats for holidays, parties, gifts, and everyday celebrations.</h2>
        </div>
        <p>
          Sweet Tease Chocolaterie specializes in chocolate covered pretzels, Oreos, cake pops, Rice Krispy treats, and custom dessert favors designed with a polished, boutique finish.
        </p>
      </section>

      <section id="treats" className="treats">
        <p className="eyebrow">What We Make</p>
        <h2>Signature Treats</h2>
        <div className="treatGrid">
          {treats.map((item) => (
            <div className="treatCard" key={item}>
              <span>♡</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallerySection">
        <p className="eyebrow">Gallery</p>
        <h2>Custom collections for every season.</h2>
        <div className="gallery">
          {gallery.map((item) => (
            <article className="galleryCard" key={item.title}>
              <img src={item.src} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="aboutImage">
          <img src="/images/gold-oreos.jpeg" alt="Gold dipped chocolate Oreos" />
        </div>
        <div>
          <p className="eyebrow">About Sweet Tease</p>
          <h2>A boutique chocolaterie with a personal touch.</h2>
          <p>
            From holiday platters to party favors and custom dessert tables, each order is thoughtfully designed to look as special as it tastes. Every detail, color, drizzle, sprinkle, and finish is chosen to match the moment.
          </p>
        </div>
      </section>

      <section id="order" className="order">
        <div>
          <p className="eyebrow">Order Inquiry</p>
          <h2>Ready to create something sweet?</h2>
          <p>
            For custom orders, seasonal trays, gifts, and event favors, reach out with your date, quantity, theme, and any inspiration photos.
          </p>
        </div>
        <div className="contactCard">
          <a href={`tel:${phoneNumber.replace(/\D/g, "")}`}>Call {phoneNumber}</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Message on Instagram</a>
        </div>
      </section>

      <footer>
        <img src="/images/logo.jpeg" alt="Sweet Tease Chocolaterie logo" />
        <p>Sweet Tease Chocolaterie · Livingston, NJ · {phoneNumber}</p>
      </footer>
    </main>
  );
}
