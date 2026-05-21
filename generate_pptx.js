const PptxGenJS = require("pptxgenjs");

const pres = new PptxGenJS();
pres.layout = "LAYOUT_16x9";
pres.title = "VibeCODE セミナー 実践編";

// Color palette
const RED = "c8211a";
const BLACK = "111111";
const WHITE = "FFFFFF";
const CREAM = "ede9e3";
const DARK = "0d0d0d";
const MUTED = "8a8580";
const SURFACE = "f5f2ee";

// Helpers
function makeShadow() {
  return { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 };
}

function addSlideChrome(slide, num, totalNum, label, dark) {
  // Top red bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.07,
    fill: { color: RED }, line: { color: RED }
  });
  // Left red bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.07, w: 0.04, h: 5.555,
    fill: { color: RED }, line: { color: RED }
  });
  // Slide number top-right
  slide.addText(`${String(num).padStart(2, "0")} / ${totalNum}`, {
    x: 7.8, y: 0.1, w: 2.1, h: 0.25,
    fontSize: 8, fontFace: "Courier New",
    color: dark ? "3a3a3a" : MUTED,
    align: "right", margin: 0
  });
  // Label top-left area
  if (label) {
    slide.addText(label, {
      x: 0.15, y: 0.1, w: 4, h: 0.25,
      fontSize: 8, fontFace: "Courier New",
      color: dark ? "3a3a3a" : RED,
      margin: 0
    });
  }
}

const TOTAL = 21;

// ─── S14: Cover ───────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: DARK };
  addSlideChrome(s, 1, TOTAL, "02 · 実践", true);

  // Ghost number
  s.addText("02", {
    x: -0.3, y: -0.4, w: 5, h: 4,
    fontSize: 180, fontFace: "Georgia",
    color: WHITE, transparency: 96,
    bold: true, margin: 0
  });

  s.addText("第2部", {
    x: 0.7, y: 1.5, w: 8.5, h: 0.6,
    fontSize: 20, fontFace: "Courier New",
    color: RED, bold: false,
    charSpacing: 6, margin: 0
  });
  s.addText("実　践．", {
    x: 0.6, y: 2.0, w: 9, h: 2.2,
    fontSize: 96, fontFace: "Georgia",
    color: WHITE, bold: true, margin: 0
  });
  s.addText("ツール、技術、そしてステップごとのウォークスルー。実際のアプリを作る。", {
    x: 0.7, y: 4.4, w: 8.5, h: 0.6,
    fontSize: 13, fontFace: "Georgia",
    color: "aaaaaa", italic: true, margin: 0
  });
}

// ─── S15: Section 1 Divider ───────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 2, TOTAL, "02 · ツール", false);

  s.addText("第2部 · セクション1", {
    x: 0.7, y: 1.2, w: 8.5, h: 0.4,
    fontSize: 10, fontFace: "Courier New",
    color: RED, charSpacing: 4, margin: 0
  });
  s.addText("ツール & 技術", {
    x: 0.6, y: 1.7, w: 9, h: 2,
    fontSize: 70, fontFace: "Georgia",
    color: BLACK, bold: true, margin: 0
  });
  s.addText("3つのもの。それだけで動くウェブアプリが作れる。", {
    x: 0.7, y: 3.8, w: 8.5, h: 0.6,
    fontSize: 14, fontFace: "Georgia",
    color: MUTED, italic: true, margin: 0
  });
}

