// Builds the social-preview (OG) image so its logo is IDENTICAL to the site
// header: it uses the very same brand SVG files (MARK_SAND + WORDMARK_SAND) and
// the same gold-glow treatment, composited on the dark brand background, then
// rasterised to public/og-image.png (1200x630) via Chrome headless.
import { writeFileSync } from 'node:fs'

const root = new URL('..', import.meta.url)
const abs = (p) => new URL(p, root).pathname
const mark = 'file://' + abs('src/assets/logos/LATERALUS_MARK_SAND.svg')
const word = 'file://' + abs('src/assets/logos/LATERALUS_WORDMARK_SAND.svg')

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:1200px;height:630px;background:#070606}
  .card{
    width:1200px;height:630px;position:relative;overflow:hidden;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    gap:26px;
    background:
      radial-gradient(52% 54% at 50% 44%, rgba(249,156,28,0.1), rgba(249,156,28,0.03) 50%, transparent 72%),
      radial-gradient(130% 120% at 50% 42%, #18140f 0%, #0f0c0a 52%, #060504 100%);
    font-family: Georgia, 'Times New Roman', serif;
  }
  .logo{display:flex;align-items:center;gap:18px}
  .logo .mark{
    height:98px;width:auto;display:block;
    filter:
      drop-shadow(0 0 8px rgba(255,219,153,0.6))
      drop-shadow(0 0 22px rgba(249,156,28,0.95))
      drop-shadow(0 0 52px rgba(249,156,28,0.5));
  }
  .logo .word{height:52px;width:auto;display:block}
  .sub{
    font-family:Inter, Arial, sans-serif;font-size:20px;font-weight:600;
    letter-spacing:8px;color:#f99c1c;text-transform:uppercase;margin-top:-4px;
  }
  .tag{font-size:38px;color:#fdf7ee;margin-top:14px}
  .tag.gold{color:#f7bf75;margin-top:2px}
</style></head><body>
  <div class="card">
    <div class="logo">
      <img class="mark" src="${mark}" alt="">
      <img class="word" src="${word}" alt="Lateralus">
    </div>
    <div class="tag">Lateral intelligence. Parallel execution.</div>
    <div class="tag gold">One ecosystem.</div>
  </div>
</body></html>`

writeFileSync(new URL('public/_og.html', root), html)
console.log('wrote public/_og.html')
