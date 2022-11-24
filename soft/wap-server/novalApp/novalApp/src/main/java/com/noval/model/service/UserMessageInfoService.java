package com.noval.model.service;


import com.noval.model.entity.UserMessageInfoEntity;
import org.springframework.data.domain.Page;

public interface UserMessageInfoService {

    public void userSendMesage(UserMessageInfoEntity userMessageInfoEntity);

    public Page<UserMessageInfoEntity> getMessageList(Integer pageNumber);
}
