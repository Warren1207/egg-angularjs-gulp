'use strict'

module.exports = () => {
    return async function saveSession(ctx, next) {
        await next();
        // 如果 Session 是空的，则不保存
        if (!ctx.session.populated) return;
        ctx.session.save();
    };
};