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
        "pink": "#EB2952",
        "navyBlue":"#0D1438",
        "navyBlueLight":"#293056"

        // يمكنك إضافة المزيد من الألوان هنا
      },
      fontFamily: {
        'league': ['"League Spartan"', 'sans-serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      // إضافة امتدادات للأنيميشن والتدرج اللوني
      backgroundSize: {
        '200%': '200%', // لتوسيع حجم الخلفية
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient': 'gradient 5s ease infinite', // تعريف الحركة المخصصة
      },
    },
  },
  plugins: [
    // إضافة إضافات Tailwind الخاصة بك هنا (إن وجدت)
    // مثال: require('@tailwindcss/forms'),
  ],
};
