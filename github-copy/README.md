# GitHub Copy
참조: https://github.com/HeropCode/GitHub-Responsive

## index.html
### head 내 메타 태그
```
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1">
```
`user-scalable=no`는 사용자가 손가락으로 확대, 축소하는 개념을 사용하지 않는다라는 뜻. `maximum-scale`과 `minimum-scale`을 1로 하여 확대, 축소 허용하지 않음.

```
<meta property="og:type" content="website">
<meta property="twitter:card" content="summary">
```
`og`는 `open graph`로 정보를 의미, 트위터카드도 같은 의미로 사용됨. 외부(카카오톡 등) 앱에서 표시되는 정보.
