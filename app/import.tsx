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
  price?: string;
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
    price: "35K",
    note: "Dari kebun",
  },
  {
    name: "Nasi Kebun",
    detail: "Ayam Bakar",
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=85",
    imagePosition: "center 55%",
    price: "35K",
    note: "Favorit",
  },
  {
    name: "Nasi Kebun",
    detail: "Telur Kandang",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",
    imagePosition: "center 55%",
    price: "35K",
  },
  {
    name: "Nasi Goreng",
    detail: "Kecombrang",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
    price: "35K",
  },
  {
    name: "Mie Goreng",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
    price: "35K",
  },
  {
    name: "Mie Rebus",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
    price: "35K",
  },
];

const snacks: MenuItem[] = [
  {
    name: "Pisang Goreng",
    image:
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=1000&q=85",
    price: "15K",
  },
  {
    name: "Sukun Goreng",
    image:
      "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=1000&q=85",
    price: "15K",
  },
  {
    name: "Bakwan Jagung",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
    price: "15K",
  },
  {
    name: "Mendoan",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=85",
    price: "15K",
  },
  {
    name: "Tempe Krispi",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
    price: "15K",
  },
  {
    name: "Sosis Solo",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85",
    price: "15K",
  },
  {
    name: "Lemper Ketan",
    image:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=85",
    price: "15K",
  },
];

const seasonal: MenuItem[] = [
  {
    name: "Rantangan",
    detail: "Ayam · Telur · Ikan",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    note: "Menu musiman",
    price: "40K",
  },
];

/* Hand-drawn Bowl Illustration (Top-Right of Hero) */
function HeroBowlSvg() {
  return (
    <svg
      className="hero-illustration hero-illustration--bowl"
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Toppings: Crackers / Kerupuk */}
      <path
        d="M42 96L26 52C24 46 28 41 34 40L88 22C94 20 99 23 102 29L122 76"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cracker texture dots/dashes */}
      <path
        d="M44 52L54 49M66 45L78 41M50 67L62 63M74 59L86 55M57 82L69 78M81 74L92 70"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Toppings: Leaves / Greens */}
      <path
        d="M142 74C135 45 144 18 164 10C173 25 178 36 184 44C192 26 205 14 218 12C225 32 223 58 210 82"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf hatching lines */}
      <path
        d="M155 34L166 38M152 48L165 53M196 32L210 28M193 46L212 41M190 60L208 56"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Toppings: Egg / Meatballs */}
      <path
        d="M218 82C222 58 245 48 262 64C272 73 272 86 266 95"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M255 56C265 34 294 32 308 50"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Wavy Noodles */}
      <path
        d="M46 112C76 92 118 90 156 96C192 102 224 104 246 98"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M56 124C92 106 136 105 176 111C202 115 220 114 234 110"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M78 134C112 120 152 120 192 124"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Bowl Rim */}
      <path
        d="M36 94C22 106 24 122 46 132C94 150 186 144 256 112C282 100 302 86 314 72"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Bowl Outer Curve */}
      <path
        d="M28 116C48 188 128 228 214 202C264 186 296 154 316 122"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      {/* Bowl Sketch Shading / Hatching */}
      <path
        d="M268 122L304 108M260 136L302 120M250 150L294 134M236 164L282 148M220 178L266 162M118 186L158 176M138 196L182 185"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Hand-drawn Iced Drink Illustration (Bottom-Left of Hero) */
function HeroDrinkSvg() {
  return (
    <svg
      className="hero-illustration hero-illustration--drink"
      viewBox="0 0 260 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Mug Handle */}
      <path
        d="M44 76C10 74 -4 104 2 168C6 218 16 246 32 254"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M42 94C20 94 12 116 16 166C19 204 26 226 34 234"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Glass Body */}
      <path
        d="M52 44C98 40 162 46 212 58C220 60 224 68 222 78L192 288"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 44C46 46 44 54 43 66L26 288"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      {/* Inner Glass Rim / Liquid Line */}
      <path
        d="M64 68C108 66 154 70 198 80"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M56 88L40 282M204 94L176 282"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Ice Cube 1 (Top Left) */}
      <path
        d="M74 104L112 94L128 124L92 142L74 104Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M84 110L106 104M112 104L118 118"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Ice Cube 2 (Top Right) */}
      <path
        d="M150 118L186 112L194 148L158 156L150 118Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Citrus / Lime Slice 1 (Left) */}
      <path
        d="M62 174C78 156 106 164 108 188C110 206 94 218 76 214L62 174Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M70 184L98 182M72 194L96 202"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Citrus / Lime Slice 2 (Bottom Right) */}
      <circle
        cx="144"
        cy="214"
        r="22"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M144 196V232M126 214H162M131 201L157 227M157 201L131 227"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Straw & Mint/Swirl Accent */}
      <path
        d="M138 86L134 166L164 134L154 226"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M104 162L108 264L118 164"
        stroke="currentColor"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bubbles */}
      <circle cx="58" cy="238" r="10" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="64" cy="216" r="4" stroke="currentColor" strokeWidth="3" />
      <circle cx="122" cy="184" r="3.5" stroke="currentColor" strokeWidth="3" />
      <circle cx="164" cy="256" r="6" stroke="currentColor" strokeWidth="3.5" />
    </svg>
  );
}

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
          {item.price ? `Rp ${item.price.toLocaleString("id-ID")}` : ""}
        </span>
        {item.note && <span className="menu-card__note">{item.note}</span>}
      </div>
      <div className="menu-card__body">
        <h3 className="font-heading">{item.name}</h3>
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
          <h2 className="font-heading">{title}</h2>
          <p className="section-description">{description}</p>
        </div>
      </div>
      <div className="menu-grid">
        {items.map((item, index) => (
          <MenuCard
            item={item}
            index={index}
            key={`${item.name}-${item.detail ?? index}`}
          />
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
        <a
          className="brand"
          href="#home"
          aria-label="Hasil Bumi, kembali ke atas"
        >
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

        {/* Added Hand-drawn SVGs matching your reference layout */}
        <HeroBowlSvg />
        <HeroDrinkSvg />

        <div className="hero-inner">
          <p className="hero-kicker">Dari kebun, untuk meja</p>
          <div className="hero-title-row">
            <span className="hero-flourish" aria-hidden="true">
              〰
            </span>
            <h1 className="font-heading">MENU</h1>
            <span
              className="hero-flourish hero-flourish--right"
              aria-hidden="true"
            >
              〰
            </span>
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
        <span className="closing-leaf">
          <Sprout size={25} strokeWidth={1.5} />
        </span>
        <p className="eyebrow">Dari tanah yang sama</p>
        <h2 className="font-heading">
          Take a little taste
          <br />
          of the garden.
        </h2>
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