// ─── S16: VSCode ──────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 3, TOTAL, "02 · 実践", false);

  s.addText("あなたの作業環境", {
    x: 0.7, y: 0.5, w: 8.5, h: 0.4,
    fontSize: 10, fontFace: "Courier New",
    color: RED, charSpacing: 4, margin: 0
  });
  s.addText("Visual Studio Code", {
    x: 0.6, y: 0.85, w: 9, h: 1.1,
    fontSize: 52, fontFace: "Georgia",
    color: BLACK, bold: true, margin: 0
  });

  // Left column
  s.addText("プロジェクトが生きるコードエディター。無料。どのPCでも動く。", {
    x: 0.7, y: 2.0, w: 4.5, h: 0.5,
    fontSize: 13, fontFace: "Georgia",
    color: BLACK, italic: true, margin: 0
  });
  s.addText([
    { text: "中にGitHub Copilotが組み込まれている。", options: { bullet: true, breakLine: true } }
  ], {
    x: 0.7, y: 2.55, w: 4.5, h: 0.5,
    fontSize: 12, fontFace: "Calibri",
    color: BLACK
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.2, w: 2.2, h: 0.42,
    fill: { color: DARK }, line: { color: DARK },
    shadow: makeShadow()
  });
  s.addText("VSCode · 無料 · code.visualstudio.com", {
    x: 0.75, y: 3.27, w: 2.1, h: 0.28,
    fontSize: 8, fontFace: "Courier New",
    color: WHITE, margin: 0
  });

  // Right: mock editor
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.1, w: 4.5, h: 4.1,
    fill: { color: "1e1e1e" }, line: { color: "333333" },
    shadow: makeShadow()
  });
  s.addText("Visual Studio Code — ShoppingApp", {
    x: 5.35, y: 1.15, w: 4.4, h: 0.3,
    fontSize: 8, fontFace: "Courier New", color: "cccccc", margin: 0
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.42, w: 4.5, h: 0.02,
    fill: { color: "444444" }, line: { color: "444444" }
  });
  const codeContent = [
    { text: "<!DOCTYPE html>", options: { breakLine: true, color: "569cd6" } },
    { text: '<html lang="ja">', options: { breakLine: true, color: "4ec9b0" } },
    { text: "  <head>", options: { breakLine: true, color: "4ec9b0" } },
    { text: '    <link rel="stylesheet"', options: { breakLine: true, color: "9cdcfe" } },
    { text: '  <body class="app">', options: { breakLine: true, color: "4ec9b0" } },
    { text: '    <div id="root"></div>', options: { breakLine: true, color: "ce9178" } },
    { text: "  </body>", options: { breakLine: true, color: "4ec9b0" } },
    { text: "</html>", options: { color: "4ec9b0" } }
  ];
  s.addText(codeContent, {
    x: 5.4, y: 1.5, w: 4.3, h: 2.8,
    fontSize: 9, fontFace: "Courier New", margin: 0
  });
  s.addText("⎇ main  ✓ 0 errors  HTML · UTF-8", {
    x: 5.35, y: 4.9, w: 4.4, h: 0.25,
    fontSize: 8, fontFace: "Courier New", color: "808080", margin: 0
  });
}

// ─── S16b: GitHub Copilot ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 4, TOTAL, "02 · 実践", false);

  s.addText("AIペアプログラマー", {
    x: 0.7, y: 0.5, w: 8.5, h: 0.4,
    fontSize: 10, fontFace: "Courier New",
    color: RED, charSpacing: 4, margin: 0
  });
  s.addText("GitHub Copilot", {
    x: 0.6, y: 0.85, w: 9, h: 1.1,
    fontSize: 52, fontFace: "Georgia",
    color: BLACK, bold: true, margin: 0
  });

  // Left
  s.addText("VSCodeに直接組み込まれたAIペアプログラマー。OpenAIとMicrosoftが提供。\n単なる行補完ではなく、プロジェクト全体を理解する。", {
    x: 0.7, y: 2.0, w: 4.5, h: 0.9,
    fontSize: 12, fontFace: "Calibri",
    color: BLACK, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.0, w: 4.4, h: 2.0,
    fill: { color: SURFACE }, line: { color: "d5d0c9" }
  });
  s.addText("なぜ「Copilot」？", {
    x: 0.85, y: 3.1, w: 4.1, h: 0.35,
    fontSize: 11, fontFace: "Georgia", color: RED, bold: true, margin: 0
  });
  s.addText("副操縦士は飛行機を操縦するのではなく、パイロットをサポートする。あなたが主導権を持つ。Copilotは定型コードを処理し、パターンを提案し、複数ファイルにまたがるタスクをこなし、10倍速で作業を進める手助けをする。", {
    x: 0.85, y: 3.5, w: 4.1, h: 1.4,
    fontSize: 11, fontFace: "Calibri", color: BLACK, margin: 0
  });

  // Right: chat mock
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 1.1, w: 4.4, h: 4.2,
    fill: { color: "1e1e2e" }, line: { color: "333355" },
    shadow: makeShadow()
  });
  s.addText("✦ GitHub Copilot  GPT-4o", {
    x: 5.5, y: 1.2, w: 4.2, h: 0.3,
    fontSize: 9, fontFace: "Courier New", color: "aaaacc", margin: 0
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 1.47, w: 4.4, h: 0.02,
    fill: { color: "333355" }, line: { color: "333355" }
  });
  s.addText("あなた", {
    x: 5.5, y: 1.6, w: 4, h: 0.25,
    fontSize: 9, fontFace: "Calibri", color: "8888ff", bold: true, margin: 0
  });
  s.addText("カートの合計金額を計算する関数を書いてください。", {
    x: 5.5, y: 1.85, w: 4.2, h: 0.4,
    fontSize: 10, fontFace: "Calibri", color: "cccccc", margin: 0
  });
  s.addText("✦ Copilot", {
    x: 5.5, y: 2.35, w: 4, h: 0.25,
    fontSize: 9, fontFace: "Calibri", color: "44dd88", bold: true, margin: 0
  });
  s.addText("了解です。こちらが関数です：", {
    x: 5.5, y: 2.6, w: 4.2, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: "cccccc", margin: 0
  });
  const copilotCode = [
    { text: "function ", options: { color: "569cd6" } },
    { text: "calculateTotal", options: { color: "dcdcaa" } },
    { text: "(cart) {\n  return cart.", options: { color: "cccccc" } },
    { text: "reduce", options: { color: "dcdcaa" } },
    { text: "((s, i) => s + i.price, 0);\n}", options: { color: "cccccc" } }
  ];
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 2.95, w: 4.1, h: 0.85,
    fill: { color: "2a2a3e" }, line: { color: "444466" }
  });
  s.addText(copilotCode, {
    x: 5.6, y: 3.0, w: 3.9, h: 0.75,
    fontSize: 9, fontFace: "Courier New", margin: 0
  });
  s.addText("Array.reduce()を使って全商品の価格を合計します。", {
    x: 5.5, y: 3.9, w: 4.2, h: 0.4,
    fontSize: 10, fontFace: "Calibri", color: "aaaaaa", italic: true, margin: 0
  });
}

