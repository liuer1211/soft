package com.noval.model.service;

import com.noval.model.entity.*;

import java.math.BigInteger;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface NovalService {

    public List<NovalEntity> findData(Map<String,String> param);

    public NovalEntity findDataById(BigInteger novalId);

    public List<NovalFatalismEntity> findFatalismList(BigInteger novalId);

    public List<NovalKungfuEntity> findNovalKungfuList(BigInteger novalId);

    public List<NovalPeopleEntity> findNovalPeopleList(BigInteger novalId);

    public List<NovalSectEntity> findNovalSectList(BigInteger novalId);

    public List<NovalWeaponEntity> findNovalWeaponList(BigInteger novalId);

    public List<NovalOtherEntity> findNovalOtherList(BigInteger novalId);
}
