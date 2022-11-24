package com.noval.model.dao;

import com.noval.model.entity.NovalPeopleEntity;
import com.noval.model.entity.NovalSectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NovalPeopleDAO extends JpaRepository<NovalPeopleEntity,String> {



}