// ─── S17: 3 Modes ─────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 5, TOTAL, "02 · 実践", false);

  s.addText("GitHub Copilot — AIアシスタント", {
    x: 0.7, y: 0.5, w: 8.5, h: 0.4,
    fontSize: 10, fontFace: "Courier New",
    color: RED, charSpacing: 3, margin: 0
  });
  s.addText("3つのモード", {
    x: 0.6, y: 0.85, w: 9, h: 1,
    fontSize: 60, fontFace: "Georgia",
    color: BLACK, bold: true, margin: 0
  });

  const modes = [
    { num: "01", title: "質問（Ask）", desc: "コードについての質問。理解。提案。概念の学習。" },
    { num: "02", title: "編集（Edit）", desc: "コードのリファクタリング。新機能の追加。既存ファイルの改善。" },
    { num: "03", title: "エージェント（Agent）", desc: "自律的な複数ステップのタスク。目標を与えれば、ステップを自力で進める。", main: true }
  ];

  modes.forEach((m, i) => {
    const x = 0.6 + i * 3.1;
    const bg = m.main ? DARK : SURFACE;
    const tc = m.main ? WHITE : BLACK;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.9, w: 2.85, h: 3.3,
      fill: { color: bg }, line: { color: m.main ? DARK : "d5d0c9" },
      shadow: makeShadow()
    });
    s.addText(`モード · ${m.num}`, {
      x: x + 0.15, y: 2.05, w: 2.55, h: 0.3,
      fontSize: 8, fontFace: "Courier New", color: m.main ? RED : MUTED,
      charSpacing: 2, margin: 0
    });
    s.addText(m.title, {
      x: x + 0.15, y: 2.35, w: 2.55, h: 0.6,
      fontSize: 18, fontFace: "Georgia", color: tc,
      bold: true, margin: 0
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: 3.0, w: 0.3, h: 0.04,
      fill: { color: RED }, line: { color: RED }
    });
    s.addText(m.desc, {
      x: x + 0.15, y: 3.15, w: 2.55, h: 1.8,
      fontSize: 11, fontFace: "Calibri", color: m.main ? "cccccc" : BLACK,
      margin: 0
    });
    if (m.main) {
      s.addText("· メイン", {
        x: x + 0.15, y: 4.85, w: 2.55, h: 0.25,
        fontSize: 8, fontFace: "Courier New", color: RED, margin: 0
      });
    }
  });
}

