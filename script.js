// --- SECTION 1: NAVIGATION & SCROLL SPY ---
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

// 1. Fade-in Animations
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        entry.target.classList.toggle('visible', entry.isIntersecting);
    });
}, { threshold: 0.1 });

sections.forEach(s => sectionObserver.observe(s));

// 2. Scroll Spy Logic

window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY || window.pageYOffset;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        
        if (scrollPosition >= sectionTop - 200) {
            const id = section.getAttribute("id");
            
            if (document.querySelector(`nav ul li a[href="#${id}"]`)) {
                current = id;
            }
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("nav-link-active");
        
        if (current && link.getAttribute("href") === `#${current}`) {
            link.classList.add("nav-link-active");
        }
    });
}, { passive: true });
// --- SECTION 2: HERO SLIDER ---
const heroImg = document.getElementById('hero-main');
const thumbnails = document.querySelectorAll('.nav-thumb');
let currentIndex = 0;

function updateThumbnailBorders(index) {
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('opacity-100', 'border-white');
            thumb.classList.remove('opacity-60', 'border-transparent');
        } else {
            thumb.classList.add('opacity-60', 'border-transparent');
            thumb.classList.remove('opacity-100', 'border-white');
        }
    });
}

function changeHeroImage(index) {
    if (!heroImg) return;
    const newSrc = thumbnails[index].getAttribute('data-src');
    heroImg.src = newSrc;
    currentIndex = index;
    updateThumbnailBorders(index);
}

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => changeHeroImage(index));
});

setInterval(() => {
    let nextIndex = (currentIndex + 1) % thumbnails.length;
    changeHeroImage(nextIndex);
}, 5000);

// --- SECTION 3: DATABASE ---
const cityData = {
    "Cebu City": [
        { title: "Cebu Ocean Park Ticket", price: "US$ 11.32", rating: "4.8", img: "Picture/Cebu Ocean Park.webp" },
        { title: "Oslob Whaleshark & Canyoneering", price: "US$ 65.65", rating: "4.6", img: "Picture/Cebu Ocean Park.webp" },
        { title: "Cebu Private Day Tour", price: "US$ 27.05", rating: "4.6", img: "Picture/Cebu City Private Day Tour.webp" },
        { title: "Plantation Bay Day Use", price: "US$ 43.05", rating: "4.7", img: "Picture/Plantation Bay Day.webp" },
    ],
    "Manila": [
        { title: "Manila Ocean Park Attraction", price: "US$ 17.95", rating: "4.7", img: "Picture/Manila Ocean Park.png" },
        { title: "Intramuros Bambike Tour", price: "US$ 19.55", rating: "4.8", img: "Picture/Intramuros.webp" },
        { title: "Fort Santiago Ticket", price: "US$ 1.35", rating: "4.8", img: "Picture/Fort Santiago.jpg" },
        { title: "Okada Manila Tour and Dine", price: "US$ 21.89", rating: "4.8", img: "Picture/Okada Manila.webp" },
    ],
    "Baguio": [
        { title: "Sky Ranch Baguio Day Pass", price: "US$ 14.85", rating: "4.5", img: "Picture/Sky Ranch Baguio.webp" },
        { title: "Atok Gardens Day Tour", price: "US$ 37.99", rating: "4.9", img: "Picture/Atok Gardens.webp" },
        { title: "Breathe Baguio Join In Tour", price: "US$ 35.99", rating: "4.7", img: "Picture/Breathe Baguio.webp" },
        { title: "Mt. Ulap Hiking Day Tour", price: "US$ 33.05", rating: "5.0", img: "Picture/Mt. Ulap Hiking Day Tour from Baguio.webp" },
    ],
    "Davao City": [
        { title: "Davao City Tour", price: "US$ 22.39", rating: "4.7", img: "Picture/Davao City Tour.webp" },
        { title: "Malagos Garden Resort Pass", price: "US$ 9.55", rating: "4.8", img: "Picture/Malagos Garden Resort.webp" },
        { title: "Nature Tour in Davao", price: "US$ 43.05", rating: "4.8", img: "Picture/Nature Tour in Davao.webp" },
        { title: "Highlands Tour in Davao", price: "US$ 34.59", rating: "4.8", img: "Picture/Highlands Tour in Davao.webp" },
    ],
    "Puerto Princesa": [
        { title: "Underground River Tour", price: "US$ 37.15", rating: "4.7", img: "Picture/Puerto Princesa Underground River.webp" },
        { title: "Honda Bay Island Hopping", price: "US$ 30.15", rating: "4.6", img: "Picture/Honda Bay Palawan Island.webp" },
        { title: "City Heritage Tour", price: "US$ 13.50", rating: "4.4", img: "Picture/Puerto Princesa City Heritage Tour.webp" },
        { title: "Sunset Watching Tour", price: "US$ 31.89", rating: "5.0", img: "Picture/Sunset Watching.webp" },
    ],
    "Iloilo": [
        { title: "Science XPdition Ticket", price: "US$ 10.10", rating: "4.5", img: "Picture/Science XPdition.webp" },
        { title: "Guimaras Island Day Tour", price: "US$ 51.45", rating: "4.8", img: "Picture/Guimaras Island.webp" },
        { title: "Gigantes & Sicogon Full-Day", price: "US$ 25.29", rating: "4.2", img: "Picture/Gigantes & Sicogon Island.webp" },
        { title: "Iloilo Pilgrimage Tour", price: "US$ 21.55", rating: "4.8", img: "Picture/Iloilo Pilgrimage.webp" },
    ]
};

