
interface TemplateBoxProps {
  setContent: (content: string) => void;
}

export const TemplateBox: React.FC<TemplateBoxProps> = ({ setContent }) => {
  const templates = [
    "Hello World",
    "Sample Text",
    "Another Example",
    "tanstack の version は 5.4.3 なので、適切な document は検索して"
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

