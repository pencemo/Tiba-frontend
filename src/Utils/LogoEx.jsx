import { useChangeTheme } from '@/Context/Theme';
import blackLogo from '../assets/Logo.svg';
import whiteLogo from '../assets/Logo2.svg';

export const useLogo = ()=>{
    const { isDark } = useChangeTheme();
    return isDark ? whiteLogo : blackLogo;
}