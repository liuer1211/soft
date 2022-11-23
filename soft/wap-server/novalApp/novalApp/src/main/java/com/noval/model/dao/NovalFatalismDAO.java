package com.noval.model.dao;

import com.noval.model.entity.NovalEntity;
import com.noval.model.entity.NovalFatalismEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NovalFatalismDAO extends JpaRepository<NovalFatalismEntity,String> {



}
