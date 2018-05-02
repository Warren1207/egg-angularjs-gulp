'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');

class HomeController extends Controller {
  async index() {
      const { ctx } = this;
      const file = path.resolve(this.app.config.static.dir, 'index.html');
      ctx.set('Content-Type', 'text/html');
      ctx.body = await fs.readFileSync(file);
  }
}

module.exports = HomeController;
