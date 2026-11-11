// ================================
// FITZONE - JAVASCRIPT
// ================================

// 1. Loading screen

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
    }, 900);
});


// 2. Mobile menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// 3. Language system

const translations = {

    ar: {
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navMuscles: "العضلات",
        navPrograms: "البرامج",
        navNutrition: "التغذية",
        navContact: "اتصل بنا",

        heroLabel: "ابدأ رحلتك نحو القوة",
        heroTitle: "ابنِ جسمك<br><span>واصنع قوتك</span>",
        heroDesc: "اكتشف عالم كمال الأجسام واللياقة البدنية. تعلم التمارين الصحيحة وطور جسمك خطوة بخطوة.",
        heroBtn1: "اكتشف التمارين",
        heroBtn2: "اكتشف المزيد",

        aboutTag: "من نحن",
        aboutTitle: "أكثر من مجرد <span>رياضة</span>",
        aboutDesc: "FITZONE هو دليلك لاكتشاف عالم اللياقة البدنية وبناء جسم صحي وقوي.",
        aboutSubtitle: "قوتك تبدأ من قرارك",
        aboutText: "نقدم لك معلومات وتمارين رياضية تساعدك على تطوير لياقتك وتحسين أدائك. سواء كنت مبتدئاً أو محترفاً، ستجد هنا ما يساعدك على تحقيق أهدافك.",
        feature1: "تمارين مدروسة",
        feature2: "برامج تدريب متنوعة",
        feature3: "نصائح غذائية",
        feature4: "معلومات للمبتدئين والمحترفين",
        aboutBtn: "اكتشف برامجنا",

        musclesTag: "التدريب العضلي",
        musclesTitle: "اكتشف <span>عضلات جسمك</span>",
        musclesDesc: "اختر العضلة التي تريد تدريبها واكتشف تمارينها.",

        chest: "عضلات الصدر",
        chestDesc: "تمارين لتطوير عضلات الصدر",
        back: "عضلات الظهر",
        backDesc: "قوة وتوازن للجزء الخلفي",
        arms: "عضلات الذراع",
        armsDesc: "تمارين البايسبس والترايسبس",
        legs: "عضلات الأرجل",
        legsDesc: "بناء القوة والتوازن",
        shoulders: "عضلات الأكتاف",
        shouldersDesc: "تطوير قوة الكتفين",
        abs: "عضلات البطن",
        absDesc: "تمارين تقوية عضلات البطن",
        discover: "اكتشف التمارين ←",

        programTag: "خطط التدريب",
        programTitle: "اختر <span>برنامجك</span>",
        programDesc: "ابدأ من مستواك وتقدم نحو أهدافك.",
        beginner: "المبتدئون",
        beginnerDesc: "تعلم أساسيات التدريب والحركات الصحيحة.",
        intermediate: "المستوى المتوسط",
        intermediateDesc: "طور قوتك وابدأ بتحديات جديدة.",
        advanced: "المحترفون",
        advancedDesc: "ارتق بأدائك وطور برنامجك الرياضي.",
        learnMore: "اعرف المزيد ←",

        nutritionTag: "التغذية الرياضية",
        nutritionTitle: "جسم قوي يبدأ من <span>تغذية سليمة</span>",
        nutritionDesc: "التغذية المتوازنة والماء والنوم الجيد عناصر مهمة لدعم التدريب والتعافي.",
        food1: "البروتينات: دعم بناء العضلات وإصلاحها.",
        food2: "الكربوهيدرات: مصدر مهم للطاقة.",
        food3: "الدهون الصحية: دعم وظائف الجسم.",
        food4: "الماء: الحفاظ على الترطيب.",

        contactTag: "تواصل معنا",
        contactTitle: "ابدأ رحلتك <span>اليوم</span>",
        contactDesc: "أرسل لنا رسالتك واستفسارك.",
        send: "إرسال الرسالة",
        footerText: "القوة تبدأ من هنا. استمر في التطور."
    },

    en: {
        navHome: "Home",
        navAbout: "About",
        navMuscles: "Muscles",
        navPrograms: "Programs",
        navNutrition: "Nutrition",
        navContact: "Contact",

        heroLabel: "START YOUR JOURNEY TO STRENGTH",
        heroTitle: "BUILD YOUR BODY<br><span>UNLEASH YOUR POWER</span>",
        heroDesc: "Discover the world of bodybuilding and fitness. Learn proper exercises and improve your body step by step.",
        heroBtn1: "Explore Exercises",
        heroBtn2: "Discover More",

        aboutTag: "ABOUT US",
        aboutTitle: "MORE THAN JUST <span>FITNESS</span>",
        aboutDesc: "FITZONE is your guide to discovering fitness and building a healthy, strong body.",
        aboutSubtitle: "YOUR STRENGTH STARTS WITH A DECISION",
        aboutText: "We provide fitness information and exercises to help improve your performance. Whether you are a beginner or an advanced athlete, you will find useful guidance here.",
        feature1: "Structured Exercises",
        feature2: "Various Training Programs",
        feature3: "Nutrition Advice",
        feature4: "Guides for All Levels",
        aboutBtn: "Explore Programs",

        musclesTag: "MUSCLE TRAINING",
        musclesTitle: "DISCOVER YOUR <span>MUSCLES</span>",
        musclesDesc: "Choose a muscle group and discover its exercises.",

        chest: "Chest Muscles",
        chestDesc: "Exercises to develop your chest",
        back: "Back Muscles",
        backDesc: "Strength and balance for your back",
        arms: "Arm Muscles",
        armsDesc: "Biceps and triceps exercises",
        legs: "Leg Muscles",
        legsDesc: "Build strength and balance",
        shoulders: "Shoulder Muscles",
        shouldersDesc: "Develop shoulder strength",
        abs: "Abdominal Muscles",
        absDesc: "Exercises to strengthen your abs",
        discover: "Explore Exercises →",

        programTag: "TRAINING PLANS",
        programTitle: "CHOOSE YOUR <span>PROGRAM</span>",
        programDesc: "Start at your level and progress towards your goals.",
        beginner: "Beginners",
        beginnerDesc: "Learn the basics of training and proper movements.",
        intermediate: "Intermediate",
        intermediateDesc: "Build your strength and take on new challenges.",
        advanced: "Advanced",
        advancedDesc: "Improve your performance and training routine.",
        learnMore: "Learn More →",

        nutritionTag: "SPORTS NUTRITION",
        nutritionTitle: "A STRONG BODY STARTS WITH <span>GOOD NUTRITION</span>",
        nutritionDesc: "Balanced nutrition, hydration and good sleep support training and recovery.",
        food1: "Protein: Supports muscle growth and repair.",
        food2: "Carbohydrates: An important source of energy.",
        food3: "Healthy fats: Support body functions.",
        food4: "Water: Helps maintain hydration.",

        contactTag: "CONTACT US",
        contactTitle: "START YOUR JOURNEY <span>TODAY</span>",
        contactDesc: "Send us your message or question.",
        send: "Send Message",
        footerText: "Strength starts here. Keep improving."
    }
};


