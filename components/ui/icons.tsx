export const Icons = ({ icon, props }: any) => {
  const DynamicIcon = require('lucide-react')[icon];
  if (!DynamicIcon) return null;

  return <DynamicIcon {...props} />;
};
