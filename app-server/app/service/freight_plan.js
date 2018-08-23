'use strict';

const Service = require('egg').Service;

/**
 * Service - 运费方案
 * @class
 * @author ruiyong-lee
 */
class FreightPlanService extends Service {
  /**
   * 查询默认运费方案
   * @param {Object} params 条件
   * @return {Object|Null} 查找结果
   */
  async getDefault(params = {}) {
    const { app } = this;
    const resultList = await app.model.FreightPlan.getDefault({
      ...params,
      attributes: ['uuid', 'basicFreight', 'freeFreightAmount'],
    });

    return resultList;
  }
}

module.exports = FreightPlanService;
