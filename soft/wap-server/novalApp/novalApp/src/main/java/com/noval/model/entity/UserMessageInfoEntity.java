package com.noval.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;
import java.util.Date;

@Entity(name="user_message_info")
public class UserMessageInfoEntity {

    /**
     * id
     */
    private BigInteger id;

    /**
     * 发送消息内容
     */
    private String sendMessage;
    /**
     * 发送用户ID
     */
    private BigInteger fromUser;

    /**
     * 发送用户昵称
     */
    private String fromUserNickname;

    /**
     * 接收用户ID
     */
    private BigInteger toUser;

    /**
     * 接收用户昵称
     */
    private String toUserNickname;

    /**
     * 发送消息时间
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date sendMessageTime;


    public void setId(BigInteger id) {
        this.id = id;
    }

    @Id
    public BigInteger getId() {
        return id;
    }

    public String getSendMessage() {
        return sendMessage;
    }

    public void setSendMessage(String sendMessage) {
        this.sendMessage = sendMessage;
    }

    public BigInteger getFromUser() {
        return fromUser;
    }

    public void setFromUser(BigInteger fromUser) {
        this.fromUser = fromUser;
    }

    public String getFromUserNickname() {
        return fromUserNickname;
    }

    public void setFromUserNickname(String fromUserNickname) {
        this.fromUserNickname = fromUserNickname;
    }

    public BigInteger getToUser() {
        return toUser;
    }

    public void setToUser(BigInteger toUser) {
        this.toUser = toUser;
    }

    public String getToUserNickname() {
        return toUserNickname;
    }

    public void setToUserNickname(String toUserNickname) {
        this.toUserNickname = toUserNickname;
    }

    public Date getSendMessageTime() {
        return sendMessageTime;
    }

    public void setSendMessageTime(Date sendMessageTime) {
        this.sendMessageTime = sendMessageTime;
    }

    @Override
    public String toString() {
        return "UserMessageInfo{" +
                "id=" + id +
                ", sendMessage='" + sendMessage + '\'' +
                ", fromUser=" + fromUser +
                ", fromUserNickname='" + fromUserNickname + '\'' +
                ", toUser=" + toUser +
                ", toUserNickname='" + toUserNickname + '\'' +
                ", sendMessageTime=" + sendMessageTime +
                '}';
    }
}
