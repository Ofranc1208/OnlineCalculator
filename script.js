document.addEventListener('DOMContentLoaded', () => {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const slider = document.getElementById('annualIncrease');
    const output = document.getElementById('annualIncreaseValue');
    let selectedType = '';
  
    // === 1) Force slider to 0 on load ===
    slider.value = 0;
    document.documentElement.style.setProperty('--slider-progress', '0%');
    output.textContent = `${slider.value}%`;
  
    // === 2) Button Group Activation ===
    function setupButtonGroup(groupSelector) {
      const buttons = document.querySelectorAll(`${groupSelector} button`);
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active'));
          button.classList.add('active');
        });
      });
    }
  
    setupButtonGroup('#paymentMode');
    setupButtonGroup('#paymentType');
    setupButtonGroup('#ageGroup');
    setupButtonGroup('#genderGroup');
    setupButtonGroup('#smokeGroup');
    setupButtonGroup('#healthProfileGroup');
    setupButtonGroup('#trafficGroup');
    setupButtonGroup('#cardiacGroup');
  
    // === 3) Payment Type Logic ===
    const paymentTypeButtons = document.querySelectorAll('#paymentType button');
    paymentTypeButtons.forEach(button => {
      button.addEventListener('click', () => {
        selectedType = button.dataset.type;
        nextBtn.textContent = (selectedType === 'LCP') ? 'Next' : 'Calculate';
      });
    });
  
    // === 4) Step Navigation ===
    nextBtn.addEventListener('click', () => {
      if (nextBtn.textContent === 'Calculate') {
        alert(`Running calculation for ${selectedType || 'default'}…`);
      } else {
        step1.style.display = 'none';
        step2.style.display = 'block';
      }
    });
  
    backBtn.addEventListener('click', () => {
      step2.style.display = 'none';
      step1.style.display = 'block';
      nextBtn.textContent = (selectedType === 'LCP') ? 'Next' : 'Calculate';
    });
  
    // === 5) Slider Fill + Value Update ===
    slider.addEventListener('input', () => {
      const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      document.documentElement.style.setProperty('--slider-progress', `${pct}%`);
      output.textContent = `${slider.value}%`;
    });
  });
  