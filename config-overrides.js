module.exports = (config) => {
    require('react-app-rewire-postcss')(config, {
        plugins: loader => [
            require('postcss-import')(),
            require('postcss-extend')(),
            require('postcss-nesting')(),
            require('postcss-assets')(),
            require('postcss-responsive-type')(),
            require('postcss-pxtorem')({
                mediaQuery: false,
                minPixelValue: 0,
                propWhiteList: [],
                replace: true,
                rootValue: 16,
                selectorBlackList: ['html'],
                unitPrecision: 5
            }),
            require('postcss-preset-env')({
                stage: 3
            })
        ]
    })

    return config
}
