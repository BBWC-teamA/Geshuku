# Geshuku

The matching system for students and circles in a university.

## Build Environment (Docker)
### Requirements
- Docker
	- https://docs.docker.com/get-docker/

### Intall Dependent Packages

In bash, enter the container
```sh
docker-compose run --rm app /bin/bash
```

In container, run this command
```sh
npm install
```

### Setting Host UID, GID
Open docker-compose.yml and set your host UID and GID on line 33

```sh
user: '{HOST_UID}:{HOST_GID}'
```