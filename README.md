# web

## 배경 채우기
```html
<!DOCTYPE html>
<html>
   <head>
        <meta charset="utf-8">
        <title>practice</title>  
        <link href="css/reset.css" rel="stylesheet" type="text/css"/>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div class="background__01"></div>
    </body>
</html>
```
img 태그는 스크롤이 생기기 때문에 배경에는 적합하지 않다. 그래서 새로운 스타일을 정의.
```css
.background__01{
    width: 100%;
    height: 100%;
    background:url("../images/a.jpg") no-repeat;
    background-size: cover;
    background-position: center;
}
```
css 파일에서 다음과 같이 background 속성에서 배경을 불러온다. background-size속성을 cover로 하여 꽉 찬 화면을 만들고 background-position속성을 center로 하여 중앙에 놓는다. 그러나 해당 div의 height가 0이기 때문에 height를 100%로 해도 0이다. 따라서 부모인 html과 body의 크기를 100%로 해줘야한다.
```css
html, body{
    width: 100%;
    height: 100%;
}
```

## 배경 슬라이드
```html
<script type="text/javascript" src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="plugins/bxslider/js/jquery.bxslider.js" type="text/javascript"></script>
```
JQuery를 사용, bxslider 플러그인이 있는 경로 설정.
```html
<script>
   $(document).ready(function(){
      $('.slider').bxSlider({
         controls:false,
         pager:false,
         auto:true
      });
   });
</script>
```
bxSlider의 controls 설정을 false로 바꾸어 Prev, Next를 없애고, pager를 false로 하여 페이징 표시를 하지 않도록 한다. auto를 true로 설정하여 자동으로 배경이 바뀌도록 한다.

## 배경에 도트 깔기
```html
<div class="overlay"></div>
```
slider 위에 overlay 추가
```css
.overlay{
    width: 100%;
    height: 100%;
    background: url("../images/16.png");
    position: absolute;
    top: 0;
    z-index: 10;
}
```
position을 absolute로 하여 자유롭게 배치할 수 있도록 하고 z-index를 크게 하여 배경보다 앞에 있도록 한다.
