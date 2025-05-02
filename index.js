function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  const isOpen = content.classList.contains('max-h-40');

  document.querySelectorAll('[id^="content-"]').forEach(el => {
    el.classList.remove('max-h-40', 'pt-2');
    el.classList.add('max-h-0');
  });

  document.querySelectorAll('[id^="icon-"]').forEach(el => {
    el.textContent = '−';
  });

  if (!isOpen) {
    content.classList.remove('max-h-0');
    content.classList.add('max-h-40', 'pt-2');
    icon.textContent = '+';
  } else {
    icon.textContent = '−';
  }
}