package com.xm.admin.config.security;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.xm.admin.module.base.entity.Admin;
import com.xm.admin.module.base.service.IAdminService;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import com.xm.admin.config.exception.LoginFailLimitException;
import cn.hutool.core.util.StrUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import javax.servlet.http.HttpServletRequest;
import java.util.concurrent.TimeUnit;

/**
 * @author xiaomalover <xiaomalover@gmail.com>
 */
@Slf4j
@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private StringRedisTemplate redisTemplate;

    @Autowired
    private IAdminService adminService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //首先验证一下验证码
        if (!checkCaptcha()) {
            //超过限制次数
            throw new LoginFailLimitException("验证码错误");
        }

        String flagKey = "loginFailFlag:" + username;
        String value = redisTemplate.opsForValue().get(flagKey);
        Long timeRest = redisTemplate.getExpire(flagKey, TimeUnit.MINUTES);
        if (StrUtil.isNotBlank(value)) {
            //超过限制次数
            throw new LoginFailLimitException("登录错误次数超过限制，请" + timeRest + "分钟后再试");
        }
        Admin user = adminService.getOne(new QueryWrapper<Admin>().eq("username", username));
        return new SecurityUserDetails(user);
    }

    private boolean checkCaptcha() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String captchaId = request.getParameter("captchaId");
        String captcha = request.getParameter("captcha");

        if (StringUtils.isEmpty(captchaId) || StringUtils.isEmpty(captcha)) {
            return false;
        }

        //从缓存中获取验证码
        String right = redisTemplate.opsForValue().get(captchaId);
        if (StringUtils.isEmpty(right)) {
            return false;
        }
        return captcha.toLowerCase().equals(right.toLowerCase());
    }
}
