# Setup

- Create a [new osu!api V2 application](https://osu.ppy.sh/home/account/edit) like the image below  
![example](https://media.discordapp.net/attachments/865037717590245436/1076186141407072266/image.png)
- `yarn` or `npm i`
- Fill `.envexample` and rename to `.env`
- Run `node .`

# How to get token

- Start the server with `node .`
- Access `https://osu.ppy.sh/oauth/authorize?client_id=<OSU CLIENT ID>&redirect_uri=http%3A%2F%2Flocalhost%3A4000&response_type=code&scope=chat.write`
