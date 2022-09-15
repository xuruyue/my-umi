import { request } from 'umi'
import { message } from 'antd';


// 获取表格数据的接口
export const getTaleData = async () => {
    return request('api/users', {
        method: 'get',
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// 更新数据的接口
export const updateTable = ({value, id}) => {
    return request(`/api/users/${id}`, {
        method: 'put',
        data: value
    })
        .then(function (response) {
            console.log(response);
            message.success('Edit successfully!!')
        })
        .catch(function (error) {
            message.error('Edit Failed!!')
        });
}

// 删除数据的接口
export const deleteTable = ({ id }) => {
    return request(`/api/users/${id}`, {
        method: 'delete'
    })
    .then(function (response) {
        message.success('Delete successfully!!')
    })
    .catch(function (error) {
        message.error('Delete Failed!!')
    });
}

// 添加数据的接口
export const addTable = ({value}) => {
    console.log(value, 'value')
    return request(`/api/users`, {
        method: 'post',
        data: value
        
    })
    .then(function (response) {
        message.success('Add successfully!!')
    })
    .catch(function (error) {
        message.error('Add Failed!!')
    });
}