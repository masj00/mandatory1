  document.querySelectorAll('.goal-header').forEach(header => {
    header.addEventListener('click', () => {
      const goal = header.parentElement;
      goal.classList.toggle('open');
    });
  });