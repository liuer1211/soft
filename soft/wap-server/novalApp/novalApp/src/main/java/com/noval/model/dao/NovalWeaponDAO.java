package com.noval.model.dao;

import com.noval.model.entity.NovalSectEntity;
import com.noval.model.entity.NovalWeaponEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NovalWeaponDAO extends JpaRepository<NovalWeaponEntity,String> {



}
