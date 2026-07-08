# 你是哪種內耗戀愛人格：MVP

這是一個純靜態心理測驗網站 MVP，可以直接打開 `index.html`，也可以部署到 Vercel、Netlify、GitHub Pages 或任何靜態網站服務。

## 內容

- 首頁
- 12 題戀愛情境測驗
- 8 種人格結果
- 前端計分邏輯
- 結果頁
- 分數分布
- 重新測驗
- 複製分享文案
- 下載結果圖

## 檔案結構

```text
love-quiz-mvp/
  index.html
  styles.css
  app.js
  assets/
    relationship-mood.png
```

## 本機預覽

最簡單方式是直接打開：

```text
index.html
```

如果要用本機網址測試：

```bash
python -m http.server 8787 --bind 127.0.0.1
```

然後開啟：

```text
http://127.0.0.1:8787/
```

## 修改內容

主要內容都在 `app.js`：

- `personalityTypes`：8 種人格結果文案
- `quizQuestions`：12 題題目、選項、計分規則

主要視覺樣式在 `styles.css`。

## 部署

### Vercel

1. 建立一個新的 GitHub repo。
2. 把 `love-quiz-mvp` 內的檔案放進 repo。
3. 到 Vercel 匯入 repo。
4. Framework Preset 選 `Other` 或靜態網站。
5. Deploy。

### GitHub Pages

1. 把檔案放到 GitHub repo。
2. 到 repo 的 Settings。
3. 開啟 Pages。
4. 選擇部署 branch。

## 注意

這個測驗不是心理診斷，而是互動式自我觀察內容。公開上線時建議保留首頁上的非診斷聲明。
