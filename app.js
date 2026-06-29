const games = [
  {
    title: "古今東西ゲームルーレット",
    titleHtml: "古今東西<br />ゲームルーレット",
    url: "https://brilliant-wisp-4ca35a.netlify.app/",
    enabled: true,
    buttonText: "ゲームを開く",
    external: true,
    label: "word",
    mark: "W",
    accent: "#e06f39",
    accentDark: "#9b4824",
    status: "公開中",
    description: "お題を回して言葉をつなぐゲーム。",
  },
  {
    title: "お酒判断ゲーム",
    url: "https://eclectic-centaur-efe8f8.netlify.app/",
    enabled: true,
    buttonText: "ゲームを開く",
    external: true,
    label: "judge",
    mark: "J",
    accent: "#0f6f70",
    accentDark: "#0f5d5f",
    status: "公開中",
    description: "今の一杯をサクッと決める診断ゲーム。",
  },
  {
    title: "お酒ルーレット",
    url: "https://idyllic-kleicha-262234.netlify.app/",
    enabled: true,
    buttonText: "ゲームを開く",
    external: true,
    label: "random",
    mark: "R",
    accent: "#f5ad37",
    accentDark: "#8a5200",
    status: "公開中",
    description: "お題や飲む人を一発で決めるゲーム。",
  },
  {
    title: "チンチロ",
    url: "https://lovely-bonbon-b890b5.netlify.app/",
    enabled: true,
    buttonText: "ゲームを開く",
    external: true,
    label: "dice",
    mark: "D",
    accent: "#dd4a3a",
    accentDark: "#9f2d22",
    status: "公開中",
    description: "サイコロの出目で盛り上がる勝負ゲーム。",
  },
  {
    title: "キングスカップ",
    url: "https://clinquant-crisp-ae30f2.netlify.app/",
    enabled: true,
    buttonText: "ゲームを開く",
    external: true,
    label: "cards",
    mark: "K",
    accent: "#6d375f",
    accentDark: "#5b2c50",
    status: "公開中",
    description: "カードでルール発動。大人数で遊べるゲーム。",
  },
  {
    title: "2~12",
    url: "https://meek-banoffee-4ee6b4.netlify.app/",
    enabled: true,
    buttonText: "ゲームを開く",
    external: true,
    label: "number",
    mark: "12",
    accent: "#3478c6",
    accentDark: "#285f9d",
    status: "公開中",
    description: "数字でテンポよく遊ぶゲーム。",
  },
  {
    title: "High&Low",
    url: "https://high-low-6oc.pages.dev/",
    enabled: true,
    buttonText: "ゲームを開く",
    external: true,
    label: "high low",
    mark: "HL",
    accent: "#222f7a",
    accentDark: "#1f2763",
    status: "公開中",
    description: "次のカードが上か下かを当てるゲーム。",
  },
  {
    title: "王様ゲーム",
    enabled: false,
    buttonText: "Coming soon",
    label: "king",
    mark: "O",
    accent: "#b88a2d",
    accentDark: "#7e5d19",
    status: "Coming soon",
    description: "指令カードで場を動かす定番ゲーム。",
  },
  {
    title: "港区女子ゲーム",
    enabled: false,
    buttonText: "Coming soon",
    label: "minato",
    mark: "M",
    accent: "#d85886",
    accentDark: "#9b2f5a",
    status: "Coming soon",
    description: "会話とノリで盛り上げるパーティーゲーム。",
  },
];

const grid = document.querySelector("#gameGrid");

grid.innerHTML = games
  .map(
    (game) => {
      const button = game.enabled
        ? `<a class="game-card__link" href="${game.url}" aria-label="${game.title}を開く"${game.external ? ' rel="noopener"' : ""}>${game.buttonText}</a>`
        : `<button class="game-card__link game-card__link--disabled" type="button" disabled aria-label="${game.title}は準備中です">${game.buttonText}</button>`;

      return `
      <article class="game-card" style="--accent: ${game.accent}; --accent-dark: ${game.accentDark}">
        <div class="game-card__top">
          <div>
            <p class="game-card__meta">${game.label}</p>
            <h3>${game.titleHtml || game.title}</h3>
            <p>${game.description}</p>
          </div>
          <span class="game-card__badge" aria-hidden="true">${game.mark}</span>
        </div>
        <div>
          <p class="game-card__status">${game.status}</p>
          ${button}
        </div>
      </article>
    `;
    }
  )
  .join("");