// Change language

const langBtn = document.getElementById("langBtn");

function changeLanguage(language) {

    const dictionary = translations[language];

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle("english", language === "en");

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    // Form placeholders

    document.getElementById("name").placeholder =
        language === "ar" ? "الاسم الكامل" : "Full Name";

    document.getElementById("email").placeholder =
        language === "ar" ? "البريد الإلكتروني" : "Email Address";

    document.getElementById("message").placeholder =
        language === "ar" ? "اكتب رسالتك..." : "Write your message...";

    langBtn.textContent = language === "ar" ? "EN" : "AR";

    localStorage.setItem("fitzone-language", language);
}

let currentLanguage =
    localStorage.getItem("fitzone-language") || "ar";

changeLanguage(currentLanguage);

langBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "ar" ? "en" : "ar";
    changeLanguage(currentLanguage);
});


// 4. Scroll animations

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


// 5. Exercise information

const exercises = {

    chest: {
        ar: ["تمرين ضغط الصدر بالبار", "تمرين ضغط الدمبل", "تمرين تفتيح الصدر"],
        en: ["Barbell Bench Press", "Dumbbell Press", "Chest Fly"]
    },

    back: {
        ar: ["السحب العلوي", "تمرين التجديف", "تمرين العقلة"],
        en: ["Lat Pulldown", "Seated Row", "Pull-ups"]
    },

    arms: {
        ar: ["تمرين بايسبس بالدمبل", "تمرين المطرقة", "تمرين ترايسبس"],
        en: ["Dumbbell Biceps Curl", "Hammer Curl", "Triceps Extension"]
    },

    legs: {
        ar: ["تمرين السكوات", "تمرين ضغط الأرجل", "تمرين الاندفاع"],
        en: ["Squats", "Leg Press", "Lunges"]
    },

    shoulders: {
        ar: ["ضغط الأكتاف", "الرفع الجانبي", "الرفع الأمامي"],
        en: ["Shoulder Press", "Lateral Raises", "Front Raises"]
    },

    abs: {
        ar: ["تمرين البلانك", "تمرين الكرنش", "رفع الأرجل"],
        en: ["Plank", "Crunches", "Leg Raises"]
    }

};


// Exercise modal

const modal = document.getElementById("exerciseModal");
const modalTitle = document.getElementById("modalTitle");
const modalExercises = document.getElementById("modalExercises");
const modalNote = document.getElementById("modalNote");

document.querySelectorAll(".card-btn").forEach(button => {

    button.addEventListener("click", () => {

        const muscle = button.dataset.muscle;
        const language = currentLanguage;

        const title = translations[language][muscle];

        const list = exercises[muscle][language];

        modalTitle.textContent = title;

        modalExercises.innerHTML = `
            <ul>
                ${list.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;

        modalNote.textContent = language === "ar"
            ? "ابدأ بإحماء مناسب، واختر الأوزان التي تناسب مستواك، واهتم بالتقنية الصحيحة."
            : "Warm up properly, choose weights suitable for your level, and focus on correct technique.";

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");

    });

});


// Close modal

function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
}

document.getElementById("closeModal").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();
    }
});


// 6. Contact form

document.getElementById("contactForm").addEventListener("submit", event => {

    event.preventDefault();

    const message = document.getElementById("formMessage");

    message.textContent = currentLanguage === "ar"
        ? "شكراً لك! النموذج تجريبي، ولم تُرسل الرسالة إلى خادم."
        : "Thank you! This is a demo form. No message was sent to a server.";

    event.target.reset();

});