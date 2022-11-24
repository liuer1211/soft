package com.noval.tool;

import com.alibaba.fastjson.JSONObject;
import com.noval.model.entity.NovalEntity;
import org.springframework.web.client.RestTemplate;

public class TestClient {

    public static void main(String[] args) {
        RestTemplate  client =new RestTemplate();
        JSONObject postData =new JSONObject();
        postData.put("novalId","1");
        String url ="http://127.0.0.1:8001/queryNovalDetail.json";
        JSONObject respData =  client.postForEntity(url,postData,JSONObject.class).getBody();

        System.out.println(respData);
    }
}
