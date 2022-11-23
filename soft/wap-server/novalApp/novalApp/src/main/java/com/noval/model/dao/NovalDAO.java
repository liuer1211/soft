package com.noval.model.dao;

import com.noval.model.entity.NovalEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NovalDAO extends JpaRepository<NovalEntity,String> {



}
