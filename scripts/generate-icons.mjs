import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, "..", "public", "icons");

const ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="bg" x1="64" y1="48" x2="448" y2="464" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0a0e17"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="train" x1="96" y1="248" x2="416" y2="248" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563eb"/><stop offset="1" stop-color="#6366f1"/>
    </linearGradient>
    <linearGradient id="nose" x1="96" y1="220" x2="200" y2="280" gradientUnits="userSpaceOnUse">
      <stop stop-color="#60a5fa"/><stop offset="1" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="track" x1="80" y1="340" x2="432" y2="340" gradientUnits="userSpaceOnUse">
      <stop stop-color="#334155" stop-opacity="0"/><stop offset="0.5" stop-color="#475569"/><stop offset="1" stop-color="#334155" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="glow" cx="256" cy="260" r="180" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3b82f6" stop-opacity="0.35"/><stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)"/>
  <rect x="24" y="24" width="464" height="464" rx="96" stroke="#1e293b" stroke-width="2"/>
  <circle cx="256" cy="260" r="160" fill="url(#glow)"/>
  <g opacity="0.25" stroke="#60a5fa" stroke-width="3" stroke-linecap="round">
    <line x1="48" y1="210" x2="120" y2="210"/><line x1="32" y1="240" x2="108" y2="240"/><line x1="56" y1="270" x2="132" y2="270"/>
  </g>
  <path d="M72 352 C140 332, 220 368, 256 352 C292 336, 372 368, 440 352" stroke="url(#track)" stroke-width="6" stroke-linecap="round"/>
  <line x1="120" y1="352" x2="120" y2="368" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
  <line x1="256" y1="352" x2="256" y2="368" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
  <line x1="392" y1="352" x2="392" y2="368" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
  <g filter="url(#soft)">
    <path d="M96 268 C96 228, 128 196, 188 196 L320 196 C360 196, 392 214, 408 248 L416 268 L416 292 C416 312, 400 328, 376 328 L136 328 C112 328, 96 312, 96 292 Z" fill="url(#train)"/>
    <path d="M96 268 C96 238, 118 210, 156 202 L188 196 C148 214, 128 244, 124 268 Z" fill="url(#nose)"/>
    <rect x="168" y="218" width="200" height="36" rx="8" fill="#0f172a" opacity="0.45"/>
    <rect x="184" y="226" width="44" height="20" rx="4" fill="#bfdbfe" opacity="0.9"/>
    <rect x="236" y="226" width="44" height="20" rx="4" fill="#bfdbfe" opacity="0.75"/>
    <rect x="288" y="226" width="44" height="20" rx="4" fill="#bfdbfe" opacity="0.6"/>
    <circle cx="118" cy="258" r="10" fill="#fef08a"/><circle cx="118" cy="258" r="18" fill="#fef08a" opacity="0.25"/>
    <path d="M248 196 L256 168 L264 196" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <circle cx="392" cy="136" r="52" fill="#111827" stroke="#3b82f6" stroke-width="4"/>
  <circle cx="392" cy="136" r="40" fill="url(#train)" opacity="0.15"/>
  <text x="392" y="152" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="900" fill="#ffffff">Q</text>
  <path d="M340 108 L348 92 L356 108 L372 116 L356 124 L348 140 L340 124 L324 116 Z" fill="#fbbf24"/>
</svg>`;

const MASKABLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0a0e17"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="train" x1="120" y1="256" x2="392" y2="256" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563eb"/><stop offset="1" stop-color="#6366f1"/>
    </linearGradient>
    <linearGradient id="nose" x1="120" y1="230" x2="210" y2="290" gradientUnits="userSpaceOnUse">
      <stop stop-color="#60a5fa"/><stop offset="1" stop-color="#3b82f6"/>
    </linearGradient>
    <radialGradient id="glow" cx="256" cy="268" r="150" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3b82f6" stop-opacity="0.3"/><stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="512" height="512" fill="url(#bg)"/>
  <circle cx="256" cy="268" r="140" fill="url(#glow)"/>
  <path d="M108 348 C168 332, 220 360, 256 348 C292 336, 344 360, 404 348" stroke="#475569" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
  <line x1="156" y1="348" x2="156" y2="360" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
  <line x1="256" y1="348" x2="256" y2="360" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
  <line x1="356" y1="348" x2="356" y2="360" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
  <path d="M120 276 C120 240, 148 212, 200 212 L300 212 C334 212, 362 226, 376 252 L384 276 L384 296 C384 312, 370 326, 350 326 L154 326 C134 326, 120 312, 120 296 Z" fill="url(#train)"/>
  <path d="M120 276 C120 250, 138 226, 168 218 L200 212 C166 228, 148 252, 144 276 Z" fill="url(#nose)"/>
  <rect x="176" y="228" width="168" height="32" rx="6" fill="#0f172a" opacity="0.4"/>
  <rect x="190" y="234" width="36" height="18" rx="3" fill="#bfdbfe" opacity="0.85"/>
  <rect x="234" y="234" width="36" height="18" rx="3" fill="#bfdbfe" opacity="0.7"/>
  <rect x="278" y="234" width="36" height="18" rx="3" fill="#bfdbfe" opacity="0.55"/>
  <circle cx="138" cy="266" r="8" fill="#fef08a"/>
  <path d="M248 212 L256 188 L264 212" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="360" cy="168" r="44" fill="#111827" stroke="#3b82f6" stroke-width="3.5"/>
  <text x="360" y="182" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="900" fill="#ffffff">Q</text>
  <path d="M318 148 L324 136 L330 148 L342 154 L330 160 L324 172 L318 160 L306 154 Z" fill="#fbbf24"/>
</svg>`;

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <defs>
    <linearGradient id="train" x1="8" y1="60" x2="88" y2="60" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3b82f6"/><stop offset="1" stop-color="#6366f1"/>
    </linearGradient>
    <linearGradient id="ring" x1="76" y1="20" x2="108" y2="52" gradientUnits="userSpaceOnUse">
      <stop stop-color="#60a5fa"/><stop offset="1" stop-color="#818cf8"/>
    </linearGradient>
  </defs>
  <path d="M8 62 C8 46, 18 34, 34 34 L62 34 C72 34, 80 40, 84 50 L88 62 L88 72 C88 80, 82 86, 74 86 L26 86 C18 86, 12 80, 12 72 Z" fill="url(#train)"/>
  <path d="M8 62 C8 50, 16 40, 28 36 L34 34 C22 42, 14 52, 12 62 Z" fill="#60a5fa"/>
  <rect x="30" y="44" width="40" height="12" rx="3" fill="#0f172a" opacity="0.35"/>
  <rect x="36" y="47" width="10" height="6" rx="1.5" fill="#dbeafe"/>
  <rect x="50" y="47" width="10" height="6" rx="1.5" fill="#dbeafe" opacity="0.8"/>
  <circle cx="18" cy="58" r="4" fill="#fef08a"/>
  <line x1="4" y1="92" x2="92" y2="92" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
  <line x1="28" y1="92" x2="28" y2="98" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
  <line x1="56" y1="92" x2="56" y2="98" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
  <circle cx="96" cy="28" r="22" fill="#111827" stroke="url(#ring)" stroke-width="3"/>
  <text x="96" y="36" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="900" fill="#ffffff">Q</text>
