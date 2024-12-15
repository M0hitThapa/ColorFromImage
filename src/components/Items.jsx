import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

const copy = <i className="far fa-copy"></i>;

function ListItem({ rgb, hex }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (e) => {
        const color = e.target.innerText;
        navigator.clipboard.writeText(color);
    };

    return (
        <li style={{ background: rgb }} className="p-3 mb-2 text-lg font-semibold shadow-md shadow-zinc-900 rounded-lg cursor-pointer text-black transition-colors">
            <span
                onClick={(e) => {
                    copyToClipboard(e);
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 1000);
                }}
                className="flex items-center gap-2"
            >
                {copied ? (
                    <span className="text-black">Copied!</span>
                ) : (
                    <>
                        <span>{hex}</span>
                        {copy}
                    </>
                )}
            </span>
        </li>
    );
}

// Prop validation
ListItem.propTypes = {
    rgb: PropTypes.string.isRequired,  // Ensure rgb is passed as a string
    hex: PropTypes.string.isRequired,  // Ensure hex is passed as a string
};

export default ListItem;
