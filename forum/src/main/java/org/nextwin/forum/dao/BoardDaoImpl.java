package org.nextwin.forum.dao;

import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.nextwin.forum.domain.BoardDto;
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

	@Override
	public void doModify(BoardDto dto) throws Exception {
		sqlSession.update(namespace + ".modify", dto);		
	}

	@Override
	public void doDelete(int bno) throws Exception {
		sqlSession.delete(namespace + ".delete", bno);		
	}

	@Override
	public int getCount() throws Exception {
		return sqlSession.selectOne(namespace + ".count");
	}

	@Override
	public List<BoardDto> getListPage(int displayPost, int postNum) throws Exception {
		HashMap<String, Integer> data = new HashMap<>();
		data.put("displayPost", displayPost);
		data.put("postNum", postNum);
		return sqlSession.selectList(namespace + ".listPage", data);
	}

}
