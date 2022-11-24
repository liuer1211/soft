package com.noval.control;

import com.alibaba.fastjson.JSONObject;
import com.noval.model.entity.NovalEntity;
import com.noval.model.param.ResponseResult;
import com.noval.model.service.NovalService;
import com.noval.util.enumer.CommonEnum;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.*;
@Slf4j
@RestController
public class QueryNovalDetail {

    private Logger logger = LoggerFactory.getLogger(QueryNovalDetail.class);

    @Autowired
    private NovalService novalService;

    @CrossOrigin
    @RequestMapping(value = "/queryNovalDetail")
    public ResponseResult<NovalEntity> queryNovalDetail(HttpServletRequest request){

        logger.info("queryNovalDetail start");
        String novalId  = request.getParameter("novalId");

        logger.info("novalId:"+novalId);

        Map<String,String> param=new HashMap<>();

        NovalEntity novalEntity = this.novalService.findDataById(new BigInteger(novalId));

        ResponseResult<NovalEntity> result = new ResponseResult<NovalEntity>();

        result.setResult(novalEntity);
        //获取小说属性
        List<String> nvalAttributeList =new ArrayList<>();
        CommonEnum[] commonEnums = CommonEnum.values();
        for (CommonEnum c:commonEnums) {
            nvalAttributeList.add(c.getCode());
        }
        result.setNovalAttributeList(nvalAttributeList);

        result.setResponseCode("0000");

        result.setResponseMsg("查询成功");

        logger.info("queryNovalDetail:{}",result);

        logger.info("queryNovalDetail end");

        return result;
    }

    public JSONObject getJSONParam(HttpServletRequest request){
        JSONObject jsonParam = null;
        try {
            // 获取输入流
            BufferedReader streamReader = new BufferedReader(new InputStreamReader(request.getInputStream(), "UTF-8"));

            // 写入数据到Stringbuilder
            StringBuilder sb = new StringBuilder();
            String line = null;
            while ((line = streamReader.readLine()) != null) {
                sb.append(line);
            }
            System.out.println("ssssss:"+sb);
            jsonParam = JSONObject.parseObject(sb.toString());
            // 直接将json信息打印出来
            System.out.println(jsonParam.toJSONString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonParam;
    }

}
