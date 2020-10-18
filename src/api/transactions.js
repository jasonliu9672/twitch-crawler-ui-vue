import request from '@/utils/request'
export function getAllCollections() {
    return request({
      url: '/nslab/database/collection/list',
      method: 'get',
    })
}

export function getAllTransactionFromCollection(collectionName) {
    return request({
      url: `/nslab/database/collection/${collectionName}`,
      method: 'get',
    });
}

export function getUniqueIpFromCollection(collectionName) {
    return request({
      url: `/nslab/database/collection/${collectionName}/uniqueip`,
      method: 'get',
    })
}