</svg>`;

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="7" fill="#0a0e17"/>
  <path d="M4 18 C4 14, 7 11, 11 11 L19 11 C22 11, 24 13, 25 15 L26 18 L26 21 C26 23, 24 25, 22 25 L10 25 C8 25, 6 23, 6 21 Z" fill="#3b82f6"/>
  <circle cx="8" cy="17" r="2" fill="#fef08a"/>
  <circle cx="25" cy="8" r="5" fill="#111827" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="25" y="10.5" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" font-weight="900" fill="#fff">Q</text>
</svg>`;

const SPLASH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 844" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="390" y2="844" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0a0e17"/><stop offset="0.55" stop-color="#111827"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="train" x1="70" y1="420" x2="320" y2="420" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563eb"/><stop offset="1" stop-color="#6366f1"/>
    </linearGradient>
    <radialGradient id="glow" cx="195" cy="400" r="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3b82f6" stop-opacity="0.28"/><stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="title" x1="195" y1="520" x2="195" y2="580" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff"/><stop offset="1" stop-color="#60a5fa"/>
    </linearGradient>
  </defs>
  <rect width="390" height="844" fill="url(#bg)"/>
  <circle cx="195" cy="380" r="180" fill="url(#glow)"/>
  <g transform="translate(195 340)">
    <path d="M-110 28 C-110 -8, -78 -40, -18 -40 L114 -40 C154 -40, 186 -22, 202 12 L210 32 L210 56 C210 76, 194 92, 170 92 L-70 92 C-94 92, -110 76, -110 56 Z" fill="url(#train)"/>
    <path d="M-110 32 C-110 2, -88 -26, -50 -34 L-18 -40 C-58 -22, -78 8, -82 32 Z" fill="#60a5fa"/>
    <rect x="-38" y="-18" width="200" height="36" rx="8" fill="#0f172a" opacity="0.4"/>
    <rect x="-22" y="-10" width="44" height="20" rx="4" fill="#bfdbfe" opacity="0.9"/>
    <rect x="30" y="-10" width="44" height="20" rx="4" fill="#bfdbfe" opacity="0.75"/>
    <rect x="82" y="-10" width="44" height="20" rx="4" fill="#bfdbfe" opacity="0.6"/>
    <circle cx="-88" cy="22" r="10" fill="#fef08a"/>
    <path d="M42 -40 L50 -68 L58 -40" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="86" cy="-92" r="52" fill="#111827" stroke="#3b82f6" stroke-width="4"/>
    <text x="86" y="-76" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="900" fill="#ffffff">Q</text>
    <path d="M34 -120 L42 -136 L50 -120 L66 -112 L50 -104 L42 -88 L34 -104 L18 -112 Z" fill="#fbbf24"/>
    <path d="M-90 112 C-30 92, 50 128, 90 112" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
  </g>
  <text x="195" y="548" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="900" fill="url(#title)" letter-spacing="2">Densha Mania Quiz</text>
  <text x="195" y="588" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="15" fill="#94a3b8">Railway knowledge quiz</text>
  <rect x="95" y="640" width="200" height="4" rx="2" fill="#1e293b"/>
  <rect x="95" y="640" width="120" height="4" rx="2" fill="#3b82f6"/>
</svg>`;

async function svgToPng(svg, pngName, width, height) {
  await sharp(Buffer.from(svg, "utf8"), { density: 300 })
    .resize(width, height)
    .png()
    .toFile(join(iconsDir, pngName));
  console.log(`Created ${pngName} (${width}x${height})`);
}

await svgToPng(ICON_SVG, "icon-512.png", 512, 512);
await svgToPng(ICON_SVG, "icon-192.png", 192, 192);
await svgToPng(ICON_SVG, "apple-touch-icon.png", 180, 180);
await svgToPng(MASKABLE_SVG, "icon-maskable-512.png", 512, 512);
await svgToPng(LOGO_SVG, "logo.png", 256, 256);
await svgToPng(FAVICON_SVG, "favicon.png", 32, 32);
await svgToPng(SPLASH_SVG, "splash.png", 390, 844);

console.log("All PNG icons generated.");
