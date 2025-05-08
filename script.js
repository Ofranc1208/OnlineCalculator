document.addEventListener('DOMContentLoaded', () => {
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const nextBtn = document.getElementById('nextBtn');
  const backBtn = document.getElementById('backBtn');
  const slider = document.getElementById('annualIncrease'); // Optional slider
  const output = document.getElementById('annualIncreaseValue');
  let selectedType = '';

  // === 1) Initialize slider if exists ===
  if (slider && output) {
    slider.value = 0;
    document.documentElement.style.setProperty('--slider-progress', '0%');
    output.textContent = `${slider.value}%`;

    slider.addEventListener('input', () => {
      const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      document.documentElement.style.setProperty('--slider-progress', `${pct}%`);
      output.textContent = `${slider.value}%`;
    });
  }

  // === 2) General group setup function ===
  function setupButtonGroup(groupSelector) {
    const buttons = document.querySelectorAll(`${groupSelector} button`);
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
      });
    });
  }

  // Initialize groups
  setupButtonGroup('#paymentMode');
  setupButtonGroup('#paymentType');
  setupButtonGroup('#ageGroup');
  setupButtonGroup('#genderGroup');
  setupButtonGroup('#smokeGroup');
  setupButtonGroup('#healthProfileGroup');
  setupButtonGroup('#trafficGroup');
  setupButtonGroup('#cardiacGroup');
  setupButtonGroup('#annualIncreaseButtons'); // ✅ new annual increase button set

  // === 3) Update Next/Calculate button text ===
  const paymentTypeButtons = document.querySelectorAll('#paymentType button');
  paymentTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedType = button.dataset.type;
      nextBtn.textContent = (selectedType === 'LCP') ? 'Next' : 'Calculate';
    });
  });

  // === 4) Step navigation logic ===
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (nextBtn.textContent === 'Calculate') {
        alert(`Running calculation for ${selectedType || 'default'}…`);
      } else {
        step1.style.display = 'none';
        step2.style.display = 'block';
      }
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      step2.style.display = 'none';
      step1.style.display = 'block';
      nextBtn.textContent = (selectedType === 'LCP') ? 'Next' : 'Calculate';
    });
  }
});
// === 4) Step Navigation ===
nextBtn.addEventListener('click', () => {
  if (nextBtn.textContent === 'Calculate') {
    document.getElementById('offerForm').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
  } else {
    step1.style.display = 'none';
    step2.style.display = 'block';
  }
});
