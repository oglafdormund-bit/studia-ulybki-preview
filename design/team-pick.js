// ВРЕМЕННО, только для выбора: плашка внизу экрана меняет фото под полосой «Команда». Убрать после выбора.
(() => {
  const t = document.querySelector('.team'); if (!t) return;
  const V = [['tb1', 'Инструменты'], ['tb2', 'Модели челюстей'], ['tb3', 'Кабинет и врач'], ['', 'Без фото']];
  const box = document.createElement('div');
  box.style.cssText = 'position:fixed;left:50%;bottom:16px;translate:-50% 0;z-index:999;display:flex;gap:4px;padding:6px;border-radius:999px;background:rgba(255,255,255,.95);box-shadow:0 0 0 1px #cbd2dc,0 10px 30px -10px rgba(0,0,0,.3);font:500 13px Manrope,sans-serif';
  V.forEach(([c, n]) => {
    const b = document.createElement('button'); b.textContent = n;
    b.style.cssText = 'border:0;padding:8px 14px;border-radius:999px;cursor:pointer;font:inherit;color:#222;background:' + (t.classList.contains(c || 'x') ? '#e7eaf0' : 'none');
    b.onclick = () => { t.classList.remove('tb1', 'tb2', 'tb3'); if (c) t.classList.add(c); box.querySelectorAll('button').forEach(x => x.style.background = x === b ? '#e7eaf0' : 'none'); t.scrollIntoView({ block: 'center' }); };
    box.append(b);
  });
  document.body.append(box);
})();
