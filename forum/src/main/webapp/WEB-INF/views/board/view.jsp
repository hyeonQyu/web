<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${view.title}</title>
</head>
<body>

<form method="post">

	<label>제목</label>
	${view.title}<br/>

	<label>작성자</label>
	${view.writer}<br/>

	<label>내용</label><br/>
	${view.content}<br/><br/>

</form>

<div id="nav">
	<a href="/board/modify?bno=${view.bno}">수정</a>&nbsp;&nbsp;<a href="/board/delete?bno=${view.bno}">삭제</a>
	<%@ include file="../include/nav.jsp" %>
</div>

</body>
</html>
