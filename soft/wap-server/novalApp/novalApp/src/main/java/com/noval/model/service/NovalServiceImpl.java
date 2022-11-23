package com.noval.model.service;

import com.noval.model.dao.*;
import com.noval.model.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.math.BigInteger;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class NovalServiceImpl implements NovalService{

    @Autowired
    private NovalDAO novalDAO;

    @Autowired
    private NovalFatalismDAO novalFatalismDAO;

    @Autowired
    private NovalKungfuDAO novalKungfuDAO;

    @Autowired
    private NovalOtherDAO novalOtherDAO;

    @Autowired
    private NovalPeopleDAO novalPeopleDAO;

    @Autowired
    private NovalSectDAO novalSectDAO;

    @Autowired
    private NovalWeaponDAO novalWeaponDAO;

    @Override
    public List<NovalEntity> findData(Map<String,String> param) {

        return this.novalDAO.findAll();
    }

    @Override
    public NovalEntity findDataById(BigInteger novalId) {
        NovalEntity t =new NovalEntity();
        t.setId(novalId);
        Example<NovalEntity> reqParam = Example.of(t);
        List<NovalEntity> list = this.novalDAO.findAll(reqParam);
        if(!CollectionUtils.isEmpty(list)){
           return list.get(0);
        }
        return null;
    }

    @Override
    public List<NovalFatalismEntity> findFatalismList(BigInteger novalId) {
        NovalFatalismEntity t =new NovalFatalismEntity();
        t.setNovalId(novalId);
        Example<NovalFatalismEntity> reqParam = Example.of(t);
        return this.novalFatalismDAO.findAll(reqParam);
    }

    @Override
    public List<NovalKungfuEntity> findNovalKungfuList(BigInteger novalId) {
        NovalKungfuEntity t =new NovalKungfuEntity();
        t.setNovalId(novalId);
        Example<NovalKungfuEntity> reqParam = Example.of(t);
        return this.novalKungfuDAO.findAll(reqParam);
    }

    @Override
    public List<NovalPeopleEntity> findNovalPeopleList(BigInteger novalId) {
        NovalPeopleEntity t =new NovalPeopleEntity();
        t.setNovalId(novalId);
        Example<NovalPeopleEntity> reqParam = Example.of(t);
        return this.novalPeopleDAO.findAll(reqParam);
    }

    @Override
    public List<NovalSectEntity> findNovalSectList(BigInteger novalId) {
        NovalSectEntity t =new NovalSectEntity();
        t.setNovalId(novalId);
        Example<NovalSectEntity> reqParam = Example.of(t);
        return this.novalSectDAO.findAll(reqParam);
    }

    @Override
    public List<NovalWeaponEntity> findNovalWeaponList(BigInteger novalId) {
        NovalWeaponEntity t =new NovalWeaponEntity();
        t.setNovalId(novalId);
        Example<NovalWeaponEntity> reqParam = Example.of(t);
        return this.novalWeaponDAO.findAll(reqParam);
    }

    @Override
    public List<NovalOtherEntity> findNovalOtherList(BigInteger novalId) {
        NovalOtherEntity t =new NovalOtherEntity();
        t.setNovalId(novalId);
        Example<NovalOtherEntity> reqParam = Example.of(t);
        return this.novalOtherDAO.findAll(reqParam);
    }
}
