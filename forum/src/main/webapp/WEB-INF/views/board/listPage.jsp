<%@page import="org.springframework.ui.Model"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 목록</title>
</head>
<body>

<table>
	<thead>
		<tr>
			<th>번호</th>
			<th>제목</th>
			<th>작성일</th>
			<th>작성자</th>
			<th>조회수</th>
		</tr>
	</thead>

	<tbody>
		<c:forEach items="${list}" var="post">
			<tr>
				<td>${post.bno}</td>
				<td>
					<a href="/board/view?bno=${post.bno}">${post.title}</a>
				</td>
				<td>${post.regDate}</td>
				<td>${post.writer}</td>
				<td>${post.viewCount}</td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<div>
    <c:if test="${page.prev}">
    	<span>[ <a href="/board/listPage?num=${page.startPageNum - 1}${page.searchTypeKeyword}">이전</a> ]</span>
    </c:if>

    <c:forEach begin="${page.startPageNum}" end="${page.endPageNum}" var="num">
    	<span>
    		<c:if test="${select != num}">
    			<a href="/board/listPage?num=${num}${page.searchTypeKeyword}">${num}</a>
    		</c:if>
    		<c:if test="${select == num}">
    			<b>${num}</b>
    		</c:if>
    	</span>
    </c:forEach>

    <c:if test="${page.next}">
    	<span>[ <a href="/board/listPage?num=${page.endPageNum + 1}${page.searchTypeKeyword}">다음</a> ]</span>
    </c:if>

    <div>
        <select name="searchType">
            <option value="title" <c:if test="${page.searchType eq 'title'}">selected="selected"</c:if>>제목</option>
            <option value="content" <c:if test="${page.searchType eq 'content'}">selected="selected"</c:if>>내용</option>
            <option value="title_content" <c:if test="${page.searchType eq 'title_content'}">selected="selected"</c:if>>제목+내용</option>
            <option value="writer" <c:if test="${page.searchType eq 'writer'}">selected="selected"</c:if>>작성자</option>
        </select>

        <input type="text" name="keyword" value="${page.keyword}"/>
        <button type="button" id="searchButton">검색</button>
    </div>
</div>

<a href="/board/write">게시글 작성</a>

<script type="text/javascript">

    document.getElementById("searchButton").onclick = function(){
        let searchType = document.getElementsByName("searchType")[0].value;
        let keyword = document.getElementsByName("keyword")[0].value;

        location.href = "/board/listPage?num=1" + "&searchType=" + searchType + "&keyword=" + keyword;
    };

</script>

</body>
</html>
