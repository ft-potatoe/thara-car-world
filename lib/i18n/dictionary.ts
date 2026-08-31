export type Locale = "en" | "ar";

export const businessInfo = {
  name: "Thara Car World",
  brand: "Thara Car Detailing",
  cr: "217366",
  phone: "+974 7009 6565",
  phoneHref: "+97470096565",
  whatsappHref: "https://wa.me/97470096565",
  email: "info@cardetailing.qa",
  address: "Al-Nayef Souq, Shop-32, Doha, Qatar",
};

export const services = [
  {
    slug: "full-exterior-polishing",
    icon: "sparkles",
    en: {
      name: "Full Exterior Polishing",
      short: "Restore factory-fresh shine to every panel.",
      bestFor: "Best for: dull, oxidized, or sun-faded paintwork.",
    },
    ar: {
      name: "تلميع خارجي كامل",
      short: "استعادة لمعان السيارة الأصلي لكل جزء من الهيكل الخارجي.",
      bestFor: "الأنسب لـ: الطلاء الباهت أو المتأكسد أو المتضرر من أشعة الشمس.",
    },
  },
  {
    slug: "interior-deep-cleaning",
    icon: "spray",
    en: {
      name: "Interior Deep Cleaning",
      short: "Complete sanitization of seats, carpets, and dash.",
      bestFor: "Best for: family vehicles, pre-sale prep, allergy control.",
    },
    ar: {
      name: "تنظيف داخلي عميق",
      short: "تعقيم شامل للمقاعد والسجاد والتابلوه.",
      bestFor: "الأنسب لـ: السيارات العائلية، تجهيز البيع، الحساسية.",
    },
  },
  {
    slug: "ceramic-coating",
    icon: "shield",
    en: {
      name: "Ceramic Coating",
      short: "Long-lasting nano-ceramic layer that beads water and resists UV, chemicals, and swirls.",
      bestFor: "Best for: owners who want years of protection and a permanent wet-gloss look.",
    },
    ar: {
      name: "الطلاء السيراميكي",
      short: "طبقة سيراميك نانو طويلة الأمد تصد الماء والمواد الكيميائية والأشعة فوق البنفسجية.",
      bestFor: "الأنسب لـ: من يريد حماية تدوم لسنوات ولمعانًا دائمًا.",
    },
  },
  {
    slug: "engine-bay-cleaning",
    icon: "engine",
    en: {
      name: "Engine Bay Cleaning",
      short: "Safe degreasing and detailing of the engine compartment.",
      bestFor: "Best for: resale value, routine maintenance, leak inspection.",
    },
    ar: {
      name: "تنظيف حجرة المحرك",
      short: "إزالة الشحوم وتنظيف حجرة المحرك بأمان.",
      bestFor: "الأنسب لـ: رفع قيمة إعادة البيع، الصيانة الدورية.",
    },
  },
  {
    slug: "scratch-swirl-removal",
    icon: "wand",
    en: {
      name: "Scratch & Swirl Removal",
      short: "Machine polishing to correct surface defects and restore clarity.",
      bestFor: "Best for: cars with visible swirl marks or light scratches.",
    },
    ar: {
      name: "إزالة الخدوش والدوامات",
      short: "تلميع احترافي لإصلاح عيوب السطح واستعادة الوضوح.",
      bestFor: "الأنسب لـ: السيارات ذات الخدوش أو آثار الدوامات الظاهرة.",
    },
  },
  {
    slug: "upholstery-shampooing",
    icon: "seat",
    en: {
      name: "Upholstery Shampooing",
      short: "Deep shampoo treatment for fabric and leather seats.",
      bestFor: "Best for: stains, odors, and worn-in upholstery.",
    },
    ar: {
      name: "غسيل المفروشات",
      short: "معالجة عميقة بالشامبو للمقاعد القماشية والجلدية.",
      bestFor: "الأنسب لـ: البقع والروائح والمفروشات المتسخة.",
    },
  },
  {
    slug: "headlight-restoration",
    icon: "headlight",
    en: {
      name: "Headlight Restoration",
      short: "Remove haze and yellowing for maximum night visibility.",
      bestFor: "Best for: foggy, yellowed, or oxidized headlight lenses.",
    },
    ar: {
      name: "تجديد المصابيح الأمامية",
      short: "إزالة الضباب والاصفرار لأقصى وضوح ليلي.",
      bestFor: "الأنسب لـ: العدسات الضبابية أو المصفرة.",
    },
  },
  {
    slug: "paint-protection-wax",
    icon: "wax",
    en: {
      name: "Paint Protection Wax",
      short: "Durable wax sealant that guards against the elements.",
      bestFor: "Best for: everyday drivers wanting an affordable protective layer.",
    },
    ar: {
      name: "شمع حماية الطلاء",
      short: "طبقة شمع متينة تحمي من العوامل الجوية.",
      bestFor: "الأنسب لـ: الاستخدام اليومي بميزانية اقتصادية.",
    },
  },
] as const;

