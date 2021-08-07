import chroma from 'chroma-js'

export default {
    colors: {
        primary: "#7a08c6",
        primary500: chroma("#7a08c6").darken(0.5).css(),
        primary100: chroma("#7a08c6").darken(0.1).css()
    },
    components: {
        Text: {
            fontFamily: "regular"
        }
    }
}
