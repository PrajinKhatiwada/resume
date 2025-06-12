import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { toggleTheme, setTheme } from '../store/slices/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const toggle = () => dispatch(toggleTheme());
  const setMode = (dark: boolean) => dispatch(setTheme(dark));

  return { isDark, toggle, setMode };
};