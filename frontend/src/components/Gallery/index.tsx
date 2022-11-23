import { useEffect, useState } from "react";
import { GalleryProps } from "../../types/Gallery";
import { MockedData } from "../../mocks/Gallery";

export function Gallery() {
  const [mockedData, setMockedData] = useState<GalleryProps>();

  useEffect(() => {
    setMockedData(MockedData)
  }, []);

  return (
    <>
      <h1>GALLERY Component</h1>

      <p>{mockedData?.text}</p>

      <ul>
        {
          mockedData?.images.map((image) => {
            return (
              <a href="#" key={image.id}>
                <li id={image.id}>
                  <span>{image.span}</span>
                </li>
              </a>
            )
          })
        }
      </ul>
    </>
  );
};