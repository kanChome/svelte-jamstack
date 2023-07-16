<div class="container">
  <header id="header">
    <h1>Sample Site</h1>
    <a href="/clock/" class="link">clock</a>
  </header>
  <main id="main">
    <slot />
  </main>
  <footer id="footer">
    <p> kanChome</p>
  </footer>
</div>

<style lang="scss">
  * {
    font-family: serif;
  }

  .container {
    box-sizing: border-box;
    max-width: 768px;
    padding: 0 16px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    #header {
      font-weight: bold;
      margin: 0;
      padding: 12px 0;
      border-bottom: 1px solid #ddd;
      font-size: 24px;
      margin-bottom: 64px;
    }

    #main {
      flex: 1;
      min-height: calc(100vh - 240px);
    }

    #footer {
      border-top: 1px solid #ddd;
      font-weight: bold;
      margin-top: 24px;
      padding: 12px 0;
      font-size: 12px;
      text-align: center;
    }
  }
</style>