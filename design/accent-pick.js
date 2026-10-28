// ВРЕМЕННО, только для выбора цвета: плашка внизу экрана меняет второй акцент (кнопки, точки, стрелки). Убрать после выбора.
(() => {
  const A = [['#33568f', 'Синий (без второго)'], ['#e8674a', 'Коралл'], ['#f2a93b', 'Янтарь'], ['#2fb193', 'Мята'], ['#d6456b', 'Малиновый'],
             ['#e9cf3e', 'Лимонный'], ['#4aa8e8', 'Небесный'], ['#8a6fd8', 'Сиреневый'], ['#1f9fb4', 'Бирюза'], ['#c4613f', 'Терракота']];
  const L = h => { const c = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255).map(x => x <= .03928 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; };
  const set = h => { const r = document.documentElement.style; r.setProperty('--acc2', h); r.setProperty('--acc2-ink', 1.05 / (L(h) + .05) >= 3 ? '#fff' : '#14171b'); };
  const box = document.createElement('div');
  box.style.cssText = 'position:fixed;left:50%;bottom:16px;translate:-50% 0;z-index:999;display:flex;flex-wrap:wrap;justify-content:center;gap:4px;max-width:calc(100% - 24px);padding:6px;border-radius:999px;background:rgba(255,255,255,.95);box-shadow:0 0 0 1px #cbd2dc,0 10px 30px -10px rgba(0,0,0,.3);font:500 13px Manrope,sans-serif';
  let cur; try { cur = localStorage.getItem('acc2'); } catch (e) {}
  cur = cur || '#33568f';
  A.forEach(([h, n]) => {
    const b = document.createElement('button');
    b.innerHTML = `<i style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${h};margin-right:6px;vertical-align:-1px"></i>${n}`;
    b.style.cssText = 'border:0;background:none;padding:7px 12px;border-radius:999px;cursor:pointer;font:inherit;color:#222';
    b.onclick = () => { set(h); try { localStorage.setItem('acc2', h); } catch (e) {} box.querySelectorAll('button').forEach(x => x.style.background = x === b ? '#e7eaf0' : 'none'); };
    if (h === cur) b.style.background = '#e7eaf0';
    box.append(b);
  });
  set(cur);
  document.body.append(box);
})();
