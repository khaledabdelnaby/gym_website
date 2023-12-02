// افتراضيًا اللغة العربية
let currentLanguage = 'ar';

function changeLanguage(language) {
    // قم بتغيير قيمة اللغة
    currentLanguage = language;

    // قم بتحديث النصوص بناءً على اللغة المحددة
    updateTexts();
}

function updateTexts() {
    // قم بتحديث النصوص هنا باستخدام currentLanguage
    if (currentLanguage === 'ar') {
        document.body.dir = 'rtl'; // اتجاه الكتابة للعربية
        // قم بتحديث النصوص للعربية
    } else {
        document.body.dir = 'ltr'; // اتجاه الكتابة للغات الأخرى
        // قم بتحديث النصوص للغات الأخرى
    }
}

// استدعاء تحديث النصوص عند تحميل الصفحة
window.onload = updateTexts;
