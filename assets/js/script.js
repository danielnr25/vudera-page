const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
const body = document.querySelector('body');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
   body.classList.add(currentTheme);
   if (currentTheme === 'dark-mode') {
      toggleSwitch.checked = true;
   }
}

toggleSwitch.addEventListener('change', function () {
   if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
   } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light-mode');
   }
});
