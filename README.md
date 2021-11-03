# TestLogin

- [參考 youtube](https://www.youtube.com/watch?v=V7yLKvkY9jI&list=PLjS923tbWwlpqmNS1IK07EyDI9wtYgTnu&index=1)
- [官方文本](https://developers.line.biz/zh-hant/docs/line-login/integrate-line-login/#making-an-authorization-request)
- [Line Developer](https://developers.line.biz)

---

需 jwt-decode 來解析 idToken

```npm
npm i jwt-decode
```

但 jwt-decode 似乎有問題
嘗試: @auth0/angular-jwt

```npm
npm i @auth0/angular-jwt
```

結果新版本無法對應舊的 Angular
只好降級

```npm
npm i @auth0/angular-jwt@3.0.1
```