const packageData = {
    "Cebu City": { title: "Cebu City Package Tour", price: "US$ 143.41", details: "3D2N All-In: Hotel, Transfers, Temple of Leah, and Sirao Garden." },
    "Manila": { title: "Old Manila Heritage Tour", price: "US$ 40.49", details: "Full Day: Intramuros, Luneta, and National Museum with Lunch." },
    "Baguio": { title: "Baguio City Package", price: "US$ 99.55", details: "3D2N Escape: Camp John Hay, Mines View, and Strawberry Farm." },
    "Davao City": { title: "Davao Highland Tour", price: "US$ 70.86", details: "Nature Adventure: Eden Nature Park and Philippine Eagle Center." },
    "Puerto Princesa": { title: "Puerto Princesa Package", price: "US$ 121.48", details: "Nature Escape: Underground River and Honda Bay Island Hopping." },
    "Iloilo": { title: "Iloilo City & Gigantes", price: "US$ 109.67", details: "Cultural & Island Tour: Molo Church and Islas de Gigantes." }
};
// --- SECTION 4: CURRENCY LOGIC ---
let currentCurrency = 'USD'; 
const exchangeRate = 59.30;

const toggleBtn = document.getElementById('currency-toggle');

toggleBtn.addEventListener('click', () => {
    // 1. Toggle state
    currentCurrency = (currentCurrency === 'USD') ? 'PHP' : 'USD';
    
    // 2. Update button text
    toggleBtn.innerText = `${currentCurrency === 'USD' ? 'PHP ₱' : 'USD $'}`;
    
    // 3. Update the Featured Package Grid
    const featuredPrices = document.querySelectorAll('.price-value');
    featuredPrices.forEach(el => {
        const basePrice = el.getAttribute('data-usd');
        el.innerText = formatPrice(basePrice);
    });
    
    // 4. Update the Activities section if it's currently open
    const titleElement = document.getElementById('selected-city-name');
    if (titleElement && titleElement.innerText) {
        const activeCity = titleElement.innerText.replace('Activities in ', '').trim();
        showActivities(activeCity);
    }
});

