// from ts-loader discussion: https://github.com/TypeStrong/ts-loader/issues/653

const ModuleDependencyWarning = require('webpack/lib/ModuleDependencyWarning');

module.exports = class IgnoreNotFoundExportPlugin {
    // eslint-disable-next-line class-methods-use-this
    apply(compiler) {
        const messageRegExp =
            /export '.*'( \(reexported as '.*'\))? was not found in/;
        function doneHook(stats) {
            // eslint-disable-next-line no-param-reassign
            stats.compilation.warnings = stats.compilation.warnings.filter(
                warn => {
                    if (
                        warn instanceof ModuleDependencyWarning &&
                        messageRegExp.test(warn.message)
                    ) {
                        return false;
                    }
                    return true;
                },
            );
        }
        if (compiler.hooks) {
            compiler.hooks.done.tap('IgnoreNotFoundExportPlugin', doneHook);
        } else {
            compiler.plugin('done', doneHook);
        }
    }
};
