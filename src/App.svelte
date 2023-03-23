<script lang="ts">
    import './index.css';
    import { toggleTheme } from './theme';
</script>

<body>
    <h1 class="text-2xl font-bold font-ibm dark:text-red-700">Hello World!</h1>
    <button on:click={() => toggleTheme()}> Toggle Theme </button>
</body>
