<template>
  <div>
    <header>
        <h1>网站标题</h1>
    </header>

    <nav>
        <a href="#">首页</a>
        <a href="#">关于我们</a>
        <a href="#">服务</a>
        <a href="#">联系我们</a>
    </nav>

    <div class="container">
        <div class="content">
            <div class="placeholder-image"></div>
            <div class="placeholder-image"></div>
            <div class="placeholder-image"></div>

        </div>
    </div>

    <footer>
        <p>版权所有 &copy; 2024 网站名称</p>
    </footer>
  </div>
</template>

<script>
export default {
    name:'AdvanceMod'
}
</script>

<style>
       /* body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        /* header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 1em 0;
        } */
        /* nav {
            display: flex;
            justify-content: center;
            padding: 1em 0;
            background-color: #f1f1f1;
        }
        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #4CAF50;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2em 0;
        }
        .content {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
        }
        .content .placeholder-image {
            background-color: #c0c0c0;
            width: 100%;
            height: 200px;
            margin-bottom: 1em;
        }
        .content .placeholder-text {
            background-color: #e0e0e0;
            width: 100%;
            height: 1.5em;
            margin-bottom: 1em;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em 0;
            position: relative;
            width: 100%;
        }
        @media (min-width: 600px) {
            nav a {
                margin: 0 20px;
            }
            .content {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .content .placeholder-image, .content .placeholder-text {
                width: 48%;
            }
        }
        @media (min-width: 900px) {
            nav {
                justify-content: flex-start;
            }
            .content .placeholder-image, .content .placeholder-text {
                width: 31%;
            }
        } */
</style> 