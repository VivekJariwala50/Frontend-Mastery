import { AKBasicCard, AKTextEditor, AKHead } from "@components";
const AKTextEditorPage = () => {
  return (
    <>
      <AKHead title="Text Editor"></AKHead>
      <AKBasicCard cardTitle="Basic Text Editor:">
        <AKTextEditor />
      </AKBasicCard>
    </>
  );
};

export default AKTextEditorPage;
