package com.noval.model.dao;

import com.noval.model.entity.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoDAO extends JpaRepository<UserInfoEntity,String> {
}