// ─── S18: HTML / CSS / JS ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 6, TOTAL, "02 · 実践", false);

  s.addText("Webの構成要素", {
    x: 0.7, y: 0.45, w: 8.5, h: 0.4,
    fontSize: 10, fontFace: "Courier New",
    color: RED, charSpacing: 4, margin: 0
  });
  s.addText("3つのファイル", {
    x: 0.6, y: 0.8, w: 9, h: 0.9,
    fontSize: 50, fontFace: "Georgia",
    color: BLACK, bold: true, margin: 0
  });

  const cols = [
    {
      num: "01", label: "HTML", sub: "ファイル", tagline: "骨格。",
      body: "ページのすべての骨格 — 見出し、ボタン、フォーム、カート、商品グリッド。ブラウザに「何が、どこに存在するか」を伝える。",
      code: "// index.html\n<main>\n  <h1>ショップ</h1>\n  <section id=\"cart\">\n    …\n  </section>\n</main>"
    },
    {
      num: "02", label: "CSS", sub: "ファイル", tagline: "服と化粧。",
      body: "色・フォント・間隔・レイアウト、そしてスマホでの表示方法。骨格を「使いたいもの」に変える。",
      code: "/* styles.css */\n.card {\n  padding: 24px;\n  border: 2px solid\n    #0E0E0E;\n}"
    },
    {
      num: "03", label: "JS", sub: "ファイル", tagline: "筋肉と脳。",
      body: "クリックで動くもの。カートの計算、ページ遷移、商品フィルター、決済ロジック — すべての動く部品。",
      code: "// app.js\nfunction addToCart(id) {\n  cart.push(id);\n  renderCart();\n}"
    }
  ];

  cols.forEach((c, i) => {
    const x = 0.5 + i * 3.15;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.75, w: 2.95, h: 3.7,
      fill: { color: SURFACE }, line: { color: "d5d0c9" },
      shadow: makeShadow()
    });
    s.addText(`${c.label}  ファイル · ${c.num}`, {
      x: x + 0.15, y: 1.9, w: 2.65, h: 0.3,
      fontSize: 8, fontFace: "Courier New", color: RED,
      charSpacing: 2, margin: 0
    });
    s.addText(c.tagline, {
      x: x + 0.15, y: 2.2, w: 2.65, h: 0.45,
      fontSize: 22, fontFace: "Georgia", color: BLACK,
      bold: true, margin: 0
    });
    s.addText(c.body, {
      x: x + 0.15, y: 2.7, w: 2.65, h: 1.0,
      fontSize: 11, fontFace: "Calibri", color: BLACK, margin: 0
    });
    // Code block
    s.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.1, y: 3.75, w: 2.75, h: 1.5,
      fill: { color: "1e1e1e" }, line: { color: "333333" }
    });
    s.addText(c.code, {
      x: x + 0.2, y: 3.82, w: 2.55, h: 1.35,
      fontSize: 8.5, fontFace: "Courier New", color: "9cdcfe",
      margin: 0
    });
  });
}

// ─── S18a: VSCode Operations ──────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 7, TOTAL, "02 · VSCode操作", false);

  s.addText("VSCode の基本操作", {
    x: 0.7, y: 0.5, w: 8.5, h: 0.4,
    fontSize: 10, fontFace: "Courier New",
    color: RED, charSpacing: 4, margin: 0
  });
  s.addText("エディターを使いこなす", {
    x: 0.6, y: 0.85, w: 9, h: 1,
    fontSize: 52, fontFace: "Georgia",
    color: BLACK, bold: true, margin: 0
  });

  const ops = [
    { key: "Ctrl+Shift+P", desc: "コマンドパレットを開く" },
    { key: "Ctrl+`", desc: "ターミナルを開く" },
    { key: "Ctrl+Shift+E", desc: "エクスプローラーを表示" },
    { key: "Ctrl+Shift+X", desc: "拡張機能マーケットプレイス" },
    { key: "Alt+Shift+F", desc: "コードを自動整形" },
    { key: "Ctrl+/", desc: "行をコメントアウト" }
  ];

  ops.forEach((op, i) => {
    const col = i < 3 ? 0 : 1;
    const row = i % 3;
    const x = 0.7 + col * 4.6;
    const y = 2.0 + row * 0.85;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 4.3, h: 0.65,
      fill: { color: SURFACE }, line: { color: "d5d0c9" }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 0.05, h: 0.65,
      fill: { color: RED }, line: { color: RED }
    });
    s.addText(op.key, {
      x: x + 0.2, y: y + 0.07, w: 2, h: 0.28,
      fontSize: 11, fontFace: "Courier New", color: RED, bold: true, margin: 0
    });
    s.addText(op.desc, {
      x: x + 0.2, y: y + 0.35, w: 4, h: 0.25,
      fontSize: 11, fontFace: "Calibri", color: BLACK, margin: 0
    });
  });
}

