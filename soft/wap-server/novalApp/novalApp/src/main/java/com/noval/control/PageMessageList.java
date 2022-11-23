package com.noval.control;

import com.noval.model.param.ResponseResult;
import com.noval.model.service.UserMessageInfoService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
public class PageMessageList {

    private Logger logger = LoggerFactory.getLogger(PageMessageList.class);

    @Autowired
    private UserMessageInfoService userMessageInfoService;

    @CrossOrigin
    @RequestMapping("/getPageMessageList")
    public ResponseResult<Page> getPageMessageList(HttpServletRequest request){

        String pageNumber = request.getParameter("pageNumber");

        ResponseResult<Page> result =new ResponseResult<Page>();

        Map<String,String> param=new HashMap<>();

        Page pageDTO = this.userMessageInfoService.getMessageList(Integer.valueOf(pageNumber));

        result.setResult(pageDTO);

        result.setResponseCode("0000");

        result.setResponseMsg("查询成功");

        return result;
    }

}