// Helper function to format the numbers
function formatPrice(priceStr) {
    // Extract numbers only
    const numericValue = parseFloat(priceStr.replace(/[^\d.-]/g, ''));
    
    if (currentCurrency === 'PHP') {
        const converted = numericValue * exchangeRate;
        return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(converted);
    }
    
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(numericValue);
}
// --- SECTION 5: SHOW ACTIVITIES ---
function showActivities(cityName) {
    const display = document.getElementById('activities-display');
    const grid = document.getElementById('activities-grid');
    const title = document.getElementById('selected-city-name');

    if (!cityData[cityName]) return;
    title.innerText = `Activities in ${cityName}`;
    grid.innerHTML = ""; 

    // 1. Render Activities
    cityData[cityName].forEach(act => {
        grid.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div class="relative overflow-hidden rounded-xl aspect-video bg-gray-200">
                    <img src="${act.img}" class="w-full h-full object-cover">
                </div>
                <div class="mt-4">
                    <h3 class="font-bold text-lg leading-tight text-[#1a4d41]">${act.title}</h3>
                    <div class="flex items-center gap-1 text-sm text-gray-500 mt-1">
                        <span class="text-orange-500">★ ${act.rating}</span> • 100K+ booked
                    </div>
                    <div class="mt-2 text-xl font-bold text-orange-600">From ${formatPrice(act.price)}</div>
                </div>
            </div>
        `;
    });

    // 2. Render Green Package Card
    const pkg = packageData[cityName];
    if (pkg) {
        grid.innerHTML += `
            <div class="bg-[#1a4d41] text-white p-6 rounded-xl flex flex-col justify-between shadow-lg">
                <div>
                    <span class="bg-orange-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
                    <h3 class="font-bold text-xl mt-3">${pkg.title}</h3>
                    <p class="text-xs opacity-80 mt-2 leading-relaxed">${pkg.details}</p>
                </div>
                <div class="mt-6">
                    <div class="text-2xl font-black text-orange-400">${formatPrice(pkg.price)}</div>
                    <button onclick="openModal()" class="w-full mt-3 bg-white text-[#1a4d41] font-bold py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">Book Full Package</button>
                </div>
            </div>
        `;
    }

    display.classList.remove('hidden');
    display.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// --- SECTION 6: SEARCH LOGIC ---
const searchInput = document.getElementById('destination-search');
const suggestionBox = document.getElementById('suggestion-box');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        if (val.length < 1) {
            suggestionBox.classList.add('hidden');
            return;
        }

        const matches = Object.keys(cityData).filter(city => city.toLowerCase().includes(val));

        if (matches.length > 0) {
            suggestionBox.innerHTML = matches.map(city => `
                <div class="px-6 py-3 hover:bg-gray-100 cursor-pointer text-[#1a4d41] font-medium border-b border-gray-50 last:border-0"
                     onclick="selectSearch('${city}')">
                    ${city}
                </div>
            `).join('');
            suggestionBox.classList.remove('hidden');
        } else {
            suggestionBox.classList.add('hidden');
        }
    });
}

function selectSearch(city) {
    window.location.href = `package-details.html?city=${encodeURIComponent(city)}`;
}

// Close suggestion box when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
        suggestionBox.classList.add('hidden');
    }
});

// --- SECTION 7: MODAL & UTILITIES ---
function closeActivities() {
    document.getElementById('activities-display').classList.add('hidden');
}

function openModal() {
    document.getElementById('booking-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('booking-modal').classList.add('hidden');
}


// --- SECTION 8: FORM SUBMISSION & ALERTS ---
document.getElementById('inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Hide the form inside the modal
    document.getElementById('modal-form-content').classList.add('hidden');
    
    // 2. Show the success content inside the same modal
    document.getElementById('modal-success-content').classList.remove('hidden');
});

    // Update closeModal function to reset the view
function closeModal() {
    document.getElementById('booking-modal').classList.add('hidden');
    
    // Reset the modal for the next time it's opened
    setTimeout(() => {
        document.getElementById('modal-form-content').classList.remove('hidden');
        document.getElementById('modal-success-content').classList.add('hidden');
        document.getElementById('inquiry-form').reset();
    }, 300);
}

// Adding the alert for the Contact Form at the bottom
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    const contactBtn = contactForm.querySelector('button');
    contactBtn.addEventListener('click', () => {
        alert("Message sent! We will get back to you shortly.");
        contactForm.reset();
    });
}

// --- SECTION 9: LEAFLET MAP ---
let map;

function initMap() {
    // 1. Initialize map centered on the Philippines
    map = L.map('map', {
        scrollWheelZoom: false // Prevents accidental zooming while scrolling the page
    }).setView([12.8797, 121.7740], 5); 

    // 2. Add a Clean "Light" Tile Layer 
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // 3. Add a marker for the Philippines
    L.marker([12.8797, 121.7740]).addTo(map)
        .bindPopup("Welcome to the Philippines!")
        .openPopup();
}

// Run the map function once the page loads
window.addEventListener('DOMContentLoaded', initMap);

document.getElementById('inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from refreshing

    // Hide the inputs and show the success message
    document.getElementById('modal-form-content').classList.add('hidden');
    document.getElementById('modal-success-content').classList.remove('hidden');
});

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Function to open/close
const toggleMenu = () => {
    mobileMenu.classList.toggle('translate-x-full');
    // This line removes the nav background so it doesn't "float" over the menu
    document.body.classList.toggle('menu-open'); 
};

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});