// ─── S18b: Copilot Operations ─────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 8, TOTAL, "02 · Copilot操作", false);

  s.addText("Copilot の操作方法", {
    x: 0.7, y: 0.5, w: 8.5, h: 0.4,
    fontSize: 10, fontFace: "Courier New",
    color: RED, charSpacing: 4, margin: 0
  });
  s.addText("AIと対話する", {
    x: 0.6, y: 0.85, w: 9, h: 1,
    fontSize: 52, fontFace: "Georgia",
    color: BLACK, bold: true, margin: 0
  });

  const tips = [
    { label: "チャットを開く", detail: "Ctrl+Alt+I でCopilotチャットパネルを開く" },
    { label: "モード切替", detail: "「Ask」「Edit」「Agent」をドロップダウンで選択する" },
    { label: "ファイルを参照", detail: "@workspace や #file でコンテキストを追加する" },
    { label: "インライン補完", detail: "Tab で提案を承認、Esc でキャンセル" },
    { label: "具体的なプロンプト", detail: "「〇〇を××して」と具体的に指示するほど精度が上がる" },
    { label: "繰り返し改善", detail: "一度で完璧でなくていい。対話しながら改善する" }
  ];

  tips.forEach((t, i) => {
    const col = i < 3 ? 0 : 1;
    const row = i % 3;
    const x = 0.7 + col * 4.6;
    const y = 2.0 + row * 0.85;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 4.3, h: 0.65,
      fill: { color: SURFACE }, line: { color: "d5d0c9" }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 0.05, h: 0.65,
      fill: { color: RED }, line: { color: RED }
    });
    s.addText(t.label, {
      x: x + 0.2, y: y + 0.07, w: 4, h: 0.28,
      fontSize: 11, fontFace: "Calibri", color: RED, bold: true, margin: 0
    });
    s.addText(t.detail, {
      x: x + 0.2, y: y + 0.35, w: 4, h: 0.25,
      fontSize: 11, fontFace: "Calibri", color: BLACK, margin: 0
    });
  });
}

// ─── S19: Section 2 Divider ───────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: DARK };
  addSlideChrome(s, 9, TOTAL, "02 · チュートリアル", true);

  s.addText("第2部 · セクション2", {
    x: 0.7, y: 1.2, w: 8.5, h: 0.4,
    fontSize: 10, fontFace: "Courier New",
    color: RED, charSpacing: 4, margin: 0
  });
  s.addText("ステップごとの\nチュートリアル\nウォークスルー", {
    x: 0.6, y: 1.65, w: 9, h: 2.8,
    fontSize: 50, fontFace: "Georgia",
    color: WHITE, bold: true, margin: 0
  });
  s.addText("13のステップ。GitHub Copilotを使って本物のショッピングアプリを作る。", {
    x: 0.7, y: 4.6, w: 8.5, h: 0.5,
    fontSize: 13, fontFace: "Georgia",
    color: "aaaaaa", italic: true, margin: 0
  });
}

// ─── Helper: Step slides ──────────────────────────────────────────────────────
function addStepSlide(slideNum, stepNum, stepLabel, title, bodyLines, actionItems) {
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, slideNum, TOTAL, `ステップ${stepLabel} · ${title.slice(0, 10)}`, false);

  // Big step number ghost
  s.addText(String(stepNum).padStart(2, "0"), {
    x: 6.5, y: -0.3, w: 4, h: 3.5,
    fontSize: 160, fontFace: "Georgia",
    color: BLACK, transparency: 92, bold: true, margin: 0
  });

  s.addText(`ステップ${stepLabel}`, {
    x: 0.7, y: 0.5, w: 8.5, h: 0.35,
    fontSize: 9, fontFace: "Courier New",
    color: RED, charSpacing: 4, margin: 0
  });
  s.addText(title, {
    x: 0.6, y: 0.85, w: 6.5, h: 1.2,
    fontSize: 38, fontFace: "Georgia",
    color: BLACK, bold: true, margin: 0
  });

  // Action items
  let yPos = 2.15;
  actionItems.forEach((item) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: yPos, w: 0.04, h: 0.42,
      fill: { color: RED }, line: { color: RED }
    });
    s.addText(item, {
      x: 0.9, y: yPos, w: 5.8, h: 0.42,
      fontSize: 12, fontFace: "Calibri", color: BLACK, valign: "middle", margin: 0
    });
    yPos += 0.52;
  });

  // Body note
  if (bodyLines) {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: 4.6, w: 8.5, h: 0.02,
      fill: { color: "d5d0c9" }, line: { color: "d5d0c9" }
    });
    s.addText(bodyLines, {
      x: 0.7, y: 4.7, w: 8.5, h: 0.5,
      fontSize: 11, fontFace: "Georgia", color: MUTED, italic: true, margin: 0
    });
  }
  return s;
}

