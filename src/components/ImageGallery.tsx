type ImageGalleryProps = {
  item: {
    id: string;
    // Add fields based on the structure of your Firestore data, e.g.:
    url?: string;
    title?: string;
  };
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      {/* {item.url && <img src={item.url} alt={item.title || "Image"} />}  */}
    </div>
  );
};

export default ImageGallery;