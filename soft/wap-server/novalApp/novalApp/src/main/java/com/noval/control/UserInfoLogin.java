package com.noval.control;

import com.noval.model.entity.NovalEntity;
import com.noval.model.entity.UserInfoEntity;
import com.noval.model.service.NovalService;
import com.noval.model.service.UserInfoService;
import com.noval.tool.MD5;
import lombok.extern.slf4j.Slf4j;
import com.noval.model.param.ResponseResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
public class UserInfoLogin {

    private Logger logger = LoggerFactory.getLogger(UserInfoLogin.class);

    @Autowired
    private UserInfoService userInfoService;

    @CrossOrigin
    @RequestMapping("/userInfoLogin")
    public ResponseResult<UserInfoEntity> userLogin(HttpServletRequest request){

        String account = request.getParameter("account");

        String password = request.getParameter("password");

        String encryptPass = "";

        try{
            encryptPass = MD5.encrypt(password);
        }catch (Exception e){
            logger.error("Exception",e);
            logger.info("Exception:{}",e);
        }

        ResponseResult<UserInfoEntity> result =new ResponseResult<UserInfoEntity>();

        Map<String,String> param=new HashMap<>();

        UserInfoEntity userInfoEntity = this.userInfoService.loginUser(account,encryptPass);

        if(userInfoEntity!=null && userInfoEntity.getId()!=null){

            request.getSession().setAttribute("userInfo",userInfoEntity);

            result.setResult(userInfoEntity);

            result.setResponseCode("0000");

            result.setResponseMsg("登陆成功");
        } else{
            result.setResult(null);

            result.setResponseCode("0002");

            result.setResponseMsg("账号或密码错误，登陆失败");
        }



        return result;
    }

}
