package com.noval.control;

import com.noval.model.entity.NovalEntity;
import com.noval.model.entity.NovalPeopleEntity;
import com.noval.model.param.ResponseResult;
import com.noval.model.param.ResponseResultList;
import com.noval.model.service.NovalService;
import com.noval.util.enumer.CommonEnum;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.math.BigInteger;
import java.util.*;

@Slf4j
@RestController
public class QueryNovalAttributeList<T> {

    private Logger logger = LoggerFactory.getLogger(QueryNovalAttributeList.class);

    @Autowired
    private NovalService novalService;

    @CrossOrigin
    @RequestMapping("/queryNovalAttributeList")
    public ResponseResultList<T> queryNovalAttributeList(HttpServletRequest request){

        logger.info("queryNovalAttributeList start");

        Map<String,String> param=new HashMap<>();

        //根据传入接口参数判断调用哪个查询
        String novalId = request.getParameter("novalId");

        String attribute = request.getParameter("attribute");

        ResponseResultList<T> result = new ResponseResultList<>();

        List resultList = null;

        //武学
        if(CommonEnum.ATTRIBUTE_01.getCode().equals(attribute)){
            resultList = this.novalService.findNovalPeopleList(new BigInteger(novalId));
        }else if(CommonEnum.ATTRIBUTE_02.getCode().equals(attribute)){
            resultList = this.novalService.findNovalKungfuList(new BigInteger(novalId));
        }else if(CommonEnum.ATTRIBUTE_03.getCode().equals(attribute)){
            resultList = this.novalService.findNovalSectList(new BigInteger(novalId));
        }else if(CommonEnum.ATTRIBUTE_04.getCode().equals(attribute)){
            resultList = this.novalService.findNovalWeaponList(new BigInteger(novalId));
        }else if(CommonEnum.ATTRIBUTE_05.getCode().equals(attribute)){
            resultList = this.novalService.findFatalismList(new BigInteger(novalId));
        }else if(CommonEnum.ATTRIBUTE_06.getCode().equals(attribute)){
            resultList = this.novalService.findNovalOtherList(new BigInteger(novalId));
        }

        result.setResult(resultList);

        result.setResponseCode("0000");

        result.setResponseMsg("查询成功");

        logger.info("result:{}",result);

        logger.info("queryNovalAttributeList end");

        return result;
    }
}