// ─── S20: Step 1 ──────────────────────────────────────────────────────────────
addStepSlide(10, 1, "01", "ワークスペース\nフォルダを作成する",
  "このフォルダはAIエージェントのホームになる。既存のgitリポジトリの外に置くこと。",
  [
    "ファイル › ワークスペースにフォルダを追加",
    '名前を「VibeCoding-PrototypeApp」に設定',
    "追加 をクリック"
  ]
);

// ─── S21: Step 2-3 ────────────────────────────────────────────────────────────
addStepSlide(11, 2, "02–03", "CopilotでPRDを\n作成する",
  "開発を始める前にAIをブリーフィングする。明確なブリーフ＝より良いアプリ。",
  [
    "質問モード（GPT-4.1）でPRDに必要なセクションを尋ねる",
    "アプリの詳細を入力する",
    "エージェントモードに切り替え",
    "VibeCodingPRD.md として保存する"
  ]
);

// ─── S22: Step 4 ──────────────────────────────────────────────────────────────
addStepSlide(12, 4, "04", "ワイヤーフレーム\nを生成する",
  "テキストベースのUIスケッチ。見た目ではなく、構造が大事。AIは何を作るかを正確に把握できる。",
  [
    "エージェントモードを使用",
    "PRDに基づくローファイワイヤーフレームを依頼する",
    ".txtファイルとして保存（ページごとに1ファイル）"
  ]
);

// ─── S23: Step 5 ──────────────────────────────────────────────────────────────
addStepSlide(13, 5, "05", "ShoppingAppフォルダを\n作成する",
  "エージェント専用の空スペース。計画ファイルとアプリファイルを分けておく。",
  [
    "エクスプローラーパネルを開く",
    'VibeCoding-PrototypeApp 内に新しいフォルダを作成',
    '名前を「ShoppingApp」に設定',
    "空のままにしておく"
  ]
);

// ─── S24: Step 6 ──────────────────────────────────────────────────────────────
addStepSlide(14, 6, "06", "ファイルをチャット\nコンテキストに追加",
  "開始前にAIにメモを渡す。これをしないと、AIはあなたの要件を知らない。",
  [
    "コンテキスト追加ボタンをクリック",
    "PRD ファイルを選択",
    "5つのワイヤーフレーム .txt ファイルを選択",
    "ShoppingApp フォルダを選択"
  ]
);

// ─── S25: Step 7 ──────────────────────────────────────────────────────────────
addStepSlide(15, 7, "07", "エージェントで\nアプリを開発する",
  "エージェントがindex.html、styles.css、app.js、copilot-instructions.mdを自律的に生成する。",
  [
    "エージェントモードを選択",
    '「PRDとワイヤーフレームを使ってShoppingAppフォルダにプロトタイプショッピングアプリを作成してください」と入力',
    "監視する — 求められたら Run をクリック"
  ]
);

