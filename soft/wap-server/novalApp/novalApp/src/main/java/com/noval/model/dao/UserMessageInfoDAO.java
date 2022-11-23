package com.noval.model.dao;

import com.noval.model.entity.UserMessageInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

public interface UserMessageInfoDAO extends JpaRepository<UserMessageInfoEntity,String> {

//
//    @Query(value = "select a from UserMessageInfoEntity a order by  a.sendMessageTime desc")
//    Page<String> findUserMessageInfoEntityPageable(Pageable pageable);

}
