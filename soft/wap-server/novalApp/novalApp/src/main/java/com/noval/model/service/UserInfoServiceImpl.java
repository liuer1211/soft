package com.noval.model.service;

import com.noval.model.dao.UserInfoDAO;
import com.noval.model.entity.NovalOtherEntity;
import com.noval.model.entity.UserInfoEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Service
public class UserInfoServiceImpl implements UserInfoService{

    @Autowired
    private UserInfoDAO userInfoDAO;

    @Override
    public UserInfoEntity loginUser(String account, String password) {

        UserInfoEntity t =new UserInfoEntity();
        t.setAccount(account);
        t.setPassword(password);
        Example<UserInfoEntity> reqParam = Example.of(t);
        List<UserInfoEntity> list = this.userInfoDAO.findAll(reqParam);
        if(!CollectionUtils.isEmpty(list)){
            return list.get(0);
        }
        return new UserInfoEntity();
    }
}
