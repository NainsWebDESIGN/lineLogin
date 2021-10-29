/**
 * 傳給Line的參數
 */
export const Line = {
    // (必填)
    // 告訴Line要回應authorization code
    response_type: "code",
    // 頻道ID
    client_id: "1656581706",
    // 重新導向的網址(要去AppSetting的Callback URL設定)
    redirect_uri: "http://localhost:4200/",
    // 防止跨站請求，要放不是URL編碼的亂數
    state: "shizuna1223",
    // 要求全縣的範圍，目前有profile, openid, email
    scope: "profile%20openid&nonce=helloNains",
    // (選填)
    // 防止重複攻擊，會回傳直到IDtoken解析後的內容
    nonce: "helloNains",
    // 設定為consent後，每次登入都會要你同意權限
    prompt: "consent",
    // 登入的有效時間(單位:秒)，會反映在IDtoken解析後的內容
    max_age: "241000",
    // Line登入的頁面語言
    ui_locales: "zh-tw",
    // 有加入chatbot的話要在權限列表一起顯示normal或是分開顯示aggressive
    bot_prompt: "normal"
}
// 傳送給line aouth的網址
export const LineURL = "https://access.line.me/oauth2/v2.1/authorize?"