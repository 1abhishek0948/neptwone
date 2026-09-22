/*
 * NEPTWONE front-end behavior
 * Restaurant-owned image URLs live in the markup so a future CMS or asset CDN
 * can replace them without changing the layout or interaction layer.
 */
(function () {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");
  const selector = (value, scope = document) => scope.querySelector(value);
  const selectors = (value, scope = document) => Array.from(scope.querySelectorAll(value));

  // The only photo-source registry. Each asset is an image already published by NEPTWONE.
  // Replace a URL here when the restaurant supplies a new approved image.
  const assets = Object.freeze({
    hero: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_6406.jpg?etag=W%2F%22257cc-58264a2f%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=2200%2B1466&quality=90",
    menuDish: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_8074.jpg?etag=%2231bd5-54b58459%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=900%2B600&quality=88",
    menuSeafood: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_6071.jpg?etag=%2248956-54b58452%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=900%2B600&quality=88",
    menuInterior: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_9210.jpg?etag=W%2F%2223304-595ba94a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=900%2B600&quality=88",
    menuDessert: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_5453.jpg?etag=W%2F%2221279-57fc01ff%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=900%2B600&quality=88",
    galleryExterior: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_6406.jpg?etag=W%2F%22257cc-58264a2f%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1400%2B934&quality=88",
    galleryDetail: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_7062.jpg?etag=W%2F%2224930-5859a722%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=900%2B1350&quality=88",
    galleryDish: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_6071.jpg?etag=%2248956-54b58452%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1200%2B800&quality=88",
    galleryInterior: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_9210.jpg?etag=W%2F%2223304-595ba94a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1400%2B934&quality=88",
    galleryPortrait: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_7091.jpg?etag=W%2F%221cd41-5859a75a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=900%2B1350&quality=88",
    reservation: "https://impro.usercontent.one/appid/oneComWsb/domain/neptwone.com/media/neptwone.com/onewebmedia/IMG_5453.jpg?etag=W%2F%2221279-57fc01ff%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1800%2B1200&quality=90"
  });
  selectors("img[data-asset]").forEach((image) => {
    const source = assets[image.dataset.asset];
    if (source) image.src = source;
  });

  const copy = {
    fr: {
      navRestaurant: "Restaurant",
      navRestaurantMobile: "Le restaurant",
      navMenu: "La carte",
      navExperience: "L'expérience",
      navNews: "Actualités",
      navPhotos: "Photos",
      navReserve: "Réserver",
      navReservation: "Réservation",
      navLocation: "Accès & Contact",
      skipLink: "Aller au contenu",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      reserveTable: "Réserver une table",
      themeDark: "Thème sombre",
      heroLineOne: "L'élégance à table.",
      heroLineTwo: "au gré des saisons.",
      heroCuisine: "Luxembourgeoise · Française · Italienne",
      heroHoursTitle: "Horaires d'ouverture",
      heroHoursWeekTitle: "Lundi – Vendredi",
      heroHoursWeekLunch: "12h00 – 15h00",
      heroHoursWeekDinner: "18h00 – 23h00",
      heroHoursWeekendTitle: "Samedi – Dimanche",
      heroHoursWeekendLunch: "12h00 – 15h00",
      heroHoursWeekendDinner: "18h00 – 23h00",
      heroOrderTitle: "Prise de commande",
      heroOrderLunch: "Déjeuner : 12h00 – 13h30",
      heroOrderDinner: "Dîner : 18h00 – 21h30",
      heroClosedTitle: "Fermé",
      heroClosedDays: "Lundi soir & Mardi",
      heroOpenNow: "OUVERT MAINTENANT",
      heroClosedNow: "FERMÉ MAINTENANT",
      cuisineIndex: "01 — La cuisine",
      cuisineHeadingOne: "L'art",
      cuisineHeadingTwo: "de ",
      cuisineHeadingThree: "la carte.",
      specials: "Les spéciales",
      viewPizzas: "Voir les pizzas",
      menuNote: "Les plats et prix ci-dessous sont issus de la carte actuelle.",
      starters: "Entrées",
      pastas: "Pâtes",
      meats: "Viandes",
      fish: "Poissons",
      desserts: "Desserts",
      experienceIndex: "03 — L'expérience",
      experienceHeadingOne: "Des recettes",
      experienceHeadingTwo: "traditionnelles,",
      experienceHeadingThree: "au fil des saisons.",
      experienceBody: "Christophe Hueber, Azra et leur équipe proposent une table pensée pour les déjeuners, dîners, repas de famille et rendez-vous d'entreprise.",
      newsIndex: "04 — Actualités",
      newsOverline: "Les rendez-vous Neptwone",
      newsHeadingOne: "À la carte,",
      newsHeadingTwo: "aujourd'hui.",
      newsBody: "La carte du jour, les suggestions et les événements sont mis à disposition depuis les publications officielles du restaurant.",
      thisWeek: "Cette semaine",
      dailyMenu: "Plats du jour",
      dailySpecial: "Spécial du jour",
      season: "La saison",
      suggestions: "Suggestions",
      occasions: "Réceptions & moments",
      events: "Événements",
      view: "Voir",
      photosIndex: "05 — Photos",
      galleryHeading: "Instants",
      reservationIndex: "06 — Réservation",
      reservationHeadingOne: "Votre table",
      reservationHeadingTwo: "vous attend.",
      reservationBody: "Les réservations sont prises en compte après confirmation de l'équipe. Merci de prévoir votre demande au moins 24 h à l'avance.",
      formName: "Nom",
      formEmail: "E-mail",
      formPhone: "Téléphone",
      formGuests: "Convives",
      formDetails: "Date, heure et demande",
      sendRequest: "Envoyer une demande",
      formNoteStart: "Votre demande ouvre un e-mail à destination de",
      formNoteMiddle: "Vous pouvez également utiliser",
      existingForm: "le formulaire en ligne existant",
      locationIndex: "07 — Nous trouver",
      locationHeadingOne: "Le chemin",
      locationHeadingTwo: "de la table.",
      openMaps: "Ouvrir dans Maps",
      hours: "Horaires d'ouverture",
      weekday: "Semaine",
      weekend: "Week-end",
      weekdayHours: "12h00–15h00 · 18h00–23h00",
      weekendHours: "12h00–15h00 · 18h00–24h00",
      orderTaking: "Prise de commande",
      orderHours: "12h00–13h30 · dès 18h00",
      scrollLabel: "Défiler",
      desktopNavLabel: "Navigation principale",
      mobileNavLabel: "Navigation mobile",
      scrollDiscover: "Découvrir Neptwone",
      openingMail: "Merci ! Votre demande s'ouvre dans votre messagerie.",
      footerLine: "Depuis la cuisine, jusqu'à votre table",
      backTop: "Haut de page ↑"
    },
    en: {
      navRestaurant: "Restaurant",
      navRestaurantMobile: "Restaurant",
      navMenu: "The Menu",
      navExperience: "The Experience",
      navNews: "News",
      navPhotos: "Photos",
      navReserve: "Reserve",
      navReservation: "Reservation",
      navLocation: "Location & Contact",
      skipLink: "Skip to content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      reserveTable: "Book a table",
      themeDark: "Dark theme",
      heroLineOne: "Elegance at the table.",
      heroLineTwo: "in step with the seasons.",
      heroCuisine: "Luxembourgish · French · Italian",
      heroHoursTitle: "Opening Hours",
      heroHoursWeekTitle: "Monday – Friday",
      heroHoursWeekLunch: "12:00 PM – 3:00 PM",
      heroHoursWeekDinner: "6:00 PM – 11:00 PM",
      heroHoursWeekendTitle: "Saturday – Sunday",
      heroHoursWeekendLunch: "12:00 PM – 3:00 PM",
      heroHoursWeekendDinner: "6:00 PM – 11:00 PM",
      heroOrderTitle: "Order Taking",
      heroOrderLunch: "Lunch: 12:00 PM – 1:30 PM",
      heroOrderDinner: "Dinner: 6:00 PM – 9:30 PM",
      heroClosedTitle: "Closed",
      heroClosedDays: "Monday Evening & Tuesday",
      heroOpenNow: "OPEN NOW",
      heroClosedNow: "CLOSED NOW",
      cuisineIndex: "01 — The cuisine",
      cuisineHeadingOne: "The art",
      cuisineHeadingTwo: "of the ",
      cuisineHeadingThree: "menu.",
      specials: "Specials",
      viewPizzas: "View pizzas",
      menuNote: "The dishes and prices below come from the current menu.",
      starters: "Starters",
      pastas: "Pasta",
      meats: "Meat",
      fish: "Fish",
      desserts: "Desserts",
      experienceIndex: "03 — The experience",
      experienceHeadingOne: "Traditional",
      experienceHeadingTwo: "recipes,",
      experienceHeadingThree: "in step with the seasons.",
      experienceBody: "Christophe Hueber, Azra and their team offer a table designed for lunch, dinner, family meals and business occasions.",
      newsIndex: "04 — News",
      newsOverline: "Neptwone occasions",
      newsHeadingOne: "On the menu,",
      newsHeadingTwo: "today.",
      newsBody: "Daily specials, seasonal suggestions and events are available through the restaurant's official publications.",
      thisWeek: "This week",
      dailyMenu: "Daily menu",
      dailySpecial: "Daily Special",
      season: "The season",
      suggestions: "Suggestions",
      occasions: "Receptions & occasions",
      events: "Events",
      view: "View",
      photosIndex: "05 — Gallery",
      galleryHeading: "Moments",
      reservationIndex: " Reservations",
      reservationHeadingOne: "Your table",
      reservationHeadingTwo: "awaits.",
      reservationBody: "Reservations are confirmed by the team. Please send your request at least 24 hours in advance.",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone",
      formGuests: "Guests",
      formDetails: "Date, time and request",
      sendRequest: "Send request",
      formNoteStart: "Your request opens an email to",
      formNoteMiddle: "You can also use",
      existingForm: "the existing online form",
      locationIndex: "07 — Find us",
      locationHeadingOne: "The way",
      locationHeadingTwo: "to the table.",
      openMaps: "Open in Maps",
      hours: "Opening Hours",
      weekday: "Weekdays",
      weekend: "Weekend",
      weekdayHours: "12:00–15:00 · 18:00–23:00",
      weekendHours: "12:00–15:00 · 18:00–24:00",
      orderTaking: "Order taking",
      orderHours: "12:00–1:30 PM · from 6:00 PM",
      scrollLabel: "Scroll",
      desktopNavLabel: "Main navigation",
      mobileNavLabel: "Mobile navigation",
      scrollDiscover: "Discover Neptwone",
      openingMail: "Thank you! Your request opens in your email client.",
      footerLine: "From the kitchen, to your table",
      backTop: "Back to top ↑"
    }
  };

  const languageButtons = selectors("[data-language-toggle]");
  const themeButtons = selectors("[data-theme-toggle]");
  const storedLanguage = localStorage.getItem("neptwone-language");
  const storedTheme = localStorage.getItem("neptwone-theme");
  let language = storedLanguage === "en" ? "en" : "fr";
  let theme = storedTheme === "light" ? "light" : "dark";

  const syncLanguage = () => {
    document.documentElement.lang = language;
    selectors("[data-i18n]").forEach((element) => {
      const phrase = copy[language][element.dataset.i18n];
      if (phrase) element.textContent = phrase;
    });
    selectors("[data-i18n-aria]").forEach((element) => {
      let key = element.dataset.i18nAria;
      if (key === "menuToggle") {
        key = element.classList.contains("is-active") ? "menuClose" : "menuOpen";
      }
      const phrase = copy[language][key];
      if (phrase) element.setAttribute("aria-label", phrase);
    });
    languageButtons.forEach((button) => {
      button.dataset.language = language;
      button.setAttribute("aria-label", language === "fr" ? "Switch to English" : "Passer en français");
    });
    document.title = language === "en" ? "Neptwone — Restaurant-Pizzeria, Colmar-Berg" : "Neptwone — Restaurant-Pizzeria, Colmar-Berg";
    localStorage.setItem("neptwone-language", language);
    updateOpenStatus();
  };
  const syncTheme = () => {
    document.documentElement.dataset.theme = theme;
    themeButtons.forEach((button) => button.setAttribute("aria-label", theme === "dark" ? (language === "fr" ? "Passer au thème clair" : "Switch to light theme") : (language === "fr" ? "Passer au thème sombre" : "Switch to dark theme")));
    localStorage.setItem("neptwone-theme", theme);
  };
  languageButtons.forEach((button) => button.addEventListener("click", () => { language = language === "fr" ? "en" : "fr"; syncLanguage(); syncTheme(); }));
  themeButtons.forEach((button) => button.addEventListener("click", () => { theme = theme === "dark" ? "light" : "dark"; syncTheme(); }));
  syncLanguage();
  syncTheme();
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);

  function updateOpenStatus() {
    const statusEl = selector("[data-hero-status]");
    if (!statusEl) return;
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    const isMonday = day === 1;
    const isTuesday = day === 2;
    const isWeekend = day === 0 || day === 6;

    let isOpen = false;

    if (isMonday && hours >= 18) {
      isOpen = false;
    } else if (isTuesday) {
      isOpen = false;
    } else if (isWeekend) {
      const lunchStart = 12 * 60;
      const lunchEnd = 15 * 60;
      const dinnerStart = 18 * 60;
      const dinnerEnd = 24 * 60;
      isOpen = (currentMinutes >= lunchStart && currentMinutes < lunchEnd) ||
               (currentMinutes >= dinnerStart && currentMinutes < dinnerEnd);
    } else {
      const lunchStart = 12 * 60;
      const lunchEnd = 15 * 60;
      const dinnerStart = 18 * 60;
      const dinnerEnd = 23 * 60;
      isOpen = (currentMinutes >= lunchStart && currentMinutes < lunchEnd) ||
               (currentMinutes >= dinnerStart && currentMinutes < dinnerEnd);
    }

    statusEl.textContent = isOpen ? copy[language].heroOpenNow : copy[language].heroClosedNow;
    statusEl.classList.toggle("is-open", isOpen);
    statusEl.classList.toggle("is-closed", !isOpen);
  }

  const loader = selector(".page-loader");
  const header = selector("[data-header]");
  const menuToggle = selector("[data-menu-toggle]");
  const mobileMenu = selector("[data-mobile-menu]");

  window.addEventListener("load", () => {
    window.setTimeout(() => loader?.classList.add("is-loaded"), reducedMotion ? 0 : 550);
  });

  const setHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  const closeMenu = () => {
    menuToggle?.classList.remove("is-active");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", copy[document.documentElement.lang || "fr"].menuOpen);
    mobileMenu?.classList.remove("is-open");
    mobileMenu?.setAttribute("aria-hidden", "true");
    mobileMenu?.setAttribute("inert", "");
    document.body.classList.remove("menu-open");
    menuToggle?.focus();
  };

  menuToggle?.addEventListener("click", () => {
    const opened = menuToggle.getAttribute("aria-expanded") === "true";
    if (opened) {
      closeMenu();
      return;
    }
    menuToggle.classList.add("is-active");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", copy[document.documentElement.lang || "fr"].menuClose);
    mobileMenu?.classList.add("is-open");
    mobileMenu?.setAttribute("aria-hidden", "false");
    mobileMenu?.removeAttribute("inert");
    document.body.classList.add("menu-open");
    
    const firstLink = mobileMenu?.querySelector("a");
    if (firstLink) firstLink.focus();
  });
  selectors(".mobile-menu a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

  /* ── About Panel ── */
  const aboutPanel = selector("[data-about-panel]");
  const aboutToggles = selectors("[data-about-toggle]");
  const aboutClosers = selectors("[data-about-close]");

  const openAbout = () => {
    aboutPanel?.classList.add("is-open");
    aboutPanel?.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
    aboutPanel?.querySelector(".about-panel-close")?.focus();
  };
  const closeAbout = () => {
    aboutPanel?.classList.remove("is-open");
    aboutPanel?.setAttribute("aria-hidden", "true");
    if (!mobileMenu?.classList.contains("is-open")) {
      document.body.classList.remove("menu-open");
    }
  };

  aboutToggles.forEach((button) => button.addEventListener("click", () => {
    if (mobileMenu?.classList.contains("is-open")) closeMenu();
    openAbout();
  }));
  aboutClosers.forEach((el) => el.addEventListener("click", closeAbout));
  aboutPanel?.querySelector(".about-panel-cta")?.addEventListener("click", closeAbout);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && aboutPanel?.classList.contains("is-open")) closeAbout();
  });

  const reveal = selectors("[data-reveal], [data-reveal-image]");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveal.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    reveal.forEach((element) => revealObserver.observe(element));
  }

  const menuTabs = selectors("[data-menu-tab]");
  const menuPanels = selectors("[data-menu-panel]");
  const preview = selector("#menu-preview-image");
  const menuImages = {
    dish: assets.menuDish,
    seafood: assets.menuSeafood,
    interior: assets.menuInterior,
    dessert: assets.menuDessert
  };

  const activateMenu = (name) => {
    menuTabs.forEach((tab) => {
      const active = tab.dataset.menuTab === name;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    menuPanels.forEach((panel) => {
      const active = panel.dataset.menuPanel === name;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
  };
  menuTabs.forEach((tab) => tab.addEventListener("click", () => activateMenu(tab.dataset.menuTab)));
  menuTabs.forEach((tab, index) => {
    tab.addEventListener("keydown", (event) => {
      const length = menuTabs.length;
      let next = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = menuTabs[(index + 1) % length];
      else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = menuTabs[(index - 1 + length) % length];
      else if (event.key === "Home") next = menuTabs[0];
      else if (event.key === "End") next = menuTabs[length - 1];
      if (!next) return;
      event.preventDefault();
      next.focus();
      activateMenu(next.dataset.menuTab);
    });
  });
  selectors(".menu-row").forEach((row) => {
    const source = menuImages[row.dataset.menuImage];
    if (source && !row.querySelector(".menu-row-thumb")) {
      const thumbnail = document.createElement("img");
      thumbnail.className = "menu-row-thumb";
      thumbnail.src = source;
      thumbnail.alt = "";
      thumbnail.loading = "lazy";
      thumbnail.decoding = "async";
      thumbnail.setAttribute("aria-hidden", "true");
      row.appendChild(thumbnail);
    }
    row.addEventListener("mouseenter", () => {
      if (!preview || !menuImages[row.dataset.menuImage]) return;
      preview.style.opacity = "0";
      window.setTimeout(() => { preview.src = menuImages[row.dataset.menuImage]; preview.style.opacity = "1"; }, 130);
    });
  });

  const dailyToggle = selector("[data-daily-toggle]");
  const dailyPanel = dailyToggle ? dailyToggle.closest(".daily-menu-panel") : null;
  if (dailyToggle && dailyPanel) {
    const mobileDaily = window.matchMedia("(max-width: 600px)");
    const setDailyOpen = (open) => {
      dailyPanel.classList.toggle("is-open", open);
      dailyToggle.setAttribute("aria-expanded", String(open));
    };
    const syncDaily = () => {
      if (mobileDaily.matches) setDailyOpen(dailyPanel.classList.contains("is-open"));
      else setDailyOpen(true);
    };
    dailyToggle.addEventListener("click", () => {
      if (mobileDaily.matches) setDailyOpen(!dailyPanel.classList.contains("is-open"));
    });
    dailyToggle.addEventListener("keydown", (event) => {
      if (mobileDaily.matches && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        setDailyOpen(!dailyPanel.classList.contains("is-open"));
      }
    });
    mobileDaily.addEventListener("change", syncDaily);
    syncDaily();
  }

  const reservationForm = selector("[data-reservation-form]");
  const formStatus = selector("[data-form-status]");
  reservationForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!reservationForm.reportValidity()) return;
    const data = new FormData(reservationForm);
    const body = [
      `Nom : ${data.get("name")}`,
      `E-mail : ${data.get("email")}`,
      `Téléphone : ${data.get("phone")}`,
      `Convives : ${data.get("guests")}`,
      "",
      `Date, heure et demande : ${data.get("details")}`
    ].join("\n");
    const query = new URLSearchParams({ subjectbody });
    formStatus.textContent = copy[language].openingMail;
    window.location.href = `mailto:info@neptwone.com?${query.toString()}`;
  });

  selector("[data-year]").textContent = new Date().getFullYear();

  const gallery = selector("[data-gallery]");
  const galleryStage = selector(".gallery-stage");
  const galleryTrack = selector("[data-gallery-track]");
  const canScrollGallery = () => window.matchMedia("(min-width: 721px)").matches && !reducedMotion;
  let galleryTicking = false;

  const refreshGalleryTrack = () => {
    if (!galleryTrack) return;
    galleryTrack.style.transform = "none";
    galleryTrack.offsetWidth;
  };

  const updateGallery = () => {
    galleryTicking = false;
    if (!gallery || !galleryStage || !galleryTrack || !canScrollGallery()) {
      if (galleryTrack) galleryTrack.style.transform = "";
      return;
    }
    const rect = galleryStage.getBoundingClientRect();
    const distance = Math.max(1, galleryStage.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / distance));
    const travel = Math.max(0, galleryTrack.scrollWidth - window.innerWidth + (window.innerWidth * 0.12));
    galleryTrack.style.transform = `translate3d(${-progress * travel}px, 0, 0)`;
  };

  const requestGalleryUpdate = () => {
    if (galleryTicking) return;
    galleryTicking = true;
    window.requestAnimationFrame(updateGallery);
  };

  if (galleryTrack) {
    const trackImages = galleryTrack.querySelectorAll("img");
    let loadedCount = 0;
    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === trackImages.length) {
        refreshGalleryTrack();
        updateGallery();
      }
    };
    trackImages.forEach((img) => {
      if (img.complete) onImageLoad();
      else img.addEventListener("load", onImageLoad, { once: true });
    });
  }

  window.addEventListener("scroll", requestGalleryUpdate, { passive: true });
  window.addEventListener("resize", () => {
    refreshGalleryTrack();
    requestGalleryUpdate();
  });
  updateGallery();

  // GSAP enhances the image drift when available; the site retains native behavior without it.
  if (!reducedMotion && window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    selectors("[data-parallax]").forEach((element) => {
      const amount = Number(element.dataset.parallax || 0.05) * 100;
      window.gsap.to(element, {
        yPercent: -amount,
        ease: "none",
        scrollTrigger: { trigger: element, startendscrub: true }
      });
    });
  }
})();
