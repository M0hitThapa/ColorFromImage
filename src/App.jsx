import { useState } from "react";
import ImageShow from "./components/ImageShow";
import { Upload } from "lucide-react";
import ColorThief from "colorthief";

const gallery = <i className="fas fa-images"></i>;

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(img, );
        setUploadedImage(event.target.result);
        setColorPalette(palette);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <header className="absolute flex flex-col top-14 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-yellow-400">
          Transform Your Image Into{" "}
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl bg-gradient-to-r from-rose-400/50 to-green-400/50 rounded-lg">
            Colors
          </span>
        </h1>

        {!uploadedImage ? (
      
      <div className="flex flex-col items-center justify-center h-28 w-60 mx-auto mt-40 shadow-inner shadow-yellow-700 rounded-lg bg-zinc-900">
      <label
        htmlFor="file"
        className="flex items-center gap-2 text-lg font-medium text-white cursor-pointer hover:text-blue-500"
      >
        <Upload className="w-5 h-5 text-blue-500" />
        {gallery} Upload Image
      </label>
      <input type="file" id="file" hidden onChange={uploadImage} />
    </div>
    
      ) : null}
      
      </header>

      <main className="mt-56 flex justify-center items-center">
        {colorPalette && colorPalette.length > 0 && (
          <ImageShow uploadedImage={uploadedImage} colorPalette={colorPalette}
           />
           
        )}
      </main>
    </div>
  );
}
