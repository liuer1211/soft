package com.noval.control;

import com.noval.model.entity.NovalEntity;
import com.noval.model.param.ResponseResultList;
import com.noval.model.service.NovalService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Slf4j
@RestController
public class QueryNovalList {

    @Autowired
    private NovalService novalService;

    @CrossOrigin
    @RequestMapping("/queryNovalList")
    public ResponseResultList<NovalEntity> querList(){

        Map<String,String> param=new HashMap<>();

        List<NovalEntity> list = this.novalService.findData(param);

        ResponseResultList<NovalEntity> result =new ResponseResultList<NovalEntity>();

        result.setResult(list);

        result.setResponseCode("0000");

        result.setResponseMsg("查询成功");

        return result;
    }

}
