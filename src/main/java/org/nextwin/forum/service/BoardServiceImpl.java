package org.nextwin.forum.service;

import java.util.List;

import javax.inject.Inject;

import org.nextwin.forum.dao.BoardDao;
import org.nextwin.forum.dto.BoardDto;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {

	@Inject
	private BoardDao dao;

	@Override
	public List<BoardDto> getList() throws Exception {
		return dao.getList();
	}

	@Override
	public void doWrite(BoardDto dto) throws Exception {
		dao.doWrite(dto);
	}

}