export const processSteps = [
  {
    en: { title: "Inspection", desc: "Vehicle assessment & paint condition analysis." },
    ar: { title: "الفحص", desc: "تقييم السيارة وتحليل حالة الطلاء." },
  },
  {
    en: { title: "Deep Cleaning", desc: "Interior sanitization & exterior wash." },
    ar: { title: "التنظيف العميق", desc: "تعقيم داخلي وغسيل خارجي." },
  },
  {
    en: { title: "Correction", desc: "Scratch removal & paint polishing." },
    ar: { title: "التصحيح", desc: "إزالة الخدوش وتلميع الطلاء." },
  },
  {
    en: { title: "Protection", desc: "Ceramic coating & sealing layer." },
    ar: { title: "الحماية", desc: "الطلاء السيراميكي وطبقة الحماية." },
  },
] as const;

export const whyChooseUs = [
  {
    icon: "gem",
    en: { title: "Premium Products", desc: "Industry-grade chemicals & ceramic coatings." },
    ar: { title: "منتجات فاخرة", desc: "مواد كيميائية وطلاء سيراميكي بمعايير عالمية." },
  },
  {
    icon: "users",
    en: { title: "Trained Technicians", desc: "Skilled hands with years of detailing experience." },
    ar: { title: "فنيون مدربون", desc: "أيدٍ ماهرة بخبرة سنوات في التلميع والتنظيف." },
  },
  {
    icon: "wallet",
    en: { title: "Affordable Packages", desc: "Premium results without the premium price tag." },
    ar: { title: "باقات بأسعار مناسبة", desc: "نتائج فاخرة بأسعار في متناول الجميع." },
  },
  {
    icon: "badge-check",
    en: { title: "Guaranteed Finish", desc: "We stand behind every detail, every time." },
    ar: { title: "نتيجة مضمونة", desc: "نضمن جودة العمل في كل مرة." },
  },
] as const;

type LocaleDictionary = {
  nav: {
    home: string;
    services: string;
    gallery: string;
    book: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    scrollCue: string;
  };
  stats: {
    heading: string;
    items: { value: number; suffix: string; label: string; placeholder: boolean }[];
  };
  featuredServices: {
    eyebrow: string;
    heading: string;
    sub: string;
    viewAll: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    sub: string;
  };
  why: {
    eyebrow: string;
    heading: string;
  };
  beforeAfter: {
    eyebrow: string;
    heading: string;
    sub: string;
    before: string;
    after: string;
  };
  ctaBanner: {
    heading: string;
    sub: string;
    cta: string;
    visit: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactUs: string;
    followUs: string;
    rights: string;
    crLabel: string;
  };
  servicesPage: {
    eyebrow: string;
    heading: string;
    sub: string;
    flagshipEyebrow: string;
    flagshipCta: string;
    packagesHeading: string;
    packagesSub: string;
    priceOnRequest: string;
    packages: { tier: string; tagline: string; price: string }[];
  };
  galleryPage: {
    eyebrow: string;
    heading: string;
    sub: string;
    filters: { all: string; exterior: string; interior: string; ceramic: string };
  };
  bookPage: {
    eyebrow: string;
    heading: string;
    sub: string;
    form: {
      name: string;
      phone: string;
      carModel: string;
      service: string;
      date: string;
      time: string;
      submit: string;
      namePlaceholder: string;
      phonePlaceholder: string;
      carPlaceholder: string;
      servicePlaceholder: string;
    };
    whatsappCta: string;
    whatsappNote: string;
    successMessage: string;
  };
  contactPage: {
    eyebrow: string;
    heading: string;
    sub: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    socialLabel: string;
    mapNote: string;
  };
  common: {
    whatsapp: string;
    call: string;
    placeholderBadge: string;
  };
};

