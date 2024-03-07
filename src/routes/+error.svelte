<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="container my-5">
  <h1>{$page.status}</h1>
  <h2>{$page.error?.message}</h2>
</div>
