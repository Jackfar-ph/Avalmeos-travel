const cityData = {
    "Cebu City": [
        { title: "Cebu Ocean Park Ticket", price: "US$ 11.32", rating: "4.8", img: "/Picture/Cebu Ocean Park.webp" },
        { title: "Oslob Whaleshark & Canyoneering", price: "US$ 65.65", rating: "4.6", img: "/Picture/Oslob Whaleshark.webp" },
        { title: "Cebu Private Day Tour", price: "US$ 27.05", rating: "4.6", img: "/Picture/Cebu City Private Day Tour.webp" },
        { title: "Plantation Bay Day Use", price: "US$ 43.05", rating: "4.7", img: "/Picture/Plantation Bay Day.webp" }
    ],
    "Manila": [
        { title: "Manila Ocean Park", price: "US$ 17.95", rating: "4.7", img: "/Picture/Manila Ocean Park.png" },
        { title: "Intramuros Bambike Tour", price: "US$ 19.55", rating: "4.8", img: "/Picture/Intramuros.webp" },
        { title: "Fort Santiago Ticket", price: "US$ 1.35", rating: "4.8", img: "/Picture/Fort Santiago.jpg" },
        { title: "Okada Manila Tour", price: "US$ 21.89", rating: "4.8", img: "/Picture/Okada Manila.webp" }
    ],
    "Baguio": [
        { title: "Sky Ranch Baguio Pass", price: "US$ 14.85", rating: "4.5", img: "/Picture/Sky Ranch Baguio.webp" },
        { title: "Atok Gardens Day Tour", price: "US$ 37.99", rating: "4.9", img: "/Picture/Atok Gardens.webp" },
        { title: "Breathe Baguio Tour", price: "US$ 35.99", rating: "4.7", img: "/Picture/Breathe Baguio.webp" },
        { title: "Mt. Ulap Hiking Tour", price: "US$ 33.05", rating: "5.0", img: "/Picture/Mt. Ulap Hiking Day Tour from Baguio.webp" }
    ],
    "Davao City": [
        { title: "Davao City Tour", price: "US$ 22.39", rating: "4.7", img: "/Picture/Davao City Tour.webp" },
        { title: "Malagos Garden Pass", price: "US$ 9.55", rating: "4.8", img: "/Picture/Malagos Garden Resort.webp" },
        { title: "Nature Tour in Davao", price: "US$ 43.05", rating: "4.8", img: "/Picture/Nature Tour in Davao.webp" },
        { title: "Highlands Tour in Davao", price: "US$ 34.59", rating: "4.8", img: "/Picture/Highlands Tour in Davao.webp" }
    ],
    "Puerto Princesa": [
        { title: "Underground River Tour", price: "US$ 37.15", rating: "4.7", img: "/Picture/Puerto Princesa Underground River.webp" },
        { title: "Honda Bay Island Hopping", price: "US$ 30.15", rating: "4.6", img: "/Picture/Honda Bay Palawan Island.webp" },
        { title: "City Heritage Tour", price: "US$ 13.50", rating: "4.4", img: "/Picture/Puerto Princesa City Heritage Tour.webp" },
        { title: "Sunset Watching", price: "US$ 31.89", rating: "5.0", img: "/Picture/Sunset Watching.webp" }
    ],
    "Iloilo": [
        { title: "Science XPdition Ticket", price: "US$ 10.10", rating: "4.5", img: "/Picture/Science XPdition.webp" },
        { title: "Guimaras Island Tour", price: "US$ 51.45", rating: "4.8", img: "/Picture/Guimaras Island.webp" },
        { title: "Gigantes Island Boat Tour", price: "US$ 25.29", rating: "4.2", img: "/Picture/Gigantes & Sicogon Island.webp" },
        { title: "Iloilo Pilgrimage Tour", price: "US$ 21.55", rating: "4.8", img: "/Picture/Iloilo Pilgrimage.webp" }
    ]
};

const packageData = {
    "Cebu City Package Tour": { title: "Cebu City Package Tour", price: "₱8,500", img: "/Picture/Cebu City.jpg" },
    "Old Manila Heritage Tour": { title: "Old Manila Heritage Tour", price: "₱2,400", img: "/Picture/Old Manila.jpg" },
    "Baguio City Package": { title: "Baguio City Package", price: "₱5,900", img: "/Picture/Baguio.jpg" },
    "Davao Highland Tour": { title: "Davao Highland Tour", price: "₱4,200", img: "/Picture/Davao.jpg" },
    "Puerto Princesa Package": { title: "Puerto Princesa Package", price: "₱7,200", img: "/Picture/Puerto Princesa.jpg" },
    "Iloilo City & Gigantes": { title: "Iloilo City & Gigantes", price: "₱6,500", img: "/Picture/Iloilo.jpg" }
};

const packageMapping = {
    "Cebu City": "Cebu City Package Tour",
    "Manila": "Old Manila Heritage Tour",
    "Baguio": "Baguio City Package",
    "Davao City": "Davao Highland Tour",
    "Puerto Princesa": "Puerto Princesa Package",
    "Iloilo": "Iloilo City & Gigantes"
};