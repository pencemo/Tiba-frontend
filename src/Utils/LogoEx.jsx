import { useChangeTheme } from '@/Context/Theme';
import blackLogo from '../assets/logo.svg';
import whiteLogo from '../assets/logo2.svg';

export const useLogo = ()=>{
    const { isDark } = useChangeTheme();
    return isDark ? whiteLogo : blackLogo;
}