// ─── S26: Step 8 ──────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 16, TOTAL, "ステップ08 · テスト", false);

  s.addText("ステップ08", {
    x: 0.7, y: 0.5, w: 8.5, h: 0.35,
    fontSize: 9, fontFace: "Courier New", color: RED, charSpacing: 4, margin: 0
  });
  s.addText("アプリを実行して\nテストする", {
    x: 0.6, y: 0.85, w: 6.5, h: 1.2,
    fontSize: 38, fontFace: "Georgia", color: BLACK, bold: true, margin: 0
  });

  // Steps
  const steps = [
    "index.html を開く",
    "実行 › デバッグなしで実行",
    "ブラウザでテスト"
  ];
  steps.forEach((st, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: 2.15 + i * 0.52, w: 0.04, h: 0.42,
      fill: { color: RED }, line: { color: RED }
    });
    s.addText(st, {
      x: 0.9, y: 2.15 + i * 0.52, w: 5.8, h: 0.42,
      fontSize: 12, fontFace: "Calibri", color: BLACK, valign: "middle", margin: 0
    });
  });

  // Checklist
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.0, y: 1.8, w: 3.8, h: 3.4,
    fill: { color: SURFACE }, line: { color: "d5d0c9" },
    shadow: makeShadow()
  });
  const checks = [
    "絵文字と価格付きの10種類の果物商品を閲覧できるか",
    "商品詳細を表示・カートに追加できるか",
    "左のナビバーで4つのページを移動できるか",
    "ウィンドウサイズを変更 — レイアウトは適応するか？"
  ];
  checks.forEach((c, i) => {
    s.addText(`✓  ${c}`, {
      x: 6.15, y: 2.0 + i * 0.72, w: 3.5, h: 0.55,
      fontSize: 10, fontFace: "Calibri", color: BLACK, margin: 0
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.6, w: 8.5, h: 0.02,
    fill: { color: "d5d0c9" }, line: { color: "d5d0c9" }
  });
}

// ─── S27: Step 9 ──────────────────────────────────────────────────────────────
addStepSlide(17, 9, "09", "アプリを繰り返し\n改善する",
  "プロンプトが具体的なほど、修正の精度が上がる。例：「2つのボタンをもっと離して」。",
  [
    "自分でアプリを使う",
    "改善点を見つける",
    "エージェントモードで具体的なプロンプトを書く",
    "結果を確認・ブラウザでテスト",
    "繰り返す"
  ]
);

// ─── S28: Step 10 ─────────────────────────────────────────────────────────────
addStepSlide(18, 10, "10", "ワークスペースを\n保存する",
  "同じフォルダ構造と設定で再度開ける。プロジェクトが持ち運び可能になる。",
  [
    "ファイル › ワークスペースに名前を付けて保存",
    '「VibeCoding-PrototypeApp.code-workspace」として保存',
    "プロジェクトフォルダ内に保存する"
  ]
);

// ─── S28aa: Workflow Pattern ──────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 19, TOTAL, "ワークフローパターン", false);

  s.addText("このパターンを覚えよう", {
    x: 0.7, y: 0.5, w: 8.5, h: 0.35,
    fontSize: 9, fontFace: "Courier New", color: RED, charSpacing: 4, margin: 0
  });
  s.addText("ワークフロー サイクル", {
    x: 0.6, y: 0.85, w: 9, h: 0.9,
    fontSize: 48, fontFace: "Georgia", color: BLACK, bold: true, margin: 0
  });

  const cycle = [
    { num: "1", mode: "Ask / Plan Mode", action: "構造を計画する", detail: "Copilotに何が必要？", dark: false },
    { num: "2", mode: "Agent Mode", action: "ファイルを作成する", detail: "Copilotで実行", dark: true },
    { num: "3", mode: "Ask / Plan Mode", action: "改善を計画する", detail: "何を改善する？", dark: false },
    { num: "4", mode: "Agent Mode", action: "実行して改善する", detail: "サイクルを繰り返す", dark: true }
  ];

  cycle.forEach((c, i) => {
    const x = 0.4 + i * 2.35;
    const bg = c.dark ? DARK : SURFACE;
    const tc = c.dark ? WHITE : BLACK;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.9, w: 2.2, h: 3.25,
      fill: { color: bg }, line: { color: c.dark ? DARK : "d5d0c9" },
      shadow: makeShadow()
    });
    s.addText(c.num, {
      x: x + 0.12, y: 2.0, w: 0.5, h: 0.55,
      fontSize: 32, fontFace: "Georgia", color: RED, bold: true, margin: 0
    });
    s.addText(c.mode, {
      x: x + 0.12, y: 2.55, w: 1.95, h: 0.35,
      fontSize: 9, fontFace: "Courier New",
      color: c.dark ? RED : MUTED, margin: 0
    });
    s.addText(c.action, {
      x: x + 0.12, y: 2.9, w: 1.95, h: 0.55,
      fontSize: 14, fontFace: "Georgia", color: tc, bold: true, margin: 0
    });
    s.addText(c.detail, {
      x: x + 0.12, y: 3.5, w: 1.95, h: 0.4,
      fontSize: 11, fontFace: "Calibri",
      color: c.dark ? "aaaaaa" : MUTED, italic: true, margin: 0
    });

    // Arrow between cards (not after last)
    if (i < 3) {
      s.addText("→", {
        x: x + 2.2, y: 3.2, w: 0.15, h: 0.3,
        fontSize: 14, fontFace: "Calibri", color: RED, align: "center", margin: 0
      });
    }
  });

  s.addText("↻ サイクルを繰り返す", {
    x: 3.5, y: 5.1, w: 3.5, h: 0.35,
    fontSize: 11, fontFace: "Courier New", color: RED, align: "center", margin: 0
  });
}

