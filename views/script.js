document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // biar ga ke reload kalo ada href
      links.forEach(l => l.style.color = ''); // reset warna semua
      link.style.color = 'cyan'; // ganti warna yang dipilih
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const result = document.querySelector('#result h4');
  const keys = document.querySelectorAll('.key');
  let expression = '';

  keys.forEach(key => {
    key.addEventListener('click', () => {
      const value = key.textContent;
      
      if (key.id === 'clear') {
        result.textContent = '';
        expression = ''
      } else if (key.id === 'backspace') {
        const hpus = result.textContent = expression.slice(0, -1);
        expression = hpus
      } else if (value === '=') {
        // ganti simbol x dan — jadi operator beneran
        expression = expression.replace(/x/g, '*').replace(/—/g, '-');
        try {
          result.textContent = eval(expression);
          expression = result.textContent; // biar bisa lanjut hitung dari hasil
        } catch (err) {
          result.textContent = 'Error';
          expression = '';
        }
      } else {
        expression += value;
        result.textContent = expression;
      }
    });
  });
});