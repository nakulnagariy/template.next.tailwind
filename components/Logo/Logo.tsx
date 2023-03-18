import Image from 'next/image';
import { useTheme } from 'next-themes';

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const Logo_src = currentTheme === 'dark' ? '/Logo-dark.svg' : '/Logo.svg';
  return (
    <Image src={Logo_src} alt='Budget Manager' width={width} height={height} />
  );
};

export default Logo;
