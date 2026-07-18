export function generateRandomColor (): string {
    const hexCharacters = "0123456789ABCDEF"

    let randomColor = "#"

    for (let i = 0; i <6; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharacters.length)
        randomColor += hexCharacters[randomIndex]
    }

    return randomColor
}