# expired_coconut

Animated wavy grid with overlapping sine and cosine waves.

<img width="1800" height="1800" alt="coconut_0004" src="https://github.com/user-attachments/assets/6985f357-169d-472c-937f-5472a3c28727" />


## Requirements

- [Processing 3.x or later](https://processing.org/)
- [JetBrainsMono font file](https://www.jetbrains.com/lp/mono/)

## Installation

1. Clone or download this repository
2. Place the font file in the `data` folder
3. Open the `.pde` file in Processing
4. Run the sketch

## How it Works

The sketch draws horizontal and vertical lines with combined sine and cosine wave distortions that animate over time. Text is rendered at the center.

## Configuration

Adjust these variables in the code to customize the output:

- `spacing` — grid line spacing (default: 20)
- `blueColor` — line and text color (default: #000dfe)
- Wave multipliers (0.02, 0.01, etc.) — adjust wave frequency and amplitude
- `offset` increment — animation speed (default: 0.05)

## License

MIT
