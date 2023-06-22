<div align="center">
    <img src="https://github.com/jeffsLM/prg-app/raw/master/public/images/logo_prg_tm%402x.png" alt="PRG Logo">
</div>

<h1 align="center">PRG - Table Master API</h1>
<div  align="center">

![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Badge](https://img.shields.io/badge/TYPEORM-orange?style=for-the-badge)

</div>
<div  align="center">

![Badge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

</div>
<p align="center">API to manage sessions, characters, items and skills within PRG - Table Master</p>

<h2>About the project </h2>

<p>
The PRG comes with the aim of facilitating the start of sessions, making skills, items, proficiency or any other requirement instantly drawn and given to the player. With it, we seek to reduce the preparation time and increase the playing time. <br> Enjoy and roll the dice! 🎲</p>

<h2>Getting Started</h2>
<p>To run PRG in your computer, first run the following command to install the dependencies and launcher docker:</p>

```bash
 yarn install
 docker compose up
```

after running the command, you can run the migrations and popoulate the database with tables, with the command:

```bash
 yarn typeorm migrations:run
```

<h2>Related Projects</h2>
<p>I also created an application that consumes PRG API data, how about checking out the <a href="https://github.com/jeffsLM/prg-app">PRG APP</a>?</p>

<h2>Contributing</h2>
<p>Feel like contributing? Fantastic! but at the moment this project is on pause, but feel free to open a PR</p>

<h2>License</h2>
<p>MIT © <a href="https://github.com/jeffsLM">jeffsLM</a></p>
