package com.xm.admin.common.vo;

import lombok.Data;

import java.io.Serializable;

/**
 * @author xiaomalover <xiaomalover@gmail.com>
 */
@Data
public class IpLocate implements Serializable {

    private String retCode;

    private City result;
}

