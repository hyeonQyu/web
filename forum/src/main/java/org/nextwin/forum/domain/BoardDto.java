package org.nextwin.forum.domain;

import java.sql.Timestamp;

/*
 	CREATE TABLE board(
	bno INT NOT NULL auto_increment,
	title VARCHAR(50) NOT NULL,
	content TEXT NOT NULL,
	writer VARCHAR(20) NOT NULL,
	regDate TIMESTAMP DEFAULT NOW(),
	viewCount INT DEFAULT 0,
	PRIMARY KEY(bno)
);
 */

public class BoardDto {
	private int bno;
	private String title;
	private String content;
	private String writer;
	private Timestamp regDate;
	private int viewCount;
	
	public int getBno() {
		return bno;
	}
	
	public void setBno(int bno) {
		this.bno = bno;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public String getWriter() {
		return writer;
	}
	
	public void setWriter(String writer) {
		this.writer = writer;
	}
	
	public Timestamp getRegDate() {
		return regDate;
	}
	
	public void setRegDate(Timestamp regDate) {
		this.regDate = regDate;
	}
	
	public int getViewCount() {
		return viewCount;
	}
	
	public void setViewCount(int viewCount) {
		this.viewCount = viewCount;
	}

}
