// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // أو 'media' إذا كنت تريد التفعيل بناءً على تفضيلات النظام
  theme: {
    extend: {
      colors: {
        'primary': '#BB936A',
        'secondary': '#324654',
        'white': "#ffffff",
        // يمكنك إضافة المزيد من الألوان هنا
      },
      fontFamily: {
        'spartan': ['"League Spartan"', 'sans-serif'],
        // يمكنك إضافة المزيد من عائلات الخطوط هنا
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      // إضافة أي امتدادات أخرى هنا
    },
  },
  plugins: [
    // إضافة إضافات Tailwind الخاصة بك هنا (إن وجدت)
    // مثال: require('@tailwindcss/forms'),
  ],
};
