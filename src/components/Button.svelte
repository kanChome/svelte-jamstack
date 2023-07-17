<script lang="ts">
  export let to: any
  export let text: string
</script>

<div class="button-container">
  <a href="{to}" target="_blank" class="button">{text}</a>
</div>

<style lang="scss">
  .button-container {
    display: grid;
    border: 1px solid #333;
    color: #333;
    transition: 0.3s ease-out;
    transition-property: border, color background;

    &:hover {
      background: #eee;
      border: 1px solid #999;
    }

    .button {
      padding: 24px;
      text-decoration: none;
      font-family: serif;
      color: #333;
      text-align: center;

    }
  }
</style>