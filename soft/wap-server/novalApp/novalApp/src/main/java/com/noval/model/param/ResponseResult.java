package com.noval.model.param;

import java.util.List;

public class ResponseResult<T> {

    private String responseCode;

    private String responseMsg;

    private T result;

    private List<String> novalAttributeList;

    public String getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(String responseCode) {
        this.responseCode = responseCode;
    }

    public String getResponseMsg() {
        return responseMsg;
    }

    public void setResponseMsg(String responseMsg) {
        this.responseMsg = responseMsg;
    }

    public T getResult() {
        return result;
    }

    public void setResult(T result) {
        this.result = result;
    }

    public List<String> getNovalAttributeList() {
        return novalAttributeList;
    }

    public void setNovalAttributeList(List<String> novalAttributeList) {
        this.novalAttributeList = novalAttributeList;
    }
}
