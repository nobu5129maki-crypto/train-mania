let deferredPrompt = null;

export function initPWA() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    });
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallBanner();
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    hideInstallBanner();
  });

  if (isIOS() && !isStandalone()) {
    showIOSHint();
  }
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function showInstallBanner() {
  if (document.getElementById("install-banner")) return;

  const banner = document.createElement("div");
  banner.id = "install-banner";
  banner.className = "install-banner";
  banner.innerHTML = `
    <img src="/icons/logo.svg" alt="" class="install-banner-icon" width="40" height="40" />
    <div class="install-banner-text">
      <strong>アプリをインストール</strong>
      <span>ホーム画面からすぐにプレイ</span>
    </div>
    <button type="button" class="install-banner-btn" id="btn-install">追加</button>
    <button type="button" class="install-banner-close" id="btn-install-close" aria-label="閉じる">×</button>
  `;

  document.body.appendChild(banner);

  document.getElementById("btn-install")?.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    hideInstallBanner();
  });

  document.getElementById("btn-install-close")?.addEventListener("click", hideInstallBanner);
}

function showIOSHint() {
  if (localStorage.getItem("ios-install-dismissed")) return;
  if (document.getElementById("ios-install-hint")) return;

  const hint = document.createElement("div");
  hint.id = "ios-install-hint";
  hint.className = "ios-install-hint";
  hint.innerHTML = `
    <img src="/icons/logo.svg" alt="" width="32" height="32" />
    <p><strong>ホーム画面に追加</strong> — 共有ボタン <span class="ios-share">⎙</span> から「ホーム画面に追加」</p>
    <button type="button" class="ios-hint-close" id="btn-ios-close" aria-label="閉じる">×</button>
  `;

  document.body.appendChild(hint);

  document.getElementById("btn-ios-close")?.addEventListener("click", () => {
    localStorage.setItem("ios-install-dismissed", "1");
    hint.remove();
  });
}

function hideInstallBanner() {
  document.getElementById("install-banner")?.remove();
}
