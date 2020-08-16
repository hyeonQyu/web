package org.nextwin.forum.dao;

import java.util.List;

import org.nextwin.forum.dto.BoardDto;

public interface BoardDao {

	public List<BoardDto> getList() throws Exception;
	
	public void doWrite(BoardDto dto) throws Exception;
	
	public BoardDto getView(int bno) throws Exception;
	
	public void doModify(BoardDto dto) throws Exception;
	
}
