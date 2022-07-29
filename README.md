## Description

Mobile Eco System Docker Container (Api + Web + Postgresql DB)

Api URL - http://localhost:3005/

Web URL - http://localhost:3000/


## Installation

```bash
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

Docker Permission
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
$ newgrp docker
$ docker run hello-world

```

## Running the app

```bash
$ docker compose -f docker-compose-dev.yml up
```
