/* Shravya Designers Studio - easy-edit settings.
   Please confirm each value with the studio before publishing. */
const CONFIG = {
  studioName: "Shravya Designers Studio",
  phone: "919493509737",                     // from the Instagram contact screen; confirm it is the right number
  phoneDisplay: "+91 94935 09737",
  whatsappEnabled: true,                     // set false if the number is not on WhatsApp (buttons then open Instagram)
  instagramUrl: "https://www.instagram.com/shravya_designers_botique/",   // confirm exact spelling of the handle
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Shravya+Designers+Vuyyuru"
};

const IMG = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=75`;
/* Sample designs only. Replace with the studio's own photos (with their permission). */
const PRODUCTS = [
  { name: "Peacock Maggam Blouse", category: "Maggam Work", badge: "Signature",
    description: "Detailed hand-worked motifs in rich thread and stone work.",
    image: IMG("photo-1610030469983-98e550d6193c"), alt: "Sample photograph of embroidered ethnic wear" },
  { name: "Bridal Heritage Blouse", category: "Bridal", badge: "Bridal Edit",
    description: "A statement blouse designed for wedding silks and heavy borders.",
    image: IMG("photo-1583391733956-3750e0ff4e8b"), alt: "Sample photograph of a traditional bridal look" },
  { name: "Handcrafted Floral Work", category: "Maggam Work", badge: "Handcrafted",
    description: "Delicate floral patterns stitched by hand, detail by detail.",
    image: IMG("photo-1595777457583-95e059d581b8"), alt: "Sample photograph of a detailed festive outfit" },
  { name: "Little Princess Set", category: "Kids Wear", badge: "Kids Wear",
    description: "A festive outfit idea for little ones, comfortable and pretty.",
    image: IMG("photo-1469334031218-e382a71b716b"), alt: "Sample fashion photograph" },
  { name: "Festive Kids Lehenga", category: "Kids Wear", badge: "Festive",
    description: "Celebration-ready kids wear made to your colour choice.",
    image: IMG("photo-1539109136881-3be0616acf4b"), alt: "Sample fashion photograph" },
  { name: "Your Dream Design", category: "Custom Design", badge: "Made for You",
    description: "Share a reference or sketch and we will shape it into your blouse.",
    image: IMG("photo-1515886657613-9f3515b0c78f"), alt: "Sample fashion photograph" }
];
const CATEGORIES = ["All Designs", "Maggam Work", "Bridal", "Kids Wear", "Custom Design"];

const grid = document.getElementById("productGrid");
const filters = document.getElementById("filters");
const statusEl = document.getElementById("status");

function enquiryLink(text) {
  if (!CONFIG.whatsappEnabled) return CONFIG.instagramUrl;
  return `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(text)}`;
}
const generalMsg = `Hi ${CONFIG.studioName}, I'd like to place a custom order. Please share the details.`;
const productMsg = n => `Hi ${CONFIG.studioName}, I'm interested in ${n}. Please share the design options, fabric, timeline and price.`;

document.querySelectorAll(".wa-general").forEach(a => { a.href = enquiryLink(generalMsg); });
document.querySelectorAll(".insta-link").forEach(a => { a.href = CONFIG.instagramUrl; });
document.getElementById("callBtn").href = `tel:+${CONFIG.phone}`;
document.getElementById("mapBtn").href = CONFIG.mapUrl;
const phoneLink = document.getElementById("phoneLink");
phoneLink.href = `tel:+${CONFIG.phone}`; phoneLink.textContent = CONFIG.phoneDisplay;

function addImageFallback(img, wrapper, name) {
  const fail = () => { img.hidden = true; wrapper.classList.add("no-img"); wrapper.dataset.name = name; };
  img.addEventListener("error", fail);
  if (img.complete && img.naturalWidth === 0) fail();
}

function renderProducts(category) {
  const list = category === "All Designs" ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        <img src="${p.image}" alt="${p.alt}" loading="lazy" width="700" height="875"></div>
      <div class="card-body">
        <span class="cat">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p class="price">Price on enquiry</p>
        <a class="btn btn-gold" href="${enquiryLink(productMsg(p.name))}" target="_blank" rel="noopener noreferrer" aria-label="Enquire about ${p.name}">Enquire Now</a>
      </div>`;
    const wrap = card.querySelector(".card-img");
    addImageFallback(wrap.querySelector("img"), wrap, p.name);
    grid.appendChild(card);
  });
  statusEl.textContent = `Showing ${list.length} ${list.length === 1 ? "design" : "designs"} in ${category}.`;
}

CATEGORIES.forEach((cat, i) => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "filter"; b.textContent = cat;
  b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
  b.addEventListener("click", () => {
    filters.querySelectorAll(".filter").forEach(x => x.setAttribute("aria-pressed", "false"));
    b.setAttribute("aria-pressed", "true");
    renderProducts(cat);
  });
  filters.appendChild(b);
});
renderProducts("All Designs");

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
document.getElementById("year").textContent = new Date().getFullYear();
