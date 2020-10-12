import request from '@/utils/request'
export function initiateProbe(country, language) {
    return request({
      url: '/nslab/crawler/start',
      method: 'post',
      data: {
        country: country,
        language: language
      }
    })
}

export function closeProbe(id) {
    return request({
      url: `/nslab/crawler/close/${id}`,
      method: 'delete',
    });
}

export function getProbeList() {
    return request({
      url: '/nslab/crawler/status',
      method: 'get',
    })
}

  