// ─── S28b: Collaboration Roles ────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  addSlideChrome(s, 20, TOTAL, "ステップ13 · 協働", false);

  s.addText("ステップ13 · クラスメートと協力する", {
    x: 0.7, y: 0.5, w: 8.5, h: 0.35,
    fontSize: 9, fontFace: "Courier New", color: RED, charSpacing: 2, margin: 0
  });
  s.addText("2つの役割、\n1つのアプリ", {
    x: 0.6, y: 0.85, w: 9, h: 1.4,
    fontSize: 50, fontFace: "Georgia", color: BLACK, bold: true, margin: 0
  });

  // Role A
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.4, w: 4.35, h: 2.9,
    fill: { color: DARK }, line: { color: DARK },
    shadow: makeShadow()
  });
  s.addText("役割A · プロダクトマネージャー", {
    x: 0.65, y: 2.55, w: 4.05, h: 0.3,
    fontSize: 9, fontFace: "Courier New", color: RED, margin: 0
  });
  s.addText("SDD重視", {
    x: 0.65, y: 2.85, w: 4.05, h: 0.45,
    fontSize: 22, fontFace: "Georgia", color: WHITE, bold: true, margin: 0
  });
  s.addText("プロダクト要件定義書を担当する。AIが生成するすべての仕様と計画をレビューする。何を作り、何を変えるかを決める。", {
    x: 0.65, y: 3.35, w: 4.05, h: 1.7,
    fontSize: 12, fontFace: "Calibri", color: "cccccc", margin: 0
  });

  // Role B
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.15, y: 2.4, w: 4.35, h: 2.9,
    fill: { color: SURFACE }, line: { color: "d5d0c9" },
    shadow: makeShadow()
  });
  s.addText("役割B · QAテスター", {
    x: 5.3, y: 2.55, w: 4.05, h: 0.3,
    fontSize: 9, fontFace: "Courier New", color: RED, margin: 0
  });
  s.addText("TDD重視", {
    x: 5.3, y: 2.85, w: 4.05, h: 0.45,
    fontSize: 22, fontFace: "Georgia", color: BLACK, bold: true, margin: 0
  });
  s.addText("品質を担当する。アプリのバグを探す。AIが診断・修正するための的確なプロンプトを書く。実際に動くことを確認する。", {
    x: 5.3, y: 3.35, w: 4.05, h: 1.7,
    fontSize: 12, fontFace: "Calibri", color: BLACK, margin: 0
  });

  s.addText("一人が仕様を定め、一人がバグを見つける。二人で、動くものを届ける。", {
    x: 0.7, y: 5.28, w: 8.5, h: 0.25,
    fontSize: 11, fontFace: "Georgia", color: MUTED, italic: true, align: "center", margin: 0
  });
}

// ─── S29: Summary ─────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: DARK };
  addSlideChrome(s, 21, TOTAL, "VibeCODE · セミナー まとめ", true);

  s.addText("まとめ", {
    x: 0.7, y: 1.0, w: 8.5, h: 0.45,
    fontSize: 11, fontFace: "Courier New",
    color: RED, charSpacing: 6, margin: 0
  });
  s.addText("最も\n大切な\nスキル．", {
    x: 0.6, y: 1.45, w: 9, h: 2.8,
    fontSize: 66, fontFace: "Georgia",
    color: WHITE, bold: true, margin: 0
  });
  s.addText("コードではなく、明確で具体的なプロンプトを書く。", {
    x: 0.7, y: 4.35, w: 8.5, h: 0.55,
    fontSize: 16, fontFace: "Georgia",
    color: "dddddd", italic: true, margin: 0
  });
  s.addText("VibeCODE セミナー · AI × バイブコーディング · 2026年", {
    x: 0.7, y: 5.0, w: 8.5, h: 0.3,
    fontSize: 9, fontFace: "Courier New",
    color: "444444", charSpacing: 2, margin: 0
  });
}

// ─── Write file ────────────────────────────────────────────────────────────────
pres.writeFile({ fileName: "vibecode-seminar_part2.pptx" })
  .then(() => console.log("Done: vibecode-seminar_part2.pptx"))
  .catch(e => { console.error(e); process.exit(1); });
