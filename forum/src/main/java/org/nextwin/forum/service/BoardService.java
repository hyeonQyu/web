package org.nextwin.forum.service;

import java.util.List;

import org.nextwin.forum.domain.BoardDto;

public interface BoardService {
	
	public List<BoardDto> getList() throws Exception;
	
	public void doWrite(BoardDto dto) throws Exception;
	
	public BoardDto getView(int bno) throws Exception;
	
	public void doModify(BoardDto dto) throws Exception;
	
	public void doDelete(int bno) throws Exception;
	
	public int getCount(String searchType, String keyword) throws Exception;
	
	public List<BoardDto> getListPage(int displayPost, int postNum, String searchType, String keyword) throws Exception;
	
}
