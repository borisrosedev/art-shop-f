import './styles.scss';
import router from './router';

export default function main() {
    console.log('import.meta.env.DEV', import.meta.env.DEV);
    console.log('main.ts');
    router();
}

main();
