
interface TemplateBoxProps {
  setContent: (content: string) => void;
}

export const TemplateBox: React.FC<TemplateBoxProps> = ({ setContent }) => {
  const templates = [
    "Hello World",
    "Sample Text",
    "Another Example",
    // Add more templates as needed
  ];

  const handleTemplateSelect = (template: string) => {
    setContent(template);
  };

  return (
    <div>
      <h3>Select a Template</h3>
      {templates.map((template, index) => (
        <button key={index} onClick={() => handleTemplateSelect(template)}>
          {template}
        </button>
      ))}
    </div>
  );
};

