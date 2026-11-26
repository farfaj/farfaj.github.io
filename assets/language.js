'use strict';
const page = document.documentElement;
const languageNav = document.querySelector('.switcher');
const photo = document.getElementById('portrait');
const translations = {
  en: { direction:'ltr', title:'Dr. Fawaz Khaled Alarfaj · King Faisal University', portrait:'Studio portrait of Dr. Fawaz Khaled Alarfaj' },
  ar: { direction:'rtl', title:'الدكتور فواز خالد العرفج · جامعة الملك فيصل', portrait:'صورة شخصية للدكتور فواز خالد العرفج' }
};
function showLanguage() {
  const language = location.hash === '#ar' ? 'ar' : 'en';
  const strings = translations[language];
  page.lang = language;
  page.dir = strings.direction;
  page.dataset.enhanced = '';
  document.title = strings.title;
  photo.alt = strings.portrait;
  for (const anchor of languageNav.querySelectorAll('a')) {
    if (anchor.lang === language) anchor.setAttribute('aria-current','true');
    else anchor.removeAttribute('aria-current');
  }
  languageNav.hidden = false;
}
showLanguage();
window.addEventListener('hashchange',showLanguage);
