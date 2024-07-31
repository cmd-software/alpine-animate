export default function (Alpine) {
    Alpine.data('animate', (config = { offset: '-10%' }) => ({
        shown: false,

        root: {
            [`x-intersect.once.threshold.0.margin.0.0.${config.offset}.0`]() {
                this.shown = true
            },
        },

        init() {
            Alpine.bind(this.$root, this.root)
        }
    }))

    Alpine.directive('animate', (el, { value, modifiers, expression }) => {
        const styleConfig = {
            '--animate-duration': '1s',
            '--animate-delay': '0s',
        };

        expression = expression || 'fadeInUp'

        if (modifiers.includes('duration')) { styleConfig.animationDuration = modifiers[modifiers.indexOf('duration') + 1] }

        if (modifiers.includes('delay')) { styleConfig.animationDelay = modifiers[modifiers.indexOf('delay') + 1] }

        el.setAttribute('x-bind:style', JSON.stringify(styleConfig))

        el.setAttribute('x-bind:class', `{'!opacity-100 animate__animated animate__${expression}': shown, 'opacity-0': ! shown}`)
    })
}