import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Button } from './button';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export const Menu = () => {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return localStorage.getItem('theme') as AvailableThemes || 'dark';
    });

    const handleThemeChange = () => {
        setTheme(prevTheme => {
            return prevTheme === 'dark' ? 'light' : 'dark';
        });
    };

    // #### --- Explicação sobre useEffect --- ####

    // useEffect(() => {
    //     console.log('useEffect sem dependências', Date.now());
    // }); // Executado toda vez que o componente renderiza na tela

    // useEffect(() => {
    //     console.log('useEffect com array de deps vazio', Date.now());
    // }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]); // Executa apenas quando o valor de theme muda

    // ############################################

    return (
        <nav className={styles.menu}>
            {/* Home */}
            <Button
                aria-label="Ir para a Home"
                title="Ir para a Home"
            >
                <HouseIcon />
            </Button>

            {/* Histórico */}
            <Button
                aria-label="Ver Histórico"
                title="Ver Histórico"
            >
                <HistoryIcon />
            </Button>

            {/* Configurações */}
            <Button
                aria-label="Ir para página de Configurações"
                title="Ir para página de Configurações"
            >
                <SettingsIcon />
            </Button>

            {/* Tema */}
            <Button
                aria-label="Mudar Tema"
                title="Mudar Tema"
                onClick={handleThemeChange}
            >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
        </nav>
    );

};