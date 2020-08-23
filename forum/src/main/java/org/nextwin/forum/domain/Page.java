package org.nextwin.forum.domain;

public class Page {

	// 현재 페이지 번호
	private int num;
	// 게시물 총 개수
	private int total;
	// 한 페이지에 출력할 게시물 수
	private int postNum = 10;
	// 하단 페이징 번호
	private int pageNum;
	// 출력할 게시물
	private int displayPost;
	// 한번에 표시할 페이징 번호의 개수
	private int pageNumCount = 10;
	// 표시되는 페이지 번호 줄 시작, 마지막 번호
	private int startPageNum;
	private int endPageNum;
	
	// 다음, 이전 표시 여부
	private boolean prev;
	private boolean next;
	
	// 검색
	String searchType;
	String keyword;
	String searchTypeKeyword;
	
	public Page(int num, int total, String searchType, String keyword) {
		this.num = num;
		this.total = total;
		this.searchType = searchType;
		this.keyword = keyword;
		setSearchTypeKeyword();
		
		calc();
	}
	
	private void calc() {
		pageNum = (int)Math.ceil((double)total / postNum);
		displayPost = (num - 1) * postNum;
		endPageNum = (int)(Math.ceil((double)num / (double)pageNumCount) * pageNumCount);
		startPageNum = endPageNum - pageNumCount + 1;
		
		int endPageNum2 = (int)(Math.ceil((double)total / (double)pageNumCount));
		endPageNum = Math.min(endPageNum, endPageNum2);
		
		prev = startPageNum == 1 ? false : true;
		next = endPageNum * pageNumCount > total ? false : true;
	}
	
	private void setSearchTypeKeyword() {
		if(searchType.equals("") || keyword.equals(""))
			searchTypeKeyword = "";
		else
			searchTypeKeyword = "&searchType=" + searchType + "&keyword=" + keyword;
	}

	public int getPageNum() {
		return pageNum;
	}

	public int getStartPageNum() {
		return startPageNum;
	}

	public int getEndPageNum() {
		return endPageNum;
	}

	public boolean isPrev() {
		return prev;
	}

	public boolean isNext() {
		return next;
	}

	public int getPostNum() {
		return postNum;
	}

	public int getDisplayPost() {
		return displayPost;
	}

	public String getSearchType() {
		return searchType;
	}

	public String getKeyword() {
		return keyword;
	}

	public String getSearchTypeKeyword() {
		return searchTypeKeyword;
	}
	
}