export const dictionary: Record<Locale, LocaleDictionary> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      book: "Book",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      eyebrow: "Doha, Qatar · Premium Auto Detailing",
      title: "THARA CAR WORLD",
      subtitle:
        "Where every panel gets a second chance. Precision detailing, ceramic protection, and a finish that turns heads on the Corniche.",
      cta: "Book Now",
      secondaryCta: "View Services",
      scrollCue: "Scroll",
    },
    stats: {
      heading: "Trusted across Doha",
      items: [
        { value: 500, suffix: "+", label: "Cars Detailed", placeholder: true },
        { value: 5, suffix: "+", label: "Years Experience", placeholder: true },
        { value: 8, suffix: "", label: "Signature Services", placeholder: false },
        { value: 100, suffix: "%", label: "Satisfaction Focus", placeholder: true },
      ],
    },
    featuredServices: {
      eyebrow: "What We Do",
      heading: "Signature Services",
      sub: "A full menu of correction and protection work, delivered with premium products and trained hands.",
      viewAll: "View All Services",
    },
    process: {
      eyebrow: "How It Works",
      heading: "The Detailing Process",
      sub: "Four disciplined stages between a tired paint job and a showroom finish.",
    },
    why: {
      eyebrow: "Why Thara",
      heading: "Why Choose Us",
    },
    beforeAfter: {
      eyebrow: "Correction Work",
      heading: "Before & After",
      sub: "Drag to reveal the difference precision detailing makes.",
      before: "Before",
      after: "After",
    },
    ctaBanner: {
      heading: "Ready for a car that turns heads?",
      sub: "Visit us at Al-Nayef Souq, or send a WhatsApp message to book in minutes.",
      cta: "Chat on WhatsApp",
      visit: "Visit Us",
    },
    footer: {
      tagline: "Premium auto detailing in the heart of Doha.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      crLabel: "CR",
    },
    servicesPage: {
      eyebrow: "Full Menu",
      heading: "Our Services",
      sub: "Eight specialized services, each backed by premium products and a guaranteed finish.",
      flagshipEyebrow: "Our Differentiator",
      flagshipCta: "Book Ceramic Coating",
      packagesHeading: "Packages",
      packagesSub: "Bundled tiers for every budget.",
      priceOnRequest: "Price on request",
      packages: [
        { tier: "Silver", tagline: "Essential care", price: "[PLACEHOLDER — confirm with client]" },
        { tier: "Gold", tagline: "Complete correction", price: "[PLACEHOLDER — confirm with client]" },
        { tier: "Platinum", tagline: "Full ceramic protection", price: "[PLACEHOLDER — confirm with client]" },
      ],
    },
    galleryPage: {
      eyebrow: "Our Work",
      heading: "Gallery",
      sub: "A look at recent detailing work. Filter by category to browse.",
      filters: { all: "All", exterior: "Exterior", interior: "Interior", ceramic: "Ceramic" },
    },
    bookPage: {
      eyebrow: "Reserve Your Slot",
      heading: "Book an Appointment",
      sub: "Fill out the form and our team will confirm your slot, or message us directly on WhatsApp.",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        carModel: "Car Make & Model",
        service: "Select Service",
        date: "Preferred Date",
        time: "Preferred Time",
        submit: "Request Booking",
        namePlaceholder: "e.g. Ahmed Al-Thani",
        phonePlaceholder: "+974 XXXX XXXX",
        carPlaceholder: "e.g. Toyota Land Cruiser 2022",
        servicePlaceholder: "Choose a service",
      },
      whatsappCta: "Quick Book on WhatsApp",
      whatsappNote: "Prefer to chat? Message us directly and skip the form.",
      successMessage: "This is a mock form for the design pitch — submissions are not yet connected to a backend.",
    },
    contactPage: {
      eyebrow: "Get In Touch",
      heading: "Contact Us",
      sub: "Visit our shop, call, or message us — we're in the heart of Al-Nayef Souq.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Working Hours",
      hoursValue: "[PLACEHOLDER — confirm with client]",
      socialLabel: "Follow Us",
      mapNote: "Map placeholder — embed the real Google Maps location for Al-Nayef Souq, Shop-32.",
    },
    common: {
      whatsapp: "WhatsApp",
      call: "Call Now",
      placeholderBadge: "PLACEHOLDER",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      gallery: "معرض الأعمال",
      book: "احجز الآن",
      contact: "تواصل معنا",
      bookNow: "احجز الآن",
    },
    hero: {
      eyebrow: "الدوحة، قطر · تلميع سيارات فاخر",
      title: "ثارا كار وورلد",
      subtitle:
        "حيث تحصل كل سيارة على فرصة ثانية. تلميع دقيق، حماية سيراميكية، ولمسة نهائية تلفت الأنظار.",
      cta: "احجز الآن",
      secondaryCta: "عرض الخدمات",
      scrollCue: "مرر للأسفل",
    },
    stats: {
      heading: "موثوقون في جميع أنحاء الدوحة",
      items: [
        { value: 500, suffix: "+", label: "سيارة تم تلميعها", placeholder: true },
        { value: 5, suffix: "+", label: "سنوات خبرة", placeholder: true },
        { value: 8, suffix: "", label: "خدمات مميزة", placeholder: false },
        { value: 100, suffix: "%", label: "التركيز على الرضا", placeholder: true },
      ],
    },
    featuredServices: {
      eyebrow: "ماذا نقدم",
      heading: "خدماتنا المميزة",
      sub: "قائمة كاملة من أعمال التصحيح والحماية، بمنتجات فاخرة وأيدٍ مدربة.",
      viewAll: "عرض جميع الخدمات",
    },
    process: {
      eyebrow: "كيف نعمل",
      heading: "خطوات التلميع",
      sub: "أربع مراحل منظمة تفصل بين طلاء متعب ولمسة نهائية بمستوى صالة العرض.",
    },
    why: {
      eyebrow: "لماذا ثارا",
      heading: "لماذا تختارنا",
    },
    beforeAfter: {
      eyebrow: "أعمال التصحيح",
      heading: "قبل وبعد",
      sub: "اسحب لرؤية الفرق الذي يصنعه التلميع الدقيق.",
      before: "قبل",
      after: "بعد",
    },
    ctaBanner: {
      heading: "جاهز لسيارة تلفت الأنظار؟",
      sub: "زرنا في سوق النايف، أو أرسل رسالة واتساب للحجز خلال دقائق.",
      cta: "تواصل عبر واتساب",
      visit: "زورونا",
    },
    footer: {
      tagline: "تلميع سيارات فاخر في قلب الدوحة.",
      quickLinks: "روابط سريعة",
      contactUs: "تواصل معنا",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة.",
      crLabel: "السجل التجاري",
    },
    servicesPage: {
      eyebrow: "القائمة الكاملة",
      heading: "خدماتنا",
      sub: "ثماني خدمات متخصصة، كل منها مدعومة بمنتجات فاخرة ونتيجة مضمونة.",
      flagshipEyebrow: "ما يميزنا",
      flagshipCta: "احجز الطلاء السيراميكي",
      packagesHeading: "الباقات",
      packagesSub: "باقات مجمعة تناسب كل ميزانية.",
      priceOnRequest: "السعر عند الطلب",
      packages: [
        { tier: "فضية", tagline: "عناية أساسية", price: "[PLACEHOLDER — confirm with client]" },
        { tier: "ذهبية", tagline: "تصحيح كامل", price: "[PLACEHOLDER — confirm with client]" },
        { tier: "بلاتينية", tagline: "حماية سيراميكية كاملة", price: "[PLACEHOLDER — confirm with client]" },
      ],
    },
    galleryPage: {
      eyebrow: "أعمالنا",
      heading: "معرض الأعمال",
      sub: "نظرة على أعمال التلميع الأخيرة. صنّف حسب الفئة للتصفح.",
      filters: { all: "الكل", exterior: "خارجي", interior: "داخلي", ceramic: "سيراميك" },
    },
    bookPage: {
      eyebrow: "احجز موعدك",
      heading: "احجز موعدًا",
      sub: "املأ النموذج وسيقوم فريقنا بتأكيد موعدك، أو راسلنا مباشرة عبر واتساب.",
      form: {
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        carModel: "نوع وموديل السيارة",
        service: "اختر الخدمة",
        date: "التاريخ المفضل",
        time: "الوقت المفضل",
        submit: "طلب الحجز",
        namePlaceholder: "مثال: أحمد آل ثاني",
        phonePlaceholder: "+974 XXXX XXXX",
        carPlaceholder: "مثال: تويوتا لاند كروزر 2022",
        servicePlaceholder: "اختر خدمة",
      },
      whatsappCta: "حجز سريع عبر واتساب",
      whatsappNote: "تفضل الدردشة؟ راسلنا مباشرة وتخطَّ النموذج.",
      successMessage: "هذا نموذج تجريبي لعرض التصميم — لم يتم ربط الإرسال بأي نظام بعد.",
    },
    contactPage: {
      eyebrow: "تواصل معنا",
      heading: "اتصل بنا",
      sub: "زوروا محلنا، اتصلوا، أو راسلونا — نحن في قلب سوق النايف.",
      addressLabel: "العنوان",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      hoursLabel: "ساعات العمل",
      hoursValue: "[PLACEHOLDER — confirm with client]",
      socialLabel: "تابعنا",
      mapNote: "خريطة مؤقتة — يجب دمج موقع خرائط جوجل الفعلي لسوق النايف، محل 32.",
    },
    common: {
      whatsapp: "واتساب",
      call: "اتصل الآن",
      placeholderBadge: "مؤقت",
    },
  },
};

export type Dictionary = LocaleDictionary;
