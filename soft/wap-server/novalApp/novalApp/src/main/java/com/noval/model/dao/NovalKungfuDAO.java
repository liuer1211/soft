package com.noval.model.dao;

import com.noval.model.entity.NovalFatalismEntity;
import com.noval.model.entity.NovalKungfuEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NovalKungfuDAO extends JpaRepository<NovalKungfuEntity,String> {



}
