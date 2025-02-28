import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      // path="/logo.png"
      src={src}
      className={className}
      loading="lazy"
      alt={alt}
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
    />
  );
};

export default Image;
