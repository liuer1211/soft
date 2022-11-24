package com.noval.control;

import com.noval.model.entity.UserInfoEntity;
import com.noval.model.param.ResponseResult;
import com.noval.model.service.UserInfoService;
import com.noval.tool.MD5;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
public class NoPermission {

    private Logger logger = LoggerFactory.getLogger(NoPermission.class);


    @CrossOrigin
    @RequestMapping("/noPermission")
    public ResponseResult<String> noPermission(){

        ResponseResult<String> result =new ResponseResult<String>();

        result.setResult("Permission denied");

        result.setResponseCode("9999");

        result.setResponseMsg("无访问权限");

        return result;
    }

}
