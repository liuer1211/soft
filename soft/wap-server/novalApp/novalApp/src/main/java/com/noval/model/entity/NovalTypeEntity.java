package com.noval.model.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;
import java.util.Date;

@Entity(name="novel_type")
public class NovalTypeEntity {

    private BigInteger id;

    private String novalKey;

    private String novalValue;

    private Date createTime;

    @Id
    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getNovalKey() {
        return novalKey;
    }

    public void setNovalKey(String novalKey) {
        this.novalKey = novalKey;
    }

    public String getNovalValue() {
        return novalValue;
    }

    public void setNovalValue(String novalValue) {
        this.novalValue = novalValue;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
