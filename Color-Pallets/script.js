document.addEventListener("DOMContentLoaded", function() {
    // Initial generation of color palettes
    generateColorPalettes();

    // Event listener for the "Generate Palettes" button
    document.getElementById('generateButton').addEventListener('click', generateColorPalettes);
});

function generateColorPalettes() {
    const colorPalettesContainer = document.getElementById('colorPalettesContainer');
    colorPalettesContainer.innerHTML = '';

    // Generate five color palettes
    for (let i = 0; i < 5; i++) {
        const paletteContainer = document.createElement('div');
        paletteContainer.classList.add('paletteContainer');

        // Generate primary and secondary colors randomly
        const primaryColor = generateRandomColor();
        const secondaryColor = generateRandomColor();

        // Generate color palette based on primary and secondary colors
        const palette = generateColorPalette(primaryColor, secondaryColor);
        palette.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.classList.add('colorBox');
            colorBox.style.backgroundColor = color;
            colorBox.setAttribute('title', color);
            colorBox.addEventListener('click', () => copyToClipboard(color));
            paletteContainer.appendChild(colorBox);
        });

        // Add the color palette to the container
        colorPalettesContainer.appendChild(paletteContainer);
    }
}

function generateColorPalette(primaryColor, secondaryColor) {
    // Generate a palette with all five colors derived from primary and secondary colors
    // You can implement your color generation logic here
    const palette = [];

    // Push the primary and secondary colors
    palette.push(primaryColor);
    palette.push(secondaryColor);

    // Generate intermediate colors
    for (let i = 0; i < 3; i++) {
        palette.push(generateRandomColor());
    }

    return palette;
}

function generateRandomColor() {
    // Generate a random hexadecimal color
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function copyToClipboard(color) {
    navigator.clipboard.writeText(color)
        .then(() => alert('Color copied to clipboard: ' + color))
        .catch(err => console.error('Failed to copy color: ', err));
}
