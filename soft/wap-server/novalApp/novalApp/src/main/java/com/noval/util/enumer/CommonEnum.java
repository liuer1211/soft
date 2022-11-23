package com.noval.util.enumer;

public enum CommonEnum {

    ATTRIBUTE_01("attribute","01","人物"),
    ATTRIBUTE_02("attribute","02","武学"),
    ATTRIBUTE_03("attribute","03","门派"),
    ATTRIBUTE_04("attribute","04","兵器"),
    ATTRIBUTE_05("attribute","05","宿命"),
    ATTRIBUTE_06("attribute","06","其他"),
    ;

    private String type;

    private String code;

    private String msg;

    CommonEnum(String type, String code, String msg) {
        this.type = type;
        this.code = code;
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }


}
