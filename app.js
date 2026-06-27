const games = [
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
    description: "気分や状況から、今飲む一杯を軽く決めてくれる診断ゲーム。",
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
    description: "お題や飲む人を一発で決める、迷ったときの定番ランダムゲーム。",
  },
  {
    title: "チンチロ",
    enabled: false,
    buttonText: "Coming soon",
    label: "dice",
    mark: "D",
    accent: "#dd4a3a",
    accentDark: "#9f2d22",
    status: "Coming soon",
    description: "サイコロの出目で盛り上がる、短時間で回しやすい勝負ゲーム。",
  },
  {
    title: "キングスカップ",
    enabled: false,
    buttonText: "Coming soon",
    label: "cards",
    mark: "K",
    accent: "#6d375f",
    accentDark: "#5b2c50",
    status: "Coming soon",
    description: "カードを引いてルール発動。大人数でも流れを作りやすい王道ゲーム。",
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
            <h3>${game.title}</h3>
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
