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

INSERT INTO board(title, content, writer) VALUES ('게시글을 많이 씁시다.', '내용은 안중요함', 'adsh21');
INSERT INTO board(title, content, writer) VALUES ('도배 ㄴㄴ', 'ㅈㄱㄴ', 'fdshnn');
INSERT INTO board(title, content, writer) VALUES ('there are dummy posts', 'no content', 'cbbbq13129');

SELECT * FROM board ORDER BY bno DESC LIMIT 10;

SELECT COUNT(bno) FROM board;