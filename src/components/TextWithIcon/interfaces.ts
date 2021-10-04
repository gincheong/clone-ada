export interface TextWithIconProps {
  text: Text;
  icon?: Icon;
  description?: Description;
}

interface Text {
  value: string;
  size?: number;
  color?: string;
}

interface Icon {
  size?: number;
  family?: 'EvilIcons' | 'MaterialIcons';
  name?: string;
  color?: string;
}

interface Description {
  value?: string;
  size?: number;
  color?: string;
}
