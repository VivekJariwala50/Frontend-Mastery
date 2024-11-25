import { AKBasicCard, AKImageCropper, AKHead } from "@components";

const AKImageCropperPage = () => {
  return (
    <>
      <AKHead title="Image Cropper"></AKHead>
      <AKBasicCard cardTitle="Image Cropper:">
        <AKImageCropper />
      </AKBasicCard>
    </>
  );
};

export default AKImageCropperPage;
