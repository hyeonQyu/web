package org.nextwin.forum;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.nextwin.forum.dto.BoardDto;
import org.nextwin.forum.service.BoardService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/board/*")
public class BoardController {
	
	@Inject
	BoardService service;

	@RequestMapping("/list")
	public void list(Model model) throws Exception {
		List<BoardDto> list = null;
		list = service.getList();
		
		model.addAttribute("list", list);
	}
	
	@RequestMapping(value = "/write", method = RequestMethod.GET)
	public void write() {}
	
	@RequestMapping(value = "/write", method = RequestMethod.POST)
	public String write(BoardDto dto) throws Exception {
		service.doWrite(dto);
		return "redirect:/board/list";
	}
	
	@RequestMapping("/view")
	public void view(HttpServletRequest request, Model model) throws Exception {
		int bno = Integer.parseInt(request.getParameter("bno"));
		BoardDto dto = service.getView(bno);
		model.addAttribute("view", dto);
	}
	
	@RequestMapping("/modify")
	public void modify(HttpServletRequest request, Model model) throws Exception {
		int bno = Integer.parseInt(request.getParameter("bno"));
		BoardDto dto = service.getView(bno);
		model.addAttribute("view", dto);
	}
	
	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public String modify(BoardDto dto) throws Exception {
		service.doModify(dto);
		return "redirect:/board/view?bno=" + dto.getBno();
	}
	
	@RequestMapping(value = "/delete")
	public String delete(@RequestParam("bno") int bno) throws Exception {
		service.doDelete(bno);
		return "redirect:/board/list";
	}
	
}
