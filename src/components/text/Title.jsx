export default function Title({text, level, color='black'}) {
    const titlestyle = {
        color: color
    }

    if (level === 1) return <h1 style={titlestyle}>{text}</h1>
    if (level === 2) return <h2 style={titlestyle}>{text}</h2>
    return <h3 style={titlestyle}>{text}</h3>
}