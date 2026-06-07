document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Loader Logic ---
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.visibility = "hidden";
        }, 500);
    }, 900);

    // --- 2. Mobile Nav Trigger ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        const spans = hamburger.querySelectorAll("span");
        if (navLinks.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
        } else {
            spans.forEach(s => s.style.transform = "none");
            spans[1].style.opacity = "1";
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.querySelectorAll("span").forEach(s => s.style.transform = "none");
            hamburger.querySelectorAll("span")[1].style.opacity = "1";
        });
    });

    // --- 3. Scroll Animation Triggers ---
    const reveals = document.querySelectorAll(".reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // --- 4. English / German Content System ---
    const dictionary = {
        en: {
            "loading": "Loading...",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-services": "Services",
            "nav-contact": "Contact",
            "hero-badge": "Banbridge & All Areas Covered",
            "hero-title": "Professional Landscaping & Groundwork Solutions",
            "hero-subtitle": "Transforming outdoor spaces with expert paving, fencing, decking, drainage, and precision digger work since 2021.",
            "hero-cta": "Get Free Quotation",
            "about-title": "Est. 2021 in County Down",
            "about-desc-1": "Operating out of Banbridge, we deliver complete groundwork and garden transformation packages. From initial site clearance and heavy digger operations to structural paving and delicate planting, we handle every stage of your project with dedication.",
            "about-desc-2": "No matter the size of the landscape, our focus remains on long-term structural integrity, flawless drainage networks, and beautiful visual finishes that increase property value.",
            "services-title": "Our Expert Services",
            "srv-1-title": "Paving & Patios",
            "srv-1-desc": "Premium paving services, pathways, and customized patio installations designed to withstand the elements while looking exceptional.",
            "srv-2-title": "Fencing & Decking",
            "srv-2-desc": "Heavy-duty timber fencing and high-grade decking construction to establish privacy and create seamless outdoor living zones.",
            "srv-3-title": "Groundwork & Drainage",
            "srv-3-desc": "Engineered drainage systems, foundation prep, and structural groundwork to safeguard your property against water logging.",
            "srv-4-title": "Digger Work & Clearance",
            "srv-4-desc": "Professional mechanical excavation, precise grading, site level adjustments, and comprehensive garden clear outs.",
            "srv-5-title": "Shed Construction",
            "srv-5-desc": "Solid concrete base preparation and custom construction of durable garden sheds, tailored exactly to your storage or workspace requirements.",
            "srv-6-title": "Planting & Design",
            "srv-6-desc": "Aesthetic landscape design accompanied by strategic tree and shrub planting or selective removal for optimal yard spatial structure.",
            "contact-title": "Ready to Start Your Project?",
            "contact-desc": "We offer totally transparent pricing and completely free, zero-obligation consultations on site.",
            "contact-heading": "Contact Information",
            "contact-sub": "Available for Site Visits",
            "contact-coverage": "Serving Banbridge, County Down, and all surrounding areas.",
            "footer-rights": "All rights reserved."
        },
        de: {
            "loading": "Wird geladen...",
            "nav-home": "Startseite",
            "nav-about": "Über Uns",
            "nav-services": "Dienstleistungen",
            "nav-contact": "Kontakt",
            "hero-badge": "Banbridge & Umgebung Abgedeckt",
            "hero-title": "Professioneller Landschafts- & Erdbau",
            "hero-subtitle": "Neugestaltung von Außenanlagen durch Pflasterarbeiten, Zäune, Terrassenbau, Entwässerung und präzise Baggerarbeiten seit 2021.",
            "hero-cta": "Kostenloses Angebot anfordern",
            "about-title": "Seit 2021 in County Down",
            "about-desc-1": "Von Banbridge aus liefern wir komplette Pakete für Erdarbeiten und Gartenumwandlungen. Von der ersten Grundstücksräumung und schweren Baggerarbeiten bis hin zu strukturellen Pflasterungen und Bepflanzungen betreuen wir jede Phase Ihres Projekts.",
            "about-desc-2": "Unabhängig von der Größe des Grundstücks liegt unser Fokus auf langfristiger struktureller Integrität, einwandfreien Entwässerungssystemen und ansprechenden visuellen Ergebnissen.",
            "services-title": "Unsere Fachbereiche",
            "srv-1-title": "Pflaster & Terrassen",
            "srv-1-desc": "Hochwertige Pflasterarbeiten, Wegebau und maßgeschneiderte Terrassen, die der Witterung standhalten und optisch überzeugen.",
            "srv-2-title": "Zäune & Terrassendecks",
            "srv-2-desc": "Robuste Holzzäune und erstklassige Terrassenkonstruktionen für Privatsphäre und perfekt nutzbare Außenbereiche.",
            "srv-3-title": "Erdbau & Entwässerung",
            "srv-3-desc": "Ausgeklügelte Entwässerungssysteme, Fundamentvorbereitung und Erdarbeiten, um Ihr Eigentum vor Staunässe zu schützen.",
            "srv-4-title": "Baggerarbeiten & Räumung",
            "srv-4-desc": "Professioneller mechanischer Aushub, präzise Geländemodellierung, Bodennivellierung und umfassende Entrümpelung von Gärten.",
            "srv-5-title": "Schuppenbau",
            "srv-5-desc": "Solide Betonfundamentierung und maßgeschneiderter Bau langlebiger Gartenhäuser oder Geräteschuppen nach Ihren Vorgaben.",
            "srv-6-title": "Anpflanzung & Design",
            "srv-6-desc": "Ästhetische Gartenplanung, begleitet von strategischer Baum- und Strauchpflanzung oder selektiver Rodung für optimale Raumstruktur.",
            "contact-title": "Bereit für Ihr Projekt?",
            "contact-desc": "Wir bieten eine völlig transparente Preisgestaltung und komplett kostenfreie, unverbindliche Beratungen vor Ort an.",
            "contact-heading": "Kontaktinformationen",
            "contact-sub": "Verfügbar für Besichtigungen vor Ort",
            "contact-coverage": "Tätig in Banbridge, County Down und allen umliegenden Regionen.",
            "footer-rights": "Alle Rechte vorbehalten."
        }
    };

    const btnEn = document.getElementById("lang-en");
    const btnDe = document.getElementById("lang-de");
    const translatableElements = document.querySelectorAll("[data-i18n]");

    const switchLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dictionary[lang][key]) {
                el.innerText = dictionary[lang][key];
            }
        });

        if (lang === 'de') {
            btnDe.classList.add("active");
            btnEn.classList.remove("active");
            document.documentElement.lang = "de";
        } else {
            btnEn.classList.add("active");
            btnDe.classList.remove("active");
            document.documentElement.lang = "en";
        }
    };

    btnEn.addEventListener("click", () => switchLanguage('en'));
    btnDe.addEventListener("click", () => switchLanguage('de'));
});
