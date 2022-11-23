package com.noval.model.service;

import com.noval.model.dao.UserMessageInfoDAO;
import com.noval.model.entity.UserMessageInfoEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserMessageInfoServiceImpl implements UserMessageInfoService {

    @Autowired
    private UserMessageInfoDAO userMessageInfoDAO;

    @Override
    public void userSendMesage(UserMessageInfoEntity userMessageInfoEntity) {

        userMessageInfoEntity.setSendMessageTime(new Date());

        this.userMessageInfoDAO.save(userMessageInfoEntity);
    }

    @Override
    public Page<UserMessageInfoEntity> getMessageList(Integer pageNumber) {
        UserMessageInfoEntity t =new UserMessageInfoEntity();

        Example<UserMessageInfoEntity> reqParam = Example.of(t);
        Pageable pageable = PageRequest.of(pageNumber,100);
        Page<UserMessageInfoEntity> pageList = this.userMessageInfoDAO.findAll(reqParam,pageable);

        return pageList;
    }
}
