<script lang="ts">
	import { base } from "$app/paths";
  import Button from "../../../components/Button.svelte";
  export let data;
  $: title = data.articles.title;
  $: auther = data.articles.authors[0].name;
  $: birth = data.articles.authors[0].birth_year;
  $: dead = data.articles.authors[0].death_year;
  $: subjects = data.articles.subjects;
  $: downloadLink = Object.values(data.articles.formats)[1];
</script>

<svelte:head>
  <title>{title} - {auther}</title>
</svelte:head>

<div class="single">
  <div class="back-link"><a href="{base}">書籍一覧に戻る</a></div>
  <h1 class="title">{title}</h1>
  <p class="name">著者: {auther} <span class="number">{birth} - {dead}</span></p>
  <p class="text">カテゴリ</p>
  <ul class="list">
    {#each subjects as subject}
      <li>{subject}</li>
    {/each}
  </ul>
  <div class="single=button">
    <Button to={downloadLink} text="download" />
  </div>
</div>

<style lang="scss">
  .single {
    .back-link {
      margin-left: -24px;
      margin-bottom: 48px;
      a {
        display: inline-block;
        text-decoration: none;
        position: relative;
        &:before {
          position: relative;
          top: -1px;
          content: '';
          display: inline-block;
          transform: rotate(-45deg);
          border-top: 1px solid #333;
          border-left: 1px solid #333;
          width: 9px;
          height: 9px;
          margin-right: 8px;
        }
      }
    }
    .title {
      font-size: 36px;
      margin-bottom: 24px;
      border-bottom: 1px solid #333;
      padding-bottom: 8px;
    }

    .list {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
      margin-bottom: 24px;

      li {
        font-size: 24px;
        margin-bottom: 8px;
        display: inline-block;
        background: #333;
        color: #fff;
        margin-right: 8px;
        padding: 0 8px;
      }
    }

    .name {
      font-size: 16px;
      span {
        font-size: 16px;
      }
    }
    
    .single-button {
      margin-top: 64px;
    }
  }
</style>