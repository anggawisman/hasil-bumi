import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
  MapPin,
  Sprout,
} from "lucide-react";

type MenuItem = {
  name: string;
  detail?: string;
  image: string;
  imagePosition?: string;
  note?: string;
};

const mainCourse: MenuItem[] = [
  {
    name: "Nasi Kebun",
    detail: "Ayam Daun Kari",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
    imagePosition: "center 55%",
    note: "Dari kebun",
  },
  {
    name: "Nasi Kebun",
    detail: "Ayam Bakar",
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=85",
    imagePosition: "center 55%",
    note: "Favorit",
  },
  {
    name: "Nasi Kebun",
    detail: "Telur Kandang",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",
    imagePosition: "center 55%",
  },
  {
    name: "Nasi Goreng",
    detail: "Kecombrang",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Mie Goreng",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Mie Rebus",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
  },
];

const snacks: MenuItem[] = [
  {
    name: "Pisang Goreng",
    image:
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Sukun Goreng",
    image:
      "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Bakwan Jagung",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Mendoan",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Tempe Krispi",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Sosis Solo",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Lemper Ketan",
    image:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=85",
  },
];

const seasonal: MenuItem[] = [
  {
    name: "Rantangan",
    detail: "Ayam · Telur · Ikan",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    note: "Menu musiman",
  },
];

function MenuCard({
  item,
  index,
}: {
  item: MenuItem;
  index: number;
}) {
  return (
    <article className="menu-card group">
      <div
        className="menu-card__image"
        style={{
          backgroundImage: `url("${item.image}")`,
          backgroundPosition: item.imagePosition ?? "center",
        }}
        role="img"
        aria-label={`${item.name}${item.detail ? ` ${item.detail}` : ""}`}
      >
        <span className="menu-card__number">
          {String(index + 1).padStart(2, "0")}
        </span>
        {item.note && <span className="menu-card__note">{item.note}</span>}
      </div>
      <div className="menu-card__body">
        <h3>{item.name}</h3>
        {item.detail && <p className="menu-card__detail">{item.detail}</p>}
        <span className="menu-card__rule" />
        <p className="menu-card__caption">
          {item.name === "Rantangan"
            ? "Pilihan sajian musiman untuk dinikmati bersama."
            : item.name === "Nasi Kebun"
              ? "Sajian nasi dengan pilihan lauk."
              : "Salah satu sajian dari Hasil Bumi."}
        </p>
      </div>
    </article>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: MenuItem[];
}) {
  return (
    <section className="menu-section" id={id}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="section-description">{description}</p>
        </div>
        <span className="section-count">{String(items.length).padStart(2, "0")}</span>
      </div>
      <div className="menu-grid">
        {items.map((item, index) => (
          <MenuCard item={item} index={index} key={`${item.name}-${item.detail ?? index}`} />
        ))}
      </div>
    </section>
  );
}

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Hasil Bumi",
  alternateName: "1966 Slow Bar x Hasil Bumi",
  description:
    "Kedai dengan sajian Nasi Kebun, hidangan utama, camilan, dan rantangan musiman di Hargobinangun, Pakem, Sleman, Yogyakarta.",
  servesCuisine: ["Indonesian", "Javanese"],
  hasMenu: "https://www.instagram.com/kedai_hasilbumi/",
  sameAs: ["https://www.instagram.com/kedai_hasilbumi/"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Kaliurang KM 21, RW 5, Hargobinangun",
    addressLocality: "Pakem",
    addressRegion: "Daerah Istimewa Yogyakarta",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.6306807,
    longitude: 110.4221856,
  },
  hasMap: "https://maps.app.goo.gl/m4ptASFn8sU6MR9z6",
};

export default function Home() {
  return (
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />

      <header className="top-frame">
        <a className="brand" href="#home" aria-label="Hasil Bumi, kembali ke atas">
          <Sprout size={17} strokeWidth={1.8} />
          <span>HASIL BUMI</span>
        </a>
        <nav className="top-nav" aria-label="Navigasi menu">
          <a href="#main-course">Main Course</a>
          <a href="#snack">Snack</a>
          <a href="#musiman">Musiman</a>
        </nav>
        <a
          className="visit-link"
          href="https://maps.app.goo.gl/m4ptASFn8sU6MR9z6"
          target="_blank"
          rel="noreferrer"
        >
          Visit us <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero-frame" id="home">
        <div className="hero-corner hero-corner--tl" aria-hidden="true" />
        <div className="hero-corner hero-corner--tr" aria-hidden="true" />
        <div className="hero-corner hero-corner--bl" aria-hidden="true" />
        <div className="hero-corner hero-corner--br" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-kicker">Dari kebun, untuk meja</p>
          <div className="hero-title-row">
            <span className="hero-flourish" aria-hidden="true">〰</span>
            <h1>MENU</h1>
            <span className="hero-flourish hero-flourish--right" aria-hidden="true">〰</span>
          </div>
          <p className="hero-subtitle">
            Sajian sederhana, rasa yang dekat dengan alam.
          </p>
          <a className="scroll-cue" href="#main-course">
            EXPLORE OUR MENU <ArrowDown size={13} />
          </a>
        </div>
      </section>

      <div className="intro-strip">
        <span className="intro-line" />
        <p>GOOD FOOD GROWS FROM GOOD SOIL</p>
        <span className="intro-line" />
      </div>

      <Section
        id="main-course"
        eyebrow="01 — Sajian utama"
        title="Main Course"
        description="Pilihan hidangan untuk mengisi hari."
        items={mainCourse}
      />

      <Section
        id="snack"
        eyebrow="02 — Teman bersantai"
        title="Snack"
        description="Camilan hangat untuk menemani waktu."
        items={snacks}
      />

      <Section
        id="musiman"
        eyebrow="03 — Mengikuti musim"
        title="Musiman"
        description="Sajian yang hadir mengikuti ketersediaan dan musim."
        items={seasonal}
      />

      <section className="closing-note">
        <span className="closing-leaf"><Sprout size={25} strokeWidth={1.5} /></span>
        <p className="eyebrow">Dari tanah yang sama</p>
        <h2>Take a little taste<br />of the garden.</h2>
        <p className="closing-copy">
          Mampir, duduk sebentar, dan nikmati sajian Hasil Bumi.
        </p>
        <a
          className="map-button"
          href="https://maps.app.goo.gl/m4ptASFn8sU6MR9z6"
          target="_blank"
          rel="noreferrer"
        >
          <MapPin size={16} /> Find us on Maps <ArrowUpRight size={15} />
        </a>
      </section>

      <footer className="footer-frame">
        <a
          href="https://maps.app.goo.gl/m4ptASFn8sU6MR9z6"
          target="_blank"
          rel="noreferrer"
        >
          <MapPin size={14} /> HARGOBINANGUN, PAKEM
        </a>
        <a
          href="https://www.instagram.com/kedai_hasilbumi"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={14} /> @KEDAI_HASILBUMI
        </a>
        <span>© HASIL BUMI</span>
      </footer>
    </main>
  );
}
