const { resolve } = require('path')

module.exports = config => {
  let { alias = {}, extensions = [], mainFields = [] } = config.resolve
  alias.svelte = resolve('node_modules', 'svelte')
  mainFields = ['svelte', ...mainFields]
  extensions = [...extensions, '.svelte']

  config.module.rules.push({
    test: /\.(html|svelte)$/,
    exclude: /node_modules/,
    use: {
      loader: 'svelte-loader',
      options: {
        emitCss: true
      },
    },
  })

  return config
}
