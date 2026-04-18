// ===== CONFIG GLOBAL =====
const telegramLink = CONFIG.TELEGRAM_LINK;


// ===== ATUALIZA LINKS =====
document.querySelectorAll('.telegram-link').forEach(link => {
  link.href = telegramLink;
});


// ===== CONTADOR ONLINE (REALISTA) =====
function updateOnlineCount() {
  const el = document.getElementById('online-count');
  if (!el) return;

  let base = 95;
  let variation = Math.floor(Math.random() * 30);

  el.textContent = base + variation;
}

setInterval(updateOnlineCount, 2000);
updateOnlineCount();


// // ===== FEED DINÂMICO (PROVA SOCIAL) =====
// const names = [
//   "João", "Maria", "Carlos", "Ana", "Pedro",
//   "Lucas", "Fernanda", "Bruno", "Juliana", "Rafael"
// ];

function createFeedNotification() {
  const feed = document.getElementById('live-feed');
  if (!feed) return;

  const name = names[Math.floor(Math.random() * names.length)];

  const div = document.createElement('div');
  div.textContent = `${name} entrou no grupo agora`;

  div.style.background = "#020617";
  div.style.padding = "8px 12px";
  div.style.marginTop = "5px";
  div.style.borderRadius = "5px";

  feed.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 5000);
}

// dispara a cada 4s
setInterval(createFeedNotification, 4000);


// ===== ANIMAÇÃO AO ROLAR =====
const elements = document.querySelectorAll('.box');

function revealOnScroll() {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// ===== TRACKING PIXEL =====
document.querySelectorAll('.telegram-link').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("Clique no Telegram");

    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }
  });
});


// ===== POPUP (SUAVE, SEM SER CHATO) =====
setTimeout(() => {
  const popup = document.createElement('div');

  // popup.innerHTML = `
  //   <div style="
  //     position:fixed;
  //     bottom:100px;
  //     right:20px;
  //     background:#1e293b;
  //     padding:15px;
  //     border-radius:10px;
  //     box-shadow:0 0 10px rgba(0,0,0,0.5);
  //     max-width:220px;
  //     z-index:999;
  //   ">
  //     <p style="font-size:13px;">Entre no grupo e veja os sinais ao vivo</p>
  //     <a href="${telegramLink}" target="_blank" style="
  //       display:block;
  //       margin-top:10px;
  //       background:#22c55e;
  //       padding:10px;
  //       text-align:center;
  //       border-radius:5px;
  //       text-decoration:none;
  //       color:#000;
  //       font-weight:bold;
  //     ">Entrar</a>
  //   </div>
  // `;

  document.body.appendChild(popup);
}, 6000);