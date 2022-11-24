package com.noval.model.service;

import com.noval.model.entity.UserInfoEntity;

public interface UserInfoService {

    public UserInfoEntity loginUser(String account,String password);
}
