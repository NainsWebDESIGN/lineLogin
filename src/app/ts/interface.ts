/** 驗證完取得的AccessToken */
export interface LineResponse {
    // 存取伺服器驗證用的token
    access_token: string,
    // token的種類
    token_type: string,
    // 假設access_token到期，可透過refresh得到新的
    refresh_token: string,
    // access_token有效時間
    expires_in: string,
    // 一開始發送的scope要求的東西
    scope: string,
    // 需透過id_token來得知使用者是誰
    id_token: string
}
/** 傳給Line的參數 */
export interface LineToken {
    // (必填)
    // 告訴Line要回應authorization code
    response_type: string,
    // 頻道ID
    client_id: string,
    // 重新導向的網址(要去AppSetting的Callback URL設定)
    redirect_uri: string,
    // 防止跨站請求，要放不是URL編碼的亂數
    state: string,
    // 要求全縣的範圍，目前有profile, openid, email
    scope: string,
    // (選填)
    // 防止重複攻擊，會回傳直到IDtoken解析後的內容
    nonce: string,
    // 設定為consent後，每次登入都會要你同意權限
    prompt: string,
    // 登入的有效時間(單位:秒)，會反映在IDtoken解析後的內容
    max_age: string,
    // Line登入的頁面語言
    ui_locales: string,
    // 有加入chatbot的話要在權限列表一起顯示normal或是分開顯示aggressive
    bot_prompt: string
}
/** 將得到的code拿去post驗證 */
export interface PostLine {
    // 授權的型態(目前官方只有這個)
    grant_type: string,
    // 傳回來的驗證碼
    code: string,
    // 重新導向的網址(要去AppSetting的Callback URL設定)
    redirect_uri: string,
    // 頻道ID
    client_id: string,
    // 頻道密鑰
    client_secret: string
}
/** 各種Line的網址或api */
export interface LineHref {
    // 傳送給line aouth取得驗證碼的網址
    URL: string,
    // 呼叫line API的網址
    API: string
}