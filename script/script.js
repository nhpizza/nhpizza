tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-yellow': '#E5B938',
                'brand-gold': '#D4A829',
                'brand-black': '#0A0A0A',
                'brand-dark': '#121212',
                'brand-card': '#1A1A1A',
                'brand-muted': '#2A2A2A',
                'brand-text': '#B8B8B8',
            },
            fontFamily: {
                'outfit': ['Outfit', 'sans-serif'],
            }
        }
    }
}

// DATA
const deals = [
    { id: 1, name: "Family Feast", items: "2 Large Pizzas, 4 Drinks, Garlic Bread", price: 34.99, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
    { id: 2, name: "Date Night Special", items: "1 Medium Pizza, Pasta, 2 Drinks, Dessert", price: 28.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
    { id: 3, name: "Party Pack", items: "3 Large Pizzas, 6 Drinks, Wings, Nachos", price: 54.99, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop" },
    { id: 4, name: "Lunch Combo", items: "1 Personal Pizza, Salad, Drink", price: 12.99, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" },
    { id: 5, name: "Burger Bonanza", items: "2 Burgers, Fries, 2 Drinks", price: 19.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
    { id: 6, name: "Pasta Paradise", items: "2 Pasta Dishes, Garlic Bread, Salad", price: 24.99, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
    { id: 7, name: "Kids Meal Deal", items: "Small Pizza, Juice, Cookie", price: 8.99, image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=300&fit=crop" },
    { id: 8, name: "Mega Pizza Deal", items: "4 Large Pizzas, 8 Drinks, Wings", price: 69.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" }
];

const menuItems = {
    pizza: [
        { id: 1, name: "Margherita Classic", price: 14.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
        { id: 2, name: "Pepperoni Supreme", price: 16.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop" },
        { id: 3, name: "BBQ Chicken", price: 18.99, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
        { id: 4, name: "Veggie Delight", price: 15.99, image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&h=300&fit=crop" }
    ],
    burger: [
        { id: 5, name: "Classic Cheeseburger", price: 12.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
        { id: 6, name: "Bacon Deluxe", price: 14.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop" },
        { id: 7, name: "Mushroom Swiss", price: 13.99, image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop" },
        { id: 8, name: "Double Stack", price: 16.99, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop" }
    ],
    pasta: [
        { id: 9, name: "Spaghetti Bolognese", price: 13.99, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
        { id: 10, name: "Creamy Alfredo", price: 12.99, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop" },
        { id: 11, name: "Lasagna Classic", price: 15.99, image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop" },
        { id: 12, name: "Penne Arrabiata", price: 11.99, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop" }
    ],
    drinks: [
        { id: 13, name: "Fresh Lemonade", price: 3.99, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop" },
        { id: 14, name: "Iced Tea", price: 2.99, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop" },
        { id: 15, name: "Cola", price: 2.49, image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop" },
        { id: 16, name: "Milkshake", price: 5.99, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop" }
    ]
};

const featuredItems = [
    { id: 1, name: "Pepperoni Supreme", price: 16.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop", category: "pizza" },
    { id: 2, name: "Bacon Deluxe Burger", price: 14.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", category: "burger" },
    { id: 3, name: "BBQ Chicken Pizza", price: 18.99, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", category: "pizza" },
    { id: 4, name: "Spaghetti Bolognese", price: 13.99, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", category: "pasta" },
    { id: 5, name: "Classic Cheeseburger", price: 12.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop", category: "burger" },
    { id: 6, name: "Margherita Classic", price: 14.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", category: "pizza" }
];

const reviews = [
    { id: 1, name: "Sarah M.", text: "Best pizza in town! The crust is perfectly crispy and the toppings are always fresh. My family orders here every weekend.", rating: 5 },
    { id: 2, name: "Mike R.", text: "Fast delivery and amazing taste. The BBQ Chicken pizza is to die for. Highly recommend!", rating: 5 },
    { id: 3, name: "Emily K.", text: "Love their family deals! Great value for money and the quality never disappoints. Customer for life.", rating: 5 }
];

const instagramImages = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop"
];

// FUNCTIONS
function createDealCard(deal, index) {
    return `
                <div class="reveal delay-${(index % 4) + 1} menu-card bg-brand-card rounded-2xl overflow-hidden border border-brand-muted hover:border-brand-yellow/30">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${deal.image}" alt="${deal.name}" class="card-image w-full h-full object-cover">
                        <div class="absolute top-3 right-3 bg-brand-yellow text-brand-black px-3 py-1 rounded-full font-bold text-sm">Deal</div>
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-bold mb-2">${deal.name}</h3>
                        <p class="text-brand-text text-sm mb-4">${deal.items}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-bold text-brand-yellow">$${deal.price.toFixed(2)}</span>
                            <a href="https://wa.me/1234567890?text=Hello%20NH%20Pizza,%20I%20would%20like%20to%20order%20${encodeURIComponent(deal.name)}." 
                               target="_blank"
                               class="btn-primary px-4 py-2 rounded-full text-brand-black font-semibold text-sm">
                                Order Now
                            </a>
                        </div>
                    </div>
                </div>
            `;
}

function createMenuCard(item) {
    return `
                <div class="menu-card bg-brand-card rounded-2xl overflow-hidden border border-brand-muted hover:border-brand-yellow/30">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${item.image}" alt="${item.name}" class="card-image w-full h-full object-cover">
                    </div>
                    <div class="p-5">
                        <h3 class="text-xl font-bold mb-2">${item.name}</h3>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-bold text-brand-yellow">$${item.price.toFixed(2)}</span>
                            <a href="https://wa.me/1234567890?text=Hello%20NH%20Pizza,%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}." 
                               target="_blank"
                               class="btn-primary px-4 py-2 rounded-full text-brand-black font-semibold text-sm">
                                Order
                            </a>
                        </div>
                    </div>
                </div>
            `;
}

function createReviewCard(review, index) {
    const stars = Array(5).fill(0).map((_, i) =>
        `<svg class="w-5 h-5 ${i < review.rating ? 'star-filled' : 'text-brand-muted'}" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>`
    ).join('');

    return `
                <div class="reveal delay-${index + 1} bg-brand-card rounded-2xl p-6 border border-brand-muted">
                    <div class="flex gap-1 mb-4">${stars}</div>
                    <p class="text-brand-text leading-relaxed mb-4">"${review.text}"</p>
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                            <span class="text-brand-yellow font-bold">${review.name.charAt(0)}</span>
                        </div>
                        <div class="font-semibold">${review.name}</div>
                    </div>
                </div>
            `;
}

function createInstagramItem(url, index) {
    return `
                <a href="https://instagram.com/nhpizza" target="_blank" class="reveal delay-${index + 1} insta-item relative aspect-square rounded-xl overflow-hidden block">
                    <img src="${url}" alt="Instagram" class="w-full h-full object-cover">
                    <div class="insta-overlay absolute inset-0 bg-brand-black/60 flex items-center justify-center opacity-0 transition-opacity">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                        </svg>
                    </div>
                </a>
            `;
}

function createFullDealCard(deal, index) {
    return `
                <div class="reveal delay-${(index % 2) + 1} menu-card bg-brand-card rounded-2xl overflow-hidden border border-brand-muted hover:border-brand-yellow/30 flex flex-col sm:flex-row">
                    <div class="relative sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                        <img src="${deal.image}" alt="${deal.name}" class="card-image w-full h-full object-cover">
                    </div>
                    <div class="p-6 sm:w-2/3 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <span class="bg-brand-yellow/20 text-brand-yellow px-3 py-1 rounded-full text-sm font-medium">Limited Time</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-2">${deal.name}</h3>
                            <p class="text-brand-text mb-4">${deal.items}</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-brand-yellow">$${deal.price.toFixed(2)}</span>
                            <a href="https://wa.me/1234567890?text=Hello%20NH%20Pizza,%20I%20would%20like%20to%20order%20${encodeURIComponent(deal.name)}." 
                               target="_blank"
                               class="btn-primary px-6 py-3 rounded-full text-brand-black font-semibold">
                                Order Now
                            </a>
                        </div>
                    </div>
                </div>
            `;
}

// Initialize content
function initContent() {
    // Hot Deals Grid
    const dealsGrid = document.getElementById('dealsGrid');
    if (dealsGrid) {
        dealsGrid.innerHTML = deals.slice(0, 4).map((deal, i) => createDealCard(deal, i)).join('');
    }

    // Featured Grid
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
        featuredGrid.innerHTML = featuredItems.map((item, i) => `
                    <div class="reveal delay-${(i % 3) + 1} menu-card bg-brand-card rounded-2xl overflow-hidden border border-brand-muted hover:border-brand-yellow/30">
                        <div class="relative h-56 overflow-hidden">
                            <img src="${item.image}" alt="${item.name}" class="card-image w-full h-full object-cover">
                            <div class="absolute bottom-3 left-3 bg-brand-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium capitalize">${item.category}</div>
                        </div>
                        <div class="p-5">
                            <h3 class="text-xl font-bold mb-3">${item.name}</h3>
                            <div class="flex items-center justify-between">
                                <span class="text-2xl font-bold text-brand-yellow">$${item.price.toFixed(2)}</span>
                                <a href="https://wa.me/1234567890?text=Hello%20NH%20Pizza,%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}." 
                                   target="_blank"
                                   class="btn-primary px-4 py-2 rounded-full text-brand-black font-semibold text-sm">
                                    Order
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('');
    }

    // Instagram Grid
    const instagramGrid = document.getElementById('instagramGrid');
    if (instagramGrid) {
        instagramGrid.innerHTML = instagramImages.map((url, i) => createInstagramItem(url, i)).join('');
    }

    // Reviews Grid
    const reviewsGrid = document.getElementById('reviewsGrid');
    if (reviewsGrid) {
        reviewsGrid.innerHTML = reviews.map((review, i) => createReviewCard(review, i)).join('');
    }

    // Category Grid
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) {
        renderCategory('pizza');
    }

    // All Deals Grid
    const allDealsGrid = document.getElementById('allDealsGrid');
    if (allDealsGrid) {
        allDealsGrid.innerHTML = deals.map((deal, i) => createFullDealCard(deal, i)).join('');
    }

    // Menu Page Grids
    ['burger', 'pizza', 'pasta', 'drinks'].forEach(category => {
        const grid = document.getElementById(`${category}MenuGrid`);
        if (grid && menuItems[category]) {
            grid.innerHTML = menuItems[category].map(item => createMenuCard(item)).join('');
        }
    });
}

function renderCategory(category) {
    const categoryGrid = document.getElementById('categoryGrid');
    if (!categoryGrid || !menuItems[category]) return;

    categoryGrid.innerHTML = menuItems[category].map((item, i) => `
                <div class="reveal delay-${(i % 4) + 1} menu-card bg-brand-card rounded-2xl overflow-hidden border border-brand-muted hover:border-brand-yellow/30">
                    <div class="relative h-40 overflow-hidden">
                        <img src="${item.image}" alt="${item.name}" class="card-image w-full h-full object-cover">
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold mb-2">${item.name}</h3>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-brand-yellow">$${item.price.toFixed(2)}</span>
                            <a href="https://wa.me/1234567890?text=Hello%20NH%20Pizza,%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}." 
                               target="_blank"
                               class="btn-primary px-3 py-1.5 rounded-full text-brand-black font-semibold text-xs">
                                Order
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');

    // Re-apply reveal animations
    setTimeout(() => {
        categoryGrid.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    }, 50);
}

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCategory(btn.dataset.category);
    });
});

// Scroll reveal observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        // Observe for visibility
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterObserver.observe(counter);
    });
}

// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`${pageId}Page`).classList.add('active');
    window.scrollTo(0, 0);

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });

    // Re-init reveals
    setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
            observer.observe(el);
        });
    }, 100);
}

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
    });
}

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.add('translate-x-full');
    }
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('bg-brand-black/95', 'backdrop-blur-lg', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-brand-black/95', 'backdrop-blur-lg', 'shadow-lg');
    }

    lastScroll = currentScroll;
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Hello NH Pizza!%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0A%0AMessage: ${encodeURIComponent(message)}`;

        window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
        contactForm.reset();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initContent();
    animateCounters();

    // Initial reveal observations
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
});