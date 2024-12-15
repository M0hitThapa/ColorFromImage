import PropTypes from 'prop-types'; // Import PropTypes
import ListItem from "./Items";

function ImageShow({ uploadedImage, colorPalette }) {
    const toHex = (rgb) => {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    return (
        <div className="flex flex-col items-center justify-center px-4">
            {/* Image Section */}
            <div className="flex h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg justify-center items-center mb-6">
                {uploadedImage ? (
                    <img
                        src={uploadedImage}
                        alt="uploaded"
                        className="rounded-lg shadow-lg w-3/4 sm:w-2/3 object-contain"
                    />
                ) : null}
            </div>

            {/* Color Palette Section */}
            {colorPalette && (
                <ul className="flex flex-wrap gap-3 justify-center">
                    {colorPalette.map((color, index) => {
                        const rgb = `rgb(${color.join(",")})`;
                        const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`;
                        console.log(rgb, hex);

                        return <ListItem key={index} rgb={rgb} hex={hex} />;
                    })}
                </ul>
            )}

            {/* Instruction */}
            <h1 className="text-yellow-400 text-sm sm:text-base md:text-lg mt-4 text-center">
                Click <span className="text-2xl sm:text-3xl text-white">Color</span> to Copy
            </h1>
        </div>
    );
}

// Add prop validation
ImageShow.propTypes = {
    uploadedImage: PropTypes.string,
    colorPalette: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)), // colorPalette is an array of arrays, each containing numbers (RGB values)
};

export default ImageShow;
