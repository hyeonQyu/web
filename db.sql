CREATE TABLE board(
	bno INT NOT NULL auto_increment,
	title VARCHAR(50) NOT NULL,
	content TEXT NOT NULL,
	writer VARCHAR(20) NOT NULL,
	regDate TIMESTAMP DEFAULT NOW(),
	viewCount INT DEFAULT 0,
	PRIMARY KEY(bno)
);

COMMIT;forum

INSERT INTO board(title, content, writer) VALUES ('테스트 제목2', '테스트 내용2', '작성자2');