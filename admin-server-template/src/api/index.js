// 统一请求路径前缀在libs/axios.js中修改
import { getRequest, postRequest, putRequest, deleteRequest, uploadFileRequest } from '@/libs/axios';

export const uploadFile = (params) => {
    return uploadFileRequest('/upload/local', params)
};

//获取验证码id
export const initCaptcha = (params) => {
    return getRequest('/common/captcha/init')
};

//获取验证码
export const getCaptcha = (id, params) => {
    return getRequest(`/common/captcha/draw/${id}`)
};

// 登陆
export const login = (params) => {
    return postRequest('/login', params)
};
// 获取用户登录信息
export const userInfo = (params) => {
    return getRequest('/user/info', params)
};
// 个人中心编辑
export const userInfoEdit = (params) => {
    return postRequest('/user/edit', params)
};
// 个人中心修改密码
export const changePass = (params) => {
    return postRequest('/user/modifyPass', params)
};
// 解锁
export const unlock = (params) => {
    return postRequest('/user/unlock', params)
};
// 获取用户数据 多条件
export const getUserListData = (params) => {
    return getRequest('/user/getByCondition', params)
};
// 添加用户
export const addUser = (params) => {
    return postRequest('/user/admin/add', params)
};
// 编辑用户
export const editUser = (params) => {
    return postRequest('/user/admin/edit', params)
};
// 启用用户
export const enableUser = (id, params) => {
    return postRequest(`/user/admin/enable/${id}`, params)
};
// 禁用用户
export const disableUser = (id, params) => {
    return postRequest(`/user/admin/disable/${id}`, params)
};
// 删除用户
export const deleteUser = (ids, params) => {
    return deleteRequest(`/user/delByIds/${ids}`, params)
};



// 获取一级部门
export const initDepartment = (params) => {
    return getRequest('/department/getByParentId/0', params)
};
// 加载部门子级数据
export const loadDepartment = (id, params) => {
    return getRequest(`/department/getByParentId/${id}`, params)
};
// 添加部门
export const addDepartment = (params) => {
    return postRequest('/department/add', params)
};
// 编辑部门
export const editDepartment = (params) => {
    return postRequest('/department/edit', params)
};
// 删除部门
export const deleteDepartment = (ids, params) => {
    return deleteRequest(`/department/delByIds/${ids}`, params)
};


// 获取全部角色数据
export const getAllRoleList = (params) => {
    return getRequest('/role/getAllList', params)
};
// 分页获取角色数据
export const getRoleList = (params) => {
    return getRequest('/role/getAllByPage', params)
};
// 添加角色
export const addRole = (params) => {
    return postRequest('/role/save', params)
};
// 编辑角色
export const editRole = (params) => {
    return postRequest('/role/edit', params)
};
// 设为或取消注册角色
export const setDefaultRole = (params) => {
    return postRequest('/role/setDefault', params)
};
// 分配角色权限
export const editRolePerm = (id, params) => {
    return postRequest(`/role/editRolePerm/${id}`, params)
};
// 删除角色
export const deleteRole = (ids, params) => {
    return deleteRequest(`/role/delAllByIds/${ids}`, params)
};


// 获取全部权限数据
export const getAllPermissionList = (params) => {
    return getRequest('/permission/getAllList', params)
};
// 添加权限
export const addPermission = (params) => {
    return postRequest('/permission/add', params)
};
// 编辑权限
export const editPermission = (params) => {
    return postRequest('/permission/edit', params)
};
// 删除权限
export const deletePermission = (ids, params) => {
    return deleteRequest(`/permission/delByIds/${ids}`, params)
};


// 分页获取日志数据
export const getLogListData = (params) => {
    return getRequest('/log/getAllByPage', params)
};
// 搜索获取日志数据
export const getSearchLogData = (params) => {
    return getRequest('/log/search', params)
};
// 删除日志
export const deleteLog = (ids, params) => {
    return deleteRequest(`/log/delByIds/${ids}`, params)
};
// 清空日志
export const deleteAllLog = (params) => {
    return deleteRequest('/log/delAll', params)
};

// 获取配置数据 多条件
export const getConfigListData = (params) => {
    return getRequest('/config/getByCondition', params)
};
// 添加配置
export const addConfig = (params) => {
    return postRequest('/config/add', params)
};
// 编辑配置
export const editConfig = (params) => {
    return postRequest('/config/edit', params)
};
// 启用配置
export const enableConfig = (id, params) => {
    return postRequest(`/config/enable/${id}`, params)
};
// 禁用配置
export const disableConfig = (id, params) => {
    return postRequest(`/config/disable/${id}`, params)
};
// 删除配置
export const deleteConfig = (ids, params) => {
    return deleteRequest(`/config/delByIds/${ids}`, params)
};

//首页数据，主要是统计
export const getDashboardData = () => {
    return getRequest('/home/statistics')
};

// 分页获取定时任务数据
export const getQuartzListData = (params) => {
    return getRequest('/quartzJob/getAllByPage', params)
};
// 添加定时任务
export const addQuartz = (params) => {
    return postRequest('/quartzJob/add', params)
};
// 编辑定时任务
export const editQuartz = (params) => {
    return postRequest('/quartzJob/edit', params)
};
// 暂停定时任务
export const pauseQuartz = (params) => {
    return postRequest('/quartzJob/pause', params)
};
// 恢复定时任务
export const resumeQuartz = (params) => {
    return postRequest('/quartzJob/resume', params)
};
// 删除定时任务
export const deleteQuartz = (ids, params) => {
    return deleteRequest(`/quartzJob/delByIds/${ids}`, params)
};
// 获取分润日志列表
export const getProfitLogs = (params) => {
    return getRequest(`/profit/getByCondition`, params)
};
// 获取代理列表
export const getAgents = (params) => {
    return getRequest(`/agent/getByCondition`, params)
};
// 编辑代理
export const editMobile = (params) => {
    return postRequest(`/agent/changeMobile`, params)
};
// 编辑代理
export const editRecommend = (params) => {
    return postRequest(`/agent/changeRelation`, params)
};
// 编辑代理
export const editLevel = (params) => {
    return postRequest(`/agent/changeLevel`, params)
};
// 添加代理
export const addAgent = (params) => {
    return postRequest('/agent/add', params)
};
//检验推荐人
export const checkRecommend = (params) => {
    return postRequest('/agent/checkRecommend', params)
};
//获取用户的推荐人
export const getRecommend = (params) => {
    return postRequest('/agent/getMyRecommend', params)
};
//获取用户的推荐人
export const enableAreaAgent = (id, params) => {
    return postRequest(`/agent/enableAreaAgent/${id}`, params)
};
//获取用户的推荐人
export const disableAreaAgent = (id, level, params) => {
    return postRequest(`/agent/disableAreaAgent/${id}/${level}`, params)
};