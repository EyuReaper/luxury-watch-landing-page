// Set initial theme to light
document.body.setAttribute('data-theme', 'light');

// Language translations
const translations = {
    en: {
        heroTitle: "Luxury Timepieces",
        heroSubtitle: "Timeless Elegance for Every Moment",
        craftedToPerfection: "Crafted to Perfection",
        experienceArtistry: "Experience the artistry of fine watchmaking.",
        eleganceInEveryDetail: "Elegance in Every Detail",
        luxuryLifestyle: "Luxury is not just a choice, it's a lifestyle.",
        timelessDesign: "Timeless Design",
        watchesTranscend: "Watches that transcend trends and time.",
        collection: "Our Collection",
        footerText: "© 2024 Luxury Watches. All rights reserved."
    },
    am: {
        heroTitle: "የቅንጦት ሰዓታት",
        heroSubtitle: "ወቅታዊ ውበት ለእያንዳንዱ ጊዜ",
        craftedToPerfection: "እስከ ጥግ በጥራት የተሰራ",
        experienceArtistry: "ጥበባዊ የቅንጦት ሰዓታት ፍብረካን ያድንቁ",
        eleganceInEveryDetail: "ማራኪ ጥራትን በዝርዝር ይመልከቱ",
        luxuryLifestyle: "ውበት ማለት አንድ ምርጫ ብቻ አይደለም፣  የህይወት ዘይቤ ነው",
        timelessDesign: "ጊዜ የማያልፍበት ንድፍ ",
        watchesTranscend: "ጊዜን የሚዋጁ ዘመን የሚሻገሩ ሰዓታት ",
        collection: "የእኛ ማህደር",
        footerText: "© 2024 የቅንጦት ሰዓታት. ሁሉም መብቶች የተጠበቁ ናቸዉ፡፡"
    },
    ar: {
        heroTitle: "ساعات فاخرة",
        heroSubtitle: "أناقة خالدة لكل لحظة",
        craftedToPerfection: "مصنوعة بإتقان",
        experienceArtistry: "اختبر فن صناعة الساعات الفاخرة.",
        eleganceInEveryDetail: "أناقة في كل تفصيل",
        luxuryLifestyle: "الفخامة ليست مجرد خيار، بل أسلوب حياة.",
        timelessDesign: "تصميم خالٍ من الزمن",
        watchesTranscend: "ساعات تتجاوز الاتجاهات والزمان.",
        collection: "مجموعةنا",
        footerText: "© 2024 ساعات فاخرة. جميع الحقوق محفوظة."
    }
};

// Function to switch language
const switchLanguage = (lang) => {
  document.querySelector('.hero h1').textContent = translations[lang].heroTitle;
  document.querySelector('.hero p').textContent = translations[lang].heroSubtitle;
  document.querySelectorAll('.parallax-content h2').forEach((el, index) => {
      const titles = [
          translations[lang].craftedToPerfection,
          translations[lang].eleganceInEveryDetail,
          translations[lang].timelessDesign
      ];
      el.textContent = titles[index];
  });
  document.querySelectorAll('.parallax-content p').forEach((el, index) => {
      const subtitles = [
          translations[lang].experienceArtistry,
          translations[lang].luxuryLifestyle,
          translations[lang].watchesTranscend
      ];
      el.textContent = subtitles[index];
  });
  document.querySelector('.gallery h2').textContent = translations[lang].collection;
  document.querySelector('footer p').textContent = translations[lang].footerText;

  // Update info panels
  document.querySelectorAll('.info-panel').forEach(panel => {
      panel.innerHTML = panel.getAttribute(`data-${lang}`);
  });
};

// Setup language toggle
const setupLanguageToggle = () => {
  const langSwitch = document.getElementById('langSwitch');
  langSwitch.addEventListener('change', () => {
      const selectedLang = langSwitch.value;
      switchLanguage(selectedLang);
  });
};

// Function to handle watch item clicks
const setupWatchItemClicks = () => {
  document.querySelectorAll('.watch-item img').forEach(item => {
      item.addEventListener('click', () => {
          const infoPanel = item.nextElementSibling; // Get the corresponding info panel
          const isVisible = infoPanel.classList.contains('show');

          // Hide all info panels
          document.querySelectorAll('.info-panel').forEach(panel => {
              panel.classList.remove('show');
              panel.style.display = 'none';
          });

          // Toggle info panel visibility
          if (!isVisible) {
              infoPanel.style.display = 'block';
              setTimeout(() => infoPanel.classList.add('show'), 10); // Trigger CSS transition
          } else {
              infoPanel.classList.remove('show');
              setTimeout(() => infoPanel.style.display = 'none', 300); // Match with CSS transition duration
          }
      });
  });
};

// Function to setup theme toggle
const setupThemeToggle = () => {
  const themeSwitch = document.getElementById('themeSwitch');
  const themeLabel = document.getElementById('themeLabel');

  themeSwitch.addEventListener('change', () => {
      const isDark = themeSwitch.checked;
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
      themeLabel.textContent = isDark ? '☀️' : '🌙';
  });
};

// Function to update clock hands
const updateClock = () => {
  const now = new Date();
  const hours = now.getHours() % 12; // Convert to 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the rotation for each hand
  const hourDeg = (hours * 30) + (minutes * 0.5); // 360 degrees / 12 hours = 30 degrees per hour + minute adjustment
  const minuteDeg = (minutes * 6) + (seconds * 0.1); // 360 degrees / 60 minutes = 6 degrees per minute + second adjustment
  const secondDeg = (seconds * 6); // 360 degrees / 60 seconds = 6 degrees per second

  // Set the rotation styles
  document.querySelector('.hand.hour').style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector('.hand.minute').style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector('.hand.second').style.transform = `rotate(${secondDeg}deg)`;
};

// Initialize clock and update every second
const initClock = () => {
  updateClock(); // Update immediately on load
  setInterval(updateClock, 1000); // Update every second
};

// Initialize functions
const init = () => {
  setupWatchItemClicks();
  setupThemeToggle();
  initClock(); // Initialize the clock
  setupLanguageToggle(); // Initialize language toggle
};

// Run initialization
init();