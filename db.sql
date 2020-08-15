CREATE TABLE board(
	bno INT NOT NULL auto_increment,
	title VARCHAR(50) NOT NULL,
	content TEXT NOT NULL,
	writer VARCHAR(20) NOT NULL,
	regDate TIMESTAMP DEFAULT NOW(),
	viewCount INT DEFAULT 0,
	PRIMARY KEY(bno)
);

COMMIT;