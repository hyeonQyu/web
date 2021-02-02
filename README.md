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

## 컨텐츠 작성
```html
<div class="contents">
   <p class="contents__name">Kim Hyeongyu</p>
   <p class="contents__job">I'm web programmer & web designer</p>
   <div class="contents__sns">
      <ul class="contents__list">
         <li>
            <a href="#">
               <i>facebook</i>                            
            </a>
         </li>
         <li>
            <a href="#">
               <i>twitter</i>
            </a>
         </li>
         <li>
            <a href="#">
               <i>instagram</i>
            </a>
         </li>
         <li>
            <a href="#">
               <i>blog</i>
            </a>
         </li>
      </ul>
   </div>
</div>
```
다음과 같이 이름, 직업, SNS 계정을 작성한다.
```css
.contents{
    position: absolute;
    top: 0;
    z-index: 20;
    text-align: center;
}
```
도트 위에 나오도록 하기 위해 position과 z-index를 수정했다.
```css
.contents__name{
    font-size: 64px;
    color: white;
    font-weight: bold;
    margin-bottom: 25px;
}

.contents__job{
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-bottom: 50px;
}
```
폰트 크기와 색, 두께, 바깥 여백을 지정한다.
```css
.contents__list{
    font-size: 0;
}

.contents__list > li{
    display: inline-block;
    width: 52px;
    height: 52px;
    border: 1px solid white;
    border-radius: 50%;
    font-size: 16px;
}
```
SNS 표시를 위한 리스트를 inline-block으로 설정하여 가로로 배치되도록 하고 border-radius를 50%로 하여 원모양(width와 height가 같기 때문에)으로 만든다. <li> 사이 개행으로 발생한 공백을 없애기 위해 <li> 부모의 font-size를 0으로 한다. 이때 font-size는 상속되기 때문에 <li>의 font-size를 16px로 한다.
