package org.nextwin.forum;

import java.util.List;

import javax.inject.Inject;

import org.nextwin.forum.dto.BoardDto;
import org.nextwin.forum.service.BoardService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
	
}
