<script lang="ts">
    import './index.css';
    import { theme } from './theme';

    const toggleTheme = () => {
        if (theme.theme === 'light') {
            theme.theme = 'dark';
        } else {
            theme.theme = 'light';
        }
    };
</script>

<body>
    <h1 class="text-2xl font-bold font-ibm dark:text-red-700">Hello World!</h1>
    <button on:click={() => toggleTheme()}> Toggle Theme </button>
</body>
