package org.nextwin.forum.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.nextwin.forum.dto.BoardDto;
import org.springframework.stereotype.Repository;

@Repository
public class BoardDaoImpl implements BoardDao {
	
	@Inject
	private SqlSession sqlSession;
	private static String namespace = "org.nextwin.forum.mappers.board";

	@Override
	public List<BoardDto> getList() throws Exception {
		return sqlSession.selectList(namespace + ".list");
	}

	@Override
	public void doWrite(BoardDto dto) throws Exception {
		sqlSession.insert(namespace + ".write", dto);
	}

	@Override
	public BoardDto getView(int bno) throws Exception {
		return sqlSession.selectOne(namespace + ".view", bno);
	}

}
