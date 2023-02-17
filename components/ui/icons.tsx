export const Icons = ({ icon }: { icon: string }) => {
  const DynamicIcon = require('lucide-react')[icon];
  if (!DynamicIcon) return null;

  return <DynamicIcon />;
};
