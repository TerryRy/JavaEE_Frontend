import {get} from '@/util/axios'
// import {post} from '@/util/axios'
/**
 * 分页查询接口
 * @param params
 * @returns {Promise<unknown>}
 */
export function queryArticle(params) {
    return get('/article/selectAll', params)
}

/**
 * 查询详情
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export function queryArticleDetail(params) {
    return get('/article/queryDetail', params)
}


/**
 * 新增接口
 * @param params
 * @returns {Promise<unknown>}
 */
export function insertArticle(params) {
    alert("Insert"+params);
    // return post('/api/blog/upload', params)
}

export function deleteArticle(params){
    return delete('/api/blog/delete/',params)
}