<script lang="ts">
  export let code = "";
  export let className = "";

  function escapeHtml(str: string){
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // minimal highlighting for strings and comments
  $: highlighted = escapeHtml(code)
    .replace(/("[^"]*"|'[^']*')/g, '<span class="text-accent">$1</span>')
    .replace(/(\/\/.*$)/mg, '<span class="text-muted">$1</span>');
</script>

<div class={`terminal ${className}`} role="region" aria-label="Terminal">
  <div class="terminal-bar mb-2 flex items-center gap-2 text-xs">
    <div class="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
    <div class="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
    <div class="w-2 h-2 rounded-full bg-[#27c93f]"></div>
    <div class="ml-auto font-mono text-xs uppercase text-muted">bash</div>
  </div>
  <pre class="whitespace-pre-wrap"><code>{@html highlighted}</code></pre>
</div>

<style>
  :global(.text-accent) { color: var(--accent); }
  :global(.text-muted) { color: var(--muted); }
</style>
