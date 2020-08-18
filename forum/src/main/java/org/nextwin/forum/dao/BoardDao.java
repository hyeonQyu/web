package org.nextwin.forum.dao;

import java.util.List;

import org.nextwin.forum.domain.BoardDto;

public interface BoardDao {

	public List<BoardDto> getList() throws Exception;
	
	public void doWrite(BoardDto dto) throws Exception;
	
	public BoardDto getView(int bno) throws Exception;
	
	public void doModify(BoardDto dto) throws Exception;
	
	public void doDelete(int bno) throws Exception;
	
	public int getCount() throws Exception;
	
	public List<BoardDto> getListPage(int displayPost, int postNum) throws Exception;
	
}
