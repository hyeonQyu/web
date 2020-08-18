package org.nextwin.forum.service;

import java.util.List;

import javax.inject.Inject;

import org.nextwin.forum.dao.BoardDao;
import org.nextwin.forum.domain.BoardDto;
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

	@Override
	public BoardDto getView(int bno) throws Exception {
		return dao.getView(bno);
	}

	@Override
	public void doModify(BoardDto dto) throws Exception {
		dao.doModify(dto);
	}

	@Override
	public void doDelete(int bno) throws Exception {
		dao.doDelete(bno);		
	}

	@Override
	public int getCount() throws Exception {
		return dao.getCount();
	}

	@Override
	public List<BoardDto> getListPage(int displayPost, int postNum) throws Exception {
		return dao.getListPage(displayPost, postNum);
	}

}
