package com.noval.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;
import java.util.Date;

@Entity(name="novel_people")
public class NovalPeopleEntity {

    private BigInteger id;

    private String name;

    private String instro;

    private String descr;

    private String img;

    private Date createTime;

    private BigInteger novalId;

    private String kungFu;

    private String sect;

    @Id
    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstro() {
        return instro;
    }

    public void setInstro(String instro) {
        this.instro = instro;
    }

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public BigInteger getNovalId() {
        return novalId;
    }

    public void setNovalId(BigInteger novalId) {
        this.novalId = novalId;
    }

    public String getKungFu() {
        return kungFu;
    }

    public void setKungFu(String kungFu) {
        this.kungFu = kungFu;
    }

    public String getSect() {
        return sect;
    }

    public void setSect(String sect) {
        this.sect = sect;
    }
}
