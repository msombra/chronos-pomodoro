import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Button } from './button';

export const Menu = () => {

    return (
        <nav className={styles.menu}>
            {/* Home */}
            <Button>
                <HouseIcon />
            </Button>

            {/* Histórico */}
            <Button>
                <HistoryIcon />
            </Button>

            {/* Configurações */}
            <Button>
                <SettingsIcon />
            </Button>

            {/* Tema */}
            <Button>
                <SunIcon />
            </Button>
        </nav>
    );

};