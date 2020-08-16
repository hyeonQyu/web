package org.nextwin.forum.service;

import java.util.List;

import org.nextwin.forum.dto.BoardDto;

public interface BoardService {
	
	public List<BoardDto> getList() throws Exception;
	
	public void doWrite(BoardDto dto) throws Exception;
	
	public BoardDto getView(int bno) throws Exception;
	
	public void doModify(BoardDto dto) throws Exception;
